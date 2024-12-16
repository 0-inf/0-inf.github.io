import ColorLink from '@/components/ColorLink';
import ReadYAML from '@/components/ReadYAML';
import loadYAML from '@/lib/loadYAML';
import { BlockType, BlogDataType } from '@/type/BlogType';

import { Metadata } from 'next';

type tParams = Promise<{ slug: string }>;

export default async function Post(props: { params: tParams }) {
  const { slug } = await props.params;
  const url: string = slug;
  const blogData: BlogDataType[] | undefined = loadYAML<{ blog: BlogDataType[] }>('/data/pages/blog.yml')?.blog;
  const blog: BlockType | undefined = blogData?.find((item) => item.block[0].url === url)?.block[0];

  return (
    <>
      <div className="border-y-2 p-2 border-dashed mb-8 border-[--foreground]">
        <h1 className="mt-1">{blog?.title}</h1>
        <p>{blog?.subtitle}</p>
        <p className="text-sm">
          <ColorLink url={`/member/${blog?.author.replace(/ /g, '_')}`} name={`@${blog?.author}`} />
          {` (${blog?.date})`}
        </p>
      </div>
      <ReadYAML filePath={`/data/pages/blog/${url}.yml`} />
    </>
  );
}

export async function generateMetadata(props: { params: tParams }): Promise<Metadata> {
  const { slug } = await props.params;
  const url: string = slug;
  const blogData: BlogDataType[] | undefined = loadYAML<{ blog: BlogDataType[] }>('/data/pages/blog.yml')?.blog;
  const blog: BlockType | undefined = blogData?.find((item) => item.block[0].url === url)?.block[0];

  return blog
    ? {
        title: 'hello',
        description: `!!!!!!!!!!!!!!!!!!!subtitle!!`,
      }
    : { title: '404', description: 'Not Founded Error' };
}

export async function generateStaticParams() {
  const blogData: BlogDataType[] | undefined = loadYAML<{ blog: BlogDataType[] }>('/data/pages/blog.yml')?.blog;

  const slugList = [{ slug: '__test__' }];
  blogData?.map((block) => {
    slugList.push({ slug: block.block[0].url });
  });

  return slugList;
}
