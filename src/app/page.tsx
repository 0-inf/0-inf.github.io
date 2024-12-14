'use client';

import { useTheme } from './theme';
import IdLink from '@/components/IdLink';
import EmojiBtn from '@/components/EmojiBtn';
import Link from 'next/link';
import { Fragment } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { IoMail } from 'react-icons/io5';

type MemberInfoType = {
  name: string;
  github?: string;
  website?: string;
  youtube?: string;
  soundcloud?: string;
};

const members: MemberInfoType[] = [
  {
    name: 'Siwon Yun',
    github: 'https://www.github.com/ysw421',
    website: 'https://www.siwonsw.com',
  },
  {
    name: 'Jinjae Park',
    github: 'https://www.github.com/sleepncaffeine',
  },
  {
    name: 'Chaehwan Seol',
    github: 'https://www.github.com/seolmango',
    website: 'https://seolmango.github.io',
    youtube: 'https://www.youtube.com/channel/UCfnm0ljbPTutMH7DdMXg8iQ',
  },
  {
    name: 'Mossygoldcoin',
    github: 'https://www.github.com/Mossygoldcoin',
    youtube: 'https://www.youtube.com/channel/UCRzFMeRA2cFAr22wZi0EuxA',
  },
  {
    name: 'Hraverals',
    github: 'https://www.github.com/Hraverals',
    soundcloud: 'https://www.soundcloud.com/hraverals',
  },
  {
    name: 'Seonghyun Kim',
    github: 'https://www.github.com/FlyingChihwahwa',
    youtube: 'https://www.youtube.com/@SiONdot-of',
  },
];

function GithubBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={url} name="Github">
      <FaGithub />
    </EmojiBtn>
  );
}

function YoutubeBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={url} name="Youtube">
      <FaYoutube />
    </EmojiBtn>
  );
}

function SoundcloudBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={url} name="Soundcloud">
      <FaSoundcloud />
    </EmojiBtn>
  );
}

function WebsiteBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={url} name="Website">
      <FaGlobe />
    </EmojiBtn>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <nav className="flex flex-col justify-items-center w-full max-w-4xl mx-auto sticky top-0 z-50 p-4">
        <div className="w-full theme-inverse py-2 px-6 rounded-xl flex justify-between items-center">
          <h4>0-inf</h4>
          <div className="flex gap-4">
            <Link href="#member">Member</Link>
            <Link href="#about">About</Link>
            <Link href="#project">Project</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>
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
      <main className="flex flex-col justify-items-center max-w-4xl mx-auto p-4">
        <h4>Dear reader,</h4>
        <p>안녕하때욥! 0-inf이예욥!</p>
        <IdLink id="member" />
        <ul className="list-disc ml-8">
          {members.map((member, index) => (
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
        <Link href="mailto:zero2inf.zip@gmail.com" className="flex items-center gap-1">
          <IoMail />
          <span className="underline">zero2inf.zip@gmail.com</span>
        </Link>
        <h4 className="text-end w-full">
          <p className="-mb-2">Best,</p>
          <p>0-inf</p>
        </h4>
        <div className="bg-red-500 w-full p-6">block</div>
      </main>
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
    </>
  );
}
