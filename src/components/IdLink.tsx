import Link from 'next/link';

export default function IdLink({ id }: { id: string }) {
  return (
    <div className="w-full">
      <div id={id} className="relative -top-16" />
      <h3 className="mt-4">
        <Link href={`#${id}`}>
          <span className="text-[--link]">§</span>
        </Link>
        {` ${id.charAt(0).toUpperCase()}${id.slice(1)}`}
      </h3>
    </div>
  );
}
