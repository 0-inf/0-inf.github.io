export default function EmojiBtn({ url, name, children }: { url: string; name: string; children: React.ReactNode }) {
  return (
    <a href={url} target="_blank" className="flex items-center gap-1">
      {children}
      <span>{name}</span>
    </a>
  );
}
