"use client";

import { Github } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <Separator />
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-4 text-xs text-muted-foreground sm:hidden">
          <nav aria-label="Footer" className="flex items-center gap-5">
            <a
              href="https://agentskills.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Agent Skills
            </a>
            <a
              href="https://github.com/raintree-technology/apple-hig-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/raintree_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
            </a>
          </nav>
          <p>
            <a
              href="https://github.com/raintree-technology/apple-hig-skills/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              MIT License
            </a>
            {" · "}
            <a
              href="https://raintree.technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Raintree Technology
            </a>
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex sm:items-center sm:justify-between text-xs text-muted-foreground">
          <nav aria-label="Footer" className="flex items-center gap-6">
            <a
              href="https://agentskills.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Agent Skills
            </a>
            <a
              href="https://github.com/raintree-technology/apple-hig-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/raintree-technology/apple-hig-skills/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              MIT License
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://raintree.technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Raintree Technology
            </a>
            <a
              href="https://x.com/raintree_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/raintree-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
