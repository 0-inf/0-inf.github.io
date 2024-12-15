import { FaGithub, FaYoutube, FaGlobe, FaSoundcloud } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function EmojiBtn({
  url,
  name,
  className = '',
  spanClassName = '',
  children,
}: {
  url: string;
  name: string;
  className?: string;
  spanClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={url} target="_blank" className={`flex items-center gap-1 ${className}`}>
      {children}
      <span className={spanClassName}>{name}</span>
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

function MailtoBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={`mailto:${url}`} name={url} spanClassName="underline text-[--link]">
      <IoMail />
    </EmojiBtn>
  );
}

export { GithubBtn, YoutubeBtn, SoundcloudBtn, WebsiteBtn, MailtoBtn };
