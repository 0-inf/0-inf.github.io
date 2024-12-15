import loadYAML from '@/lib/loadYAML';
import Image from 'next/image';

import { GithubBtn, SoundcloudBtn, WebsiteBtn, YoutubeBtn } from '@/components/EmojiBtn';
import { MemberInfoType, MemberDataType } from '@/type/MemberType';
import { Metadata } from 'next';

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: Params) {
  const { slug } = params;
  const name: string = slug.replace('_', ' ');

  const memberData: MemberDataType | null = loadYAML<MemberDataType>('/data/member.yml');
  const member: MemberInfoType | undefined = memberData?.members.find((item) => item.name === name);

  return (
    <>
      {member ? (
        <div className="flex gap-8">
          <div className="w-[300px]">
            <Image src={`/images/logo/${slug}.png`} width={300} height={300} alt={`${name} image`} />
          </div>
          <div className="w-full">
            <h1>{name}</h1>
            <div className="flex gap-8 mb-2 -mt-1">
              {member.github && <GithubBtn url={member.github} />}
              {member.youtube && <YoutubeBtn url={member.youtube} />}
              {member.soundcloud && <SoundcloudBtn url={member.soundcloud} />}
              {member.website && <WebsiteBtn url={member.website} />}
            </div>
            {member.introduction}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const name: string = params.slug.replace('_', ' ');

  return {
    title: `Member: ${name}`,
    description: `${name}'s Introduction`,
  };
}

export async function generateStaticParams() {
  const memberData: MemberDataType | null = loadYAML<MemberDataType>('/data/member.yml');

  const slugList = [{ slug: '__test__' }];
  memberData?.members.map((member) => {
    slugList.push({ slug: member.name.replace(/ /g, '_') });
  });

  return slugList;
}
