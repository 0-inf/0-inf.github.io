import Link from 'next/link';

export default function IdLink({ id }: { id: string }) {
  return (
    <Link id={id} href={`/#${id}`} className="mt-2">
      <h3>
        <span className="text-[--id-link]">§</span>
        {` ${id.charAt(0).toUpperCase()}${id.slice(1)}`}
      </h3>
    </Link>
  );
}
