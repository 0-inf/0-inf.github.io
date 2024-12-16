import ColorLink from '@/components/ColorLink';
import loadYAML from '@/lib/loadYAML';
import { BlogDataType } from '@/type/BlogType';

export default function Blog() {
  const blogData: BlogDataType[] | undefined = loadYAML<{ blog: BlogDataType[] }>('/data/pages/blog.yml')?.blog;

  return (
    <>
      <h1 className="mb-4">Writing</h1>
      <ul className="flex flex-col gap-2">
        {blogData?.map((block_, i) => {
          const block = block_.block[0];
          return (
            <li key={i} className="border-t-2 p-2 border-dashed border-[--foreground]">
              <h2 className="mt-1">
                <ColorLink url={`/blog/${block.url}`} name={block.title} />
              </h2>
              <p>{block.subtitle}</p>
              <p className="text-sm">
                <ColorLink url={`/member/${block.author.replace(/ /g, '_')}`} name={`@${block.author}`} />
                {` (${block.date})`}
              </p>
            </li>
          );
        })}
        <li className="border-t-2 border-dashed" />
      </ul>
    </>
  );
}
