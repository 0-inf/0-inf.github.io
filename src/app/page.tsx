import { GithubBtn, YoutubeBtn } from '@/components/EmojiBtn';
import loadYAML from '@/lib/loadYAML';
import { Fragment } from 'react';
import ReadYAML from '@/components/ReadYAML';

export default function Home() {
  return (
    <>
      <Header />
      <h4 className="mb-2">Dear reader,</h4>
      <ReadYAML filePath="/data/pages/index.yml" />
      <Best />
      <div className="w-full h-8" />
    </>
  );
}

function Best() {
  return (
    <h4 className="text-end w-full">
      <p className="-mb-2">Best,</p>
      <p>0-inf</p>
    </h4>
  );
}

type SocialType = {
  name: string;
  url: string;
};

type SocialDataType = {
  social: SocialType[];
};

function Header() {
  const socialData = loadYAML<SocialDataType>('/data/setting.yml');

  return (
    <header className="flex flex-col justify-items-center items-center w-full py-40 gap-4">
      <div>
        <h1 className="w-full text-4xl md:text-7xl lg:text-8xl">Welcome to 0-inf </h1>
        <p className="text-end">Since 2020</p>
      </div>
      <div className="flex gap-8">
        {socialData &&
          socialData.social.map((social, index) => (
            <Fragment key={`social-${index}`}>
              {social.name == 'github' && <GithubBtn url={social.url} />}
              {social.name == 'youtube' && <YoutubeBtn url={social.url} />}
            </Fragment>
          ))}
      </div>
    </header>
  );
}
