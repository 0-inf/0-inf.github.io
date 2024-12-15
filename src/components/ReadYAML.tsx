import loadYAML from '@/lib/loadYAML';
import { Fragment } from 'react';
import IdLink from './IdLink';
import Member from './Member';
import { MailtoBtn } from './EmojiBtn';

// Component
type DearType = { name: string };
type BestType = { name: string };
type Member = { name: string };
type MailtoBtnType = { name: string; url: string };

type ComponentType = {
  name: string;
  component: (DearType | BestType | Member | MailtoBtnType)[];
};

// Text
type TextType = { name: string; text: string };

// Section
type SectionType = { name: string; section: string };

// Block
type BlockType = { block: (ComponentType | TextType | SectionType)[] };

export default function ReadYAML({ filePath }: { filePath: string }) {
  const contentsData: BlockType[] | undefined = loadYAML<{ contents: BlockType[] }>(filePath)?.contents;

  return (
    <>
      {contentsData &&
        contentsData?.map((block, index) => {
          return (
            <Fragment key={`block-${index}`}>
              {block.block[0].name === 'text' && <span>{(block.block[0] as TextType).text}</span>}
              {block.block[0].name === 'section' && <IdLink id={(block.block[0] as SectionType).section} />}
              {block.block[0].name === 'component' && <ReadComponent component={block.block[0] as ComponentType} />}
            </Fragment>
          );
        })}
    </>
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
