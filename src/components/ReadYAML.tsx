import loadYAML from '@/lib/loadYAML';
import { Fragment } from 'react';
import IdLink from './IdLink';
import Member from './Member';
import { MailtoBtn } from './EmojiBtn';
import ColorLink from './ColorLink';

// Component
type Member = { name: string };
type MailtoBtnType = { name: string; url: string };

type ComponentType = {
  name: string;
  component: (Member | MailtoBtnType)[];
};

// Text
type TextType = { name: string; text: string; indent?: boolean };
type LinkType = { name: string; link: string; url: string; blank?: boolean };

// Section
type SectionType = { name: string; section: string };

// Block
type BlockType = { block: (ComponentType | TextType | LinkType | SectionType)[] };

export default function ReadYAML({ filePath }: { filePath: string }) {
  const contentsData: BlockType[] | undefined = loadYAML<{ contents: BlockType[] }>(filePath)?.contents;

  return (
    <div>
      {contentsData &&
        contentsData?.map((block, index) => {
          return (
            <Fragment key={`block-${index}`}>
              {block.block[0].name === 'text' && (
                <span className={`${(block.block[0] as TextType)?.indent ? 'ml-4' : ''}`}>
                  {(block.block[0] as TextType).text}
                </span>
              )}
              {block.block[0].name === 'link' && (
                <span>
                  <ColorLink
                    name={(block.block[0] as LinkType).link}
                    url={(block.block[0] as LinkType).url}
                    blank={(block.block[0] as LinkType).blank === undefined ? true : (block.block[0] as LinkType).blank}
                  />
                </span>
              )}
              {block.block[0].name === 'section' && <IdLink id={(block.block[0] as SectionType).section} />}
              {block.block[0].name === 'component' && <ReadComponent component={block.block[0] as ComponentType} />}
            </Fragment>
          );
        })}
    </div>
  );
}

function ReadComponent({ component }: { component: ComponentType }) {
  const comp = component.component[0];

  switch (comp.name) {
    case 'Member':
      return <Member />;

    case 'MailtoBtn':
      return <MailtoBtn url={(comp as MailtoBtnType).url} />;
  }
  return <></>;
}
