import Link from 'next/link';

export default function ColorLink({ name, url, blank = false }: { name: string; url: string; blank?: boolean }) {
  return (
    <Link href={url} className="underline text-[--link] visited:text-[--visited]" target={blank ? '_blank' : ''}>
      {name}
    </Link>
  );
}
