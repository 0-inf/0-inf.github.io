import loadYAML from '@/lib/loadYAML';
import Image from 'next/image';

import { GithubBtn, SoundcloudBtn, WebsiteBtn, YoutubeBtn } from '@/components/EmojiBtn';
import { MemberInfoType, MemberDataType } from '@/type/MemberType';

type PageProps<T extends Record<string, string>> = {
  params: T;
};

export default async function Post({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
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
