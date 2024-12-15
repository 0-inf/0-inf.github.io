import { FaGithub, FaYoutube, FaGlobe, FaSoundcloud } from 'react-icons/fa';

export default function EmojiBtn({
  url,
  name,
  className,
  children,
}: {
  url: string;
  name: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={url} target="_blank" className={`flex items-center gap-1 ${className || ''}`}>
      {children}
      <span>{name}</span>
    </a>
  );
}

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

export { GithubBtn, YoutubeBtn, SoundcloudBtn, WebsiteBtn };
