import loadYAML from '@/lib/loadYAML';
import { Fragment } from 'react';
import { GithubBtn, SoundcloudBtn, WebsiteBtn, YoutubeBtn } from '@/components/EmojiBtn';
import { MemberDataType } from '@/type/MemberType';
import ColorLink from '@/components/ColorLink';

export default function Member() {
  const memberData = loadYAML<MemberDataType>('/data/member.yml');

  return (
    <>
      {memberData ? (
        <ul className="list-disc ml-8 sm:columns-2">
          {memberData.members.map((member, index) => (
            <Fragment key={`member-${index}`}>
              <li>
                <ColorLink name={member.name} url={`/member/${member.name.replace(/ /g, '_')}`} />
              </li>
              <div className="flex gap-8">
                {member.github && <GithubBtn url={member.github} />}
                {member.youtube && <YoutubeBtn url={member.youtube} />}
                {member.soundcloud && <SoundcloudBtn url={member.soundcloud} />}
                {member.website && <WebsiteBtn url={member.website} />}
              </div>
            </Fragment>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
