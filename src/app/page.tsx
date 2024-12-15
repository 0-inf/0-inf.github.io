'use client';

import { useTheme } from './theme';
import IdLink from '@/components/IdLink';
import EmojiBtn, { GithubBtn, YoutubeBtn, SoundcloudBtn, WebsiteBtn } from '@/components/EmojiBtn';
import { Fragment, useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import loadYAML from '@/lib/loadYAML';

// Emojis
import { CiLight, CiDark } from 'react-icons/ci';
import { IoMail } from 'react-icons/io5';

type MemberInfoType = {
  name: string;
  github?: string;
  website?: string;
  youtube?: string;
  soundcloud?: string;
};

type MembersDataType = {
  members: MemberInfoType[];
};

export default function Home() {
  const [membersData, setMembersData] = useState<MembersDataType | null>(null);

  useEffect(() => {
    loadYAML<MembersDataType>('/data/members.yml', setMembersData);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <main className="flex flex-col justify-items-center max-w-4xl mx-auto p-4">
        <h4>Dear reader,</h4>
        <p>안녕하때욥! 0-inf이예욥!</p>
        <IdLink id="member" />
        {membersData ? (
          <ul className="list-disc ml-8">
            {membersData.members.map((member, index) => (
              <Fragment key={`member-${index}`}>
                <li>{member.name}</li>
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
        <IdLink id="about" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisl lorem. Cras aliquam risus tellus, in
          porta risus finibus a. Sed ex enim, gravida ut nisl eu, bibendum pretium est. Cras velit odio, lobortis eu
          bibendum id, posuere ut urna. Morbi ac lorem eleifend, interdum lacus eget, elementum elit. Aenean et
          pellentesque mi, non feugiat neque. Nulla pellentesque tellus tellus, vitae porta nisi posuere vitae. Donec
          luctus feugiat sapien, et pharetra magna vestibulum vel. Maecenas et tortor sed urna aliquam pellentesque nec
          at lorem. Vivamus consectetur hendrerit tincidunt. Maecenas ullamcorper neque risus, quis ornare ligula
          porttitor vitae. Integer sed accumsan velit, vel commodo lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis cursus purus id rhoncus elementum. Sed eu pellentesque urna. Suspendisse pellentesque
          vehicula commodo. Nam auctor tristique felis. Mauris scelerisque nisl ut eros dignissim hendrerit. Duis nec
          vulputate leo. Praesent et risus purus. Phasellus quis massa lacus. Aliquam tincidunt id mi nec lacinia. Nunc
          vitae purus eu augue viverra imperdiet sed vitae augue. Sed commodo libero non dolor mattis scelerisque. Sed
          ac blandit felis. Nunc vitae maximus velit. Ut ornare convallis mi et vehicula. Sed porta mattis fringilla.
          Sed in quam sit amet orci vehicula fermentum. Maecenas placerat in nibh vitae imperdiet. Sed sit amet orci
          diam. Donec blandit quam vel interdum imperdiet. Quisque bibendum sodales molestie. Quisque a sollicitudin
          ligula, quis efficitur felis. Mauris quis arcu vitae sapien auctor vestibulum. Integer metus purus, maximus
          nec justo ac, consectetur sodales lacus. Mauris nisi felis, ultrices id sagittis a, dictum et nulla. Aliquam
          ac sem non erat condimentum mollis id in nisi. Pellentesque vel luctus risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce in fermentum diam, ut efficitur risus. Nunc eget
          molestie elit. In non odio non dui accumsan feugiat et at orci. Phasellus lobortis ac nisi nec viverra. Proin
          condimentum vehicula sem sit amet laoreet. Morbi vitae semper nisi, et consectetur velit. Mauris sem est,
          pretium ac viverra eu, efficitur ac lorem. Proin blandit quis quam eu pellentesque. Fusce tempus dolor sem, in
          bibendum tellus convallis sed. Nam euismod dictum enim nec mollis. Donec a tempus dui. Etiam eget interdum
          felis. Nulla orci mi, ullamcorper id porttitor sed, sollicitudin quis erat. Ut quis sodales orci.
        </p>
        <IdLink id="project" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisl lorem. Cras aliquam risus tellus, in
          porta risus finibus a. Sed ex enim, gravida ut nisl eu, bibendum pretium est. Cras velit odio, lobortis eu
          bibendum id, posuere ut urna. Morbi ac lorem eleifend, interdum lacus eget, elementum elit. Aenean et
          pellentesque mi, non feugiat neque. Nulla pellentesque tellus tellus, vitae porta nisi posuere vitae. Donec
          luctus feugiat sapien, et pharetra magna vestibulum vel. Maecenas et tortor sed urna aliquam pellentesque nec
          at lorem. Vivamus consectetur hendrerit tincidunt. Maecenas ullamcorper neque risus, quis ornare ligula
          porttitor vitae. Integer sed accumsan velit, vel commodo lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis cursus purus id rhoncus elementum. Sed eu pellentesque urna. Suspendisse pellentesque
          vehicula commodo. Nam auctor tristique felis. Mauris scelerisque nisl ut eros dignissim hendrerit. Duis nec
          vulputate leo. Praesent et risus purus. Phasellus quis massa lacus. Aliquam tincidunt id mi nec lacinia. Nunc
          vitae purus eu augue viverra imperdiet sed vitae augue. Sed commodo libero non dolor mattis scelerisque. Sed
          ac blandit felis. Nunc vitae maximus velit. Ut ornare convallis mi et vehicula. Sed porta mattis fringilla.
          Sed in quam sit amet orci vehicula fermentum. Maecenas placerat in nibh vitae imperdiet. Sed sit amet orci
          diam. Donec blandit quam vel interdum imperdiet. Quisque bibendum sodales molestie. Quisque a sollicitudin
          ligula, quis efficitur felis. Mauris quis arcu vitae sapien auctor vestibulum. Integer metus purus, maximus
          nec justo ac, consectetur sodales lacus. Mauris nisi felis, ultrices id sagittis a, dictum et nulla. Aliquam
          ac sem non erat condimentum mollis id in nisi. Pellentesque vel luctus risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce in fermentum diam, ut efficitur risus. Nunc eget
          molestie elit. In non odio non dui accumsan feugiat et at orci. Phasellus lobortis ac nisi nec viverra. Proin
          condimentum vehicula sem sit amet laoreet. Morbi vitae semper nisi, et consectetur velit. Mauris sem est,
          pretium ac viverra eu, efficitur ac lorem. Proin blandit quis quam eu pellentesque. Fusce tempus dolor sem, in
          bibendum tellus convallis sed. Nam euismod dictum enim nec mollis. Donec a tempus dui. Etiam eget interdum
          felis. Nulla orci mi, ullamcorper id porttitor sed, sollicitudin quis erat. Ut quis sodales orci.
        </p>
        <IdLink id="contact" />
        <EmojiBtn url="mailto:zero2inf.zip@gmail.com" name="zero2inf.zip@gmail.com" className="underline">
          <IoMail />
        </EmojiBtn>
        <h4 className="text-end w-full">
          <p className="-mb-2">Best,</p>
          <p>0-inf</p>
        </h4>
        <div className="bg-red-500 w-full p-6">block</div>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-items-center items-center w-full py-40 gap-4">
      <div>
        <h1 className="text-8xl">Welcome to 0-inf</h1>
        <p className="text-end">Since 2020</p>
      </div>
      <div className="flex gap-8">
        <GithubBtn url="https://www.github.com/zerotoinf" />
        <YoutubeBtn url="https://www.youtube.com/@zerotoinf" />
      </div>
    </header>
  );
}

function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="flex flex-col justify-items-center w-full theme-inverse">
      <div className="w-full max-w-4xl mx-auto gap-4 p-4">
        <div>
          <h1>0-inf</h1>
          <div className="flex justify-between">
            <p>We make something weird</p>
            <button onClick={toggleTheme}>
              <div className="flex gap-1 items-center">{theme == 'dark' ? <CiLight /> : <CiDark />}Theme</div>
            </button>
          </div>
        </div>
        <div className="flex w-full h-28 items-center">
          <p>
            Made with ❤️️ by the <b>0-inf</b> team
          </p>
        </div>
      </div>
    </footer>
  );
}
