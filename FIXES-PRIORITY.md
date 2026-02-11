# Apple HIG Compliance Fixes - Prioritized Action Plan

**Site:** apple-hig-skills marketing website  
**Audit Date:** February 11, 2026  
**Priority Framework:** Impact × Effort = Priority Score

---

## 🚨 Critical Fixes (DO IMMEDIATELY)

### 1. Color Contrast - Muted Foreground Text
**Impact:** Critical (Accessibility / WCAG AA Compliance)  
**Effort:** Low (30 minutes)  
**HIG Citation:** `hig-foundations/references/accessibility.md`, `hig-foundations/references/color.md`

**Problem:** Muted text provides only 3.8:1 contrast ratio, failing WCAG AA minimum of 4.5:1.

**Fix:**
```css
/* website/app/globals.css */
/* BEFORE */
--muted-foreground: 0 0% 55%;

/* AFTER */
--muted-foreground: 0 0% 65%; /* Achieves ~5.2:1 contrast */
```

**Test:** Verify contrast with WebAIM Contrast Checker on:
- Section descriptions
- Table secondary text
- Card descriptions
- Footer links

**Validation:**
```bash
# After change, test these elements:
# - p.text-muted-foreground
# - td.text-muted-foreground
# - span.text-muted-foreground
```

---

### 2. Skills Table Keyboard Navigation - Expandable Rows
**Impact:** Critical (Accessibility / Keyboard Navigation)  
**Effort:** Medium (3-4 hours)  
**HIG Citation:** `hig-foundations/references/accessibility.md`, `hig-inputs/references/keyboards.md`

**Problem:** When table rows expand, focus doesn't move to reference links. Users must tab out and back in to access nested links.

**Fix:**
```tsx
// website/components/Skills.tsx

// Add focus management
const toggle = (name: string) => {
  const wasOpen = expanded.has(name);
  setExpanded((prev) => {
    const next = new Set(prev);
    if (next.has(name)) {
      next.delete(name);
    } else {
      next.add(name);
    }
    return next;
  });
  
  // Move focus to first link when expanding
  if (!wasOpen) {
    setTimeout(() => {
      const expandedRow = document.querySelector(
        `[data-skill-name="${name}"] + tr [role="region"]`
      );
      const firstLink = expandedRow?.querySelector('a');
      (firstLink as HTMLElement)?.focus();
    }, 100); // Allow animation to start
  }
};

// Add data attribute to identify rows
<TableRow
  data-skill-name={skill.name}
  // ... existing props
>

// Add role to expanded content
<TableCell
  colSpan={5}
  className="border-b border-border/30 bg-accent/10 p-0"
>
  <div 
    className="px-5 py-4 pl-11"
    role="region"
    aria-label={`${skill.displayName} references`}
  >
```

**Test Plan:**
1. Tab to expandable row
2. Press Enter/Space to expand
3. **Verify:** Focus moves to first reference link
4. Tab through all reference links
5. **Verify:** Can reach all links without tabbing out
6. Tab again to exit to next table row

---

## 🔥 High Priority (Complete Within 1 Week)

### 3. Font Size Audit - Increase Minimum Sizes
**Impact:** High (Accessibility / Readability)  
**Effort:** Low (1-2 hours)  
**HIG Citation:** `hig-foundations/references/typography.md`

**Problem:** Several text elements below HIG minimum of 11pt for iOS/iPadOS web experiences.

**Fixes:**

```tsx
// 1. Table headers
// website/components/Skills.tsx
// BEFORE
<TableHead className="text-sm uppercase tracking-wider">

// AFTER  
<TableHead className="text-[13px] uppercase tracking-wider"> // 9.75pt → acceptable for all-caps

// 2. Badge text
// website/components/ui/badge.tsx (if used) or inline styles
// BEFORE
<span className="text-xs font-medium">

// AFTER
<span className="text-[11px] font-medium"> // Exactly 11pt minimum

// 3. Footer text
// website/components/Footer.tsx - audit and ensure 11pt+ minimum
```

**Test:** Visual inspection at 1x zoom, verify readability on iOS Safari.

---

### 4. Layout Spacing - Standardize to 8pt Grid
**Impact:** Medium-High (Visual Consistency)  
**Effort:** Medium (4-6 hours)  
**HIG Citation:** `hig-foundations/references/layout.md`

**Problem:** Inconsistent spacing breaks Apple's 8pt grid system.

**Fixes:**

```tsx
// Create custom Tailwind spacing scale in tailwind.config.ts
// website/tailwind.config.ts

export default {
  theme: {
    extend: {
      spacing: {
        // Apple 8pt grid (Tailwind unit = 4px)
        // Use even numbers: 2=8px, 4=16px, 6=24px, 8=32px, etc.
        // Audit guide:
        // mb-3 (12px) → mb-4 (16px)
        // mb-5 (20px) → mb-4 or mb-6
        // px-5 (20px) → px-4 or px-6
        // h-14 (56px) → h-16 (64px)
      }
    }
  }
}

// Systematic replacement:

// 1. Hero.tsx
// BEFORE: mb-5 (20px)
<h1 className="... mb-5">
// AFTER: mb-6 (24px)
<h1 className="... mb-6">

// BEFORE: mb-3 (12px) - acceptable as 1.5 units
// Keep or change to mb-4 for stricter compliance

// 2. Header.tsx
// BEFORE: h-14 (56px = 7 units)
<nav className="flex h-14 items-center">
// AFTER: h-16 (64px = 8 units)
<nav className="flex h-16 items-center">

// 3. All components with px-5, mx-5, etc.
// Use find/replace to audit:
```

**Audit Script:**
```bash
# Find all spacing classes
cd website
grep -r "mb-[135]" components/ app/ | grep -v node_modules
grep -r "px-[135]" components/ app/ | grep -v node_modules  
grep -r "h-14\|h-15\|h-13" components/ app/ | grep -v node_modules

# Review each and change to nearest even number (2, 4, 6, 8, 10, 12, etc.)
```

---

### 5. Tab Panel Arrow Key Navigation
**Impact:** Medium (Keyboard Accessibility)  
**Effort:** Low (30-60 minutes)  
**HIG Citation:** `hig-patterns/references/navigation.md`

**Problem:** Tab controls don't support arrow key navigation (standard pattern).

**Fix:**
```tsx
// website/components/BeforeAfter.tsx

// Verify Radix UI Tabs implementation includes arrow keys
// Add explicit keyboard handler if needed:

const [selectedTab, setSelectedTab] = useState("ipad");

const handleKeyDown = (e: React.KeyboardEvent) => {
  const tabs = ["ipad", "dark", "notifications"];
  const currentIndex = tabs.indexOf(selectedTab);
  
  if (e.key === "ArrowRight") {
    e.preventDefault();
    const nextIndex = (currentIndex + 1) % tabs.length;
    setSelectedTab(tabs[nextIndex]);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setSelectedTab(tabs[prevIndex]);
  }
};

<Tabs 
  value={selectedTab} 
  onValueChange={setSelectedTab}
  onKeyDown={handleKeyDown}
>
  <TabsList>
    {/* Tabs */}
  </TabsList>
</Tabs>
```

**Test:** 
1. Tab to tab list
2. Press Right Arrow → should move to next tab
3. Press Left Arrow → should move to previous tab
4. Verify wraps around from last to first

---

### 6. Mobile Menu ARIA Roles
**Impact:** Medium (Screen Reader Accessibility)  
**Effort:** Low (30 minutes)  
**HIG Citation:** `hig-components-menus/references/menus.md`, `hig-foundations/references/accessibility.md`

**Problem:** Mobile menu missing proper ARIA menu/menuitem roles.

**Fix:**
```tsx
// website/components/Header.tsx

// BEFORE
<div className="flex flex-col gap-1">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      onClick={closeMenu}
      tabIndex={menuOpen ? 0 : -1}
      className={...}
    >
      {item.label}
    </a>
  ))}
</div>

// AFTER
<div className="flex flex-col gap-1" role="menu">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      onClick={closeMenu}
      role="menuitem"
      tabIndex={menuOpen ? 0 : -1}
      className={...}
    >
      {item.label}
    </a>
  ))}
</div>
```

**Test:** VoiceOver (Mac) or NVDA (Windows) should announce "menu" when entering and "menu item" for each link.

---

### 7. Active Navigation State Visual Enhancement
**Impact:** Medium (Visual Clarity)  
**Effort:** Low (30 minutes)  
**HIG Citation:** `hig-patterns/references/navigation.md`

**Problem:** 1px underline too subtle for active navigation state.

**Fix:**
```tsx
// website/components/Header.tsx

// BEFORE
<a
  className={cn(
    "text-sm transition-colors relative py-1",
    isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground",
  )}
>
  {item.label}
  {isActive && (
    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />
  )}
</a>

// AFTER (Option 1: Thicker underline)
{isActive && (
  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-foreground rounded-full" />
)}

// AFTER (Option 2: Background pill - more Apple-like)
<a
  className={cn(
    "text-sm transition-all relative px-3 py-1.5 rounded-full",
    isActive
      ? "text-foreground bg-accent"
      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
  )}
>
  {item.label}
</a>
```

---

## 📋 Medium Priority (Complete Within 2 Weeks)

### 8. Light Mode Implementation
**Impact:** Medium (User Preference Support)  
**Effort:** High (8-12 hours)  
**HIG Citation:** `hig-foundations/references/color.md`, `hig-foundations/references/dark-mode.md`

**Problem:** Only dark mode supported, HIG recommends both light and dark.

**Implementation Plan:**

**Phase 1: Color Tokens (2 hours)**
```css
/* website/app/globals.css */

@layer base {
  :root {
    /* Light mode colors */
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 98%;
    --card-foreground: 0 0% 10%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 40%;
    --accent: 0 0% 94%;
    --border: 0 0% 90%;
    /* ... */
  }

  .dark {
    /* Existing dark mode colors */
    --background: 225 10% 6%;
    --foreground: 0 0% 95%;
    /* ... */
  }
}
```

**Phase 2: Theme Detection (2 hours)**
```tsx
// website/app/layout.tsx

'use client';

import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <html lang="en" className={theme}>
      {/* ... */}
    </html>
  );
}
```

**Phase 3: Component Adjustments (4-6 hours)**
- Audit all components for hard-coded colors
- Replace with CSS variables
- Test light mode appearance
- Adjust photo background overlay for light mode

**Phase 4: Testing (2 hours)**
- Test all sections in both modes
- Verify smooth transition
- Check contrast ratios in light mode

---

### 9. Increased Contrast Mode Support
**Impact:** Medium (Accessibility)  
**Effort:** Low-Medium (2-3 hours)  
**HIG Citation:** `hig-foundations/references/color.md`, `hig-foundations/references/accessibility.md`

**Fix:**
```css
/* website/app/globals.css */

@media (prefers-contrast: more) {
  :root {
    --foreground: 0 0% 100%; /* Pure white */
    --background: 0 0% 0%; /* Pure black */
    --muted-foreground: 0 0% 80%; /* Higher contrast */
    --border: 225 10% 30%; /* More visible borders */
    --accent: 225 10% 20%; /* Stronger accent */
  }
}
```

---

### 10. Breadcrumb Navigation for Topic Pages
**Impact:** Medium (Navigation UX)  
**Effort:** Medium (2-3 hours)  
**HIG Citation:** `hig-patterns/references/navigation.md`

**Implementation:**
```tsx
// website/components/Breadcrumbs.tsx (new file)

export default function Breadcrumbs({ 
  items 
}: { 
  items: { label: string; href?: string }[] 
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <a 
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// website/app/topics/[slug]/page.tsx
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TopicPage({ params }) {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Topics', href: '/topics' },
          { label: topicTitle }, // Current page, no href
        ]}
      />
      {/* Topic content */}
    </>
  );
}
```

---

### 11. Search Results Live Region Announcement
**Impact:** Medium (Screen Reader UX)  
**Effort:** Low (30 minutes)  
**HIG Citation:** `hig-foundations/references/accessibility.md`, `hig-components-search/references/search-fields.md`

**Fix:**
```tsx
// website/components/Skills.tsx

const [filter, setFilter] = useState("");
const [announcedCount, setAnnouncedCount] = useState<number | null>(null);

// Update announcement when results change
useEffect(() => {
  if (filter) {
    setAnnouncedCount(filteredSkills.length);
  } else {
    setAnnouncedCount(null);
  }
}, [filteredSkills.length, filter]);

return (
  <section>
    {/* Visually hidden live region for screen readers */}
    <div 
      role="status" 
      aria-live="polite" 
      aria-atomic="true"
      className="sr-only"
    >
      {announcedCount !== null && (
        `${announcedCount} ${announcedCount === 1 ? 'skill' : 'skills'} found`
      )}
    </div>
    
    {/* Search input */}
    <input ... />
    
    {/* Results table */}
  </section>
);
```

---

### 12. Table Responsive Mobile Layout
**Impact:** Medium (Mobile UX)  
**Effort:** Medium (3-4 hours)  
**HIG Citation:** `hig-foundations/references/layout.md`

**Implementation:**
```tsx
// website/components/Skills.tsx

// Mobile card layout
const SkillCard = ({ skill }) => (
  <Card className="p-4">
    <div className="flex items-start justify-between mb-2">
      <h3 className="font-semibold">{skill.displayName}</h3>
      {skill.refCount > 0 && (
        <Badge variant="secondary">{skill.refCount} refs</Badge>
      )}
    </div>
    <p className="text-sm text-muted-foreground mb-2">{skill.category}</p>
    <p className="text-sm text-muted-foreground">{skill.description}</p>
    {skill.references.length > 0 && (
      <Accordion type="single" collapsible className="mt-3">
        <AccordionItem value="refs">
          <AccordionTrigger>View references</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              {skill.references.map(ref => (
                <li key={ref}>
                  <a href={`/topics/${refToSlug(ref)}`} className="text-sm">
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )}
  </Card>
);

return (
  <>
    {/* Mobile: Cards (< 768px) */}
    <div className="md:hidden space-y-3">
      {filteredSkills.map(skill => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>

    {/* Desktop: Table (>= 768px) */}
    <div className="hidden md:block">
      <Table>...</Table>
    </div>
  </>
);
```

---

## 🔧 Quick Wins (< 1 Hour Each)

### 13. Search Input Attributes
**Effort:** 5 minutes
```tsx
<input
  type="search"
  autoComplete="off"
  spellCheck="false"
  // ... existing props
/>
```

### 14. GitHub Stars Loading State
**Effort:** 15 minutes
```tsx
const [stars, setStars] = useState<number | null>(null);
const [starsLoading, setStarsLoading] = useState(true);

useEffect(() => {
  fetch("...")
    .then(res => res.json())
    .then(data => {
      setStars(data.stargazers_count);
      setStarsLoading(false);
    })
    .catch(() => setStarsLoading(false));
}, []);

// In render:
{starsLoading ? (
  <span className="inline-flex items-center rounded-full bg-muted/50 px-2 py-0.5 text-xs">
    ...
  </span>
) : stars !== null ? (
  <span className="inline-flex items-center rounded-full bg-muted/50 px-2 py-0.5 text-xs tabular-nums">
    {stars.toLocaleString()}
  </span>
) : null}
```

### 15. Icon Button Tooltips
**Effort:** 30 minutes
```tsx
// Install a tooltip library or use title attribute
<Button
  variant="ghost"
  size="icon"
  onClick={handleCopy}
  aria-label={copied ? "Copied to clipboard" : "Copy install command"}
  title={copied ? "Copied!" : "Copy to clipboard"}
>
```

### 16. External Links Language Attribute
**Effort:** 15 minutes
```tsx
// Audit all external links and add hrefLang where appropriate
<a 
  href="https://developer.apple.com/design/human-interface-guidelines"
  target="_blank"
  rel="noopener noreferrer"
  hrefLang="en"
>
```

---

## 🗂️ Backlog (Nice to Have)

### 17. Print Stylesheet
**Effort:** 1-2 hours
```css
@media print {
  header, footer, .skip-link, nav {
    display: none !important;
  }
  
  body {
    background: white !important;
    color: black !important;
  }
  
  .photo-bg::before,
  .photo-bg::after {
    display: none !important;
  }
  
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }
  
  .glass {
    background: white !important;
    border: 1px solid #ccc !important;
  }
}
```

### 18. Topic Pages Loading States
**Effort:** 2-3 hours  
Implement Suspense boundaries with skeleton loading for topic detail pages.

### 19. Error Boundary for GitHub API
**Effort:** 1 hour  
Show error toast or inline message if GitHub API fails.

---

## Implementation Timeline

### Week 1 (Critical + High Priority)
- **Day 1:** Color contrast fix (30 min) + Font size audit (2 hours)
- **Day 2:** Table keyboard navigation (4 hours)
- **Day 3:** 8pt grid spacing audit (6 hours)
- **Day 4:** Tab arrow keys (1 hour) + Mobile menu ARIA (30 min) + Active nav state (30 min)
- **Day 5:** Testing and validation

### Week 2 (Medium Priority)
- **Days 1-2:** Light mode implementation (12 hours)
- **Day 3:** Increased contrast mode (3 hours) + Breadcrumbs (3 hours)
- **Day 4:** Search announcements (30 min) + Responsive table (4 hours)
- **Day 5:** Testing and validation

### Week 3 (Quick Wins + Polish)
- All quick wins (2 hours total)
- Additional testing
- Documentation updates

---

## Success Metrics

**After completing Critical + High Priority fixes:**
- ✅ WCAG AA compliance achieved
- ✅ Full keyboard navigation support
- ✅ Improved visual consistency
- ✅ Better screen reader experience

**After completing Medium Priority fixes:**
- ✅ Light/dark mode support
- ✅ Enhanced navigation UX
- ✅ Mobile-optimized experience
- ✅ Increased accessibility coverage

---

## Testing Checklist

- [ ] Color contrast verified with WebAIM Contrast Checker
- [ ] Keyboard navigation tested (Tab, Enter, Space, Arrows)
- [ ] Screen reader tested (VoiceOver on Mac or NVDA on Windows)
- [ ] Mobile responsive tested (375px to 768px widths)
- [ ] Light and dark modes tested
- [ ] Increased contrast mode tested
- [ ] Print preview tested
- [ ] Cross-browser tested (Safari, Chrome, Firefox)
- [ ] iOS Safari tested (for touch targets and safe areas)

---

## Resources

**HIG References Used:**
- `skills/hig-foundations/references/accessibility.md`
- `skills/hig-foundations/references/color.md`
- `skills/hig-foundations/references/typography.md`
- `skills/hig-foundations/references/layout.md`
- `skills/hig-patterns/references/navigation.md`
- `skills/hig-inputs/references/keyboards.md`
- `skills/hig-components-search/references/search-fields.md`

**Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Accessibility Panel
- [Accessibility Insights](https://accessibilityinsights.io/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

**Estimated Total Effort:**
- Critical: 4-5 hours
- High Priority: 8-12 hours
- Medium Priority: 20-28 hours
- Quick Wins: 2 hours
- **Total:** 34-47 hours for complete implementation
