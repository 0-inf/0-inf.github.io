import EmojiBtn from '@/components/EmojiBtn';
import React from 'react';
import { IoMail } from 'react-icons/io5';

export type MailtoBtnProps = { url: string };

export default function MailtoBtn({ url }: { url: string }) {
  return (
    <EmojiBtn url={`mailto:${url}`} name={url} className="w-fit" spanClassName="underline text-[--link]">
      <IoMail />
    </EmojiBtn>
  );
}
