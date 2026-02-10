export default function TopicContent({ html }: { html: string }) {
  return (
    <article className="prose-hig" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
