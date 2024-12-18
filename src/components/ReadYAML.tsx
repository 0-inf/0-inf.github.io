import loadYAML from '@/lib/loadYAML';
import ColorLink from './ColorLink';
import IdLink from './IdLink';
import { BlockType, BreakType, ComponentType, LinkType, SectionType, TextType } from '@/type/ReadYAML';
import { Fragment, lazy, Suspense } from 'react';
import clsx from 'clsx';

export default function ReadYAML({ filePath }: { filePath: string }) {
  const contentsData: BlockType[] | undefined = loadYAML<{ contents: BlockType[] }>(filePath)?.contents;

  return (
    <div>
      {contentsData &&
        contentsData.map((block, index) => (
          <Fragment key={index}>
            {block.block.map((item, i) => {
              if (item.name === 'text') {
                const textItem = item as TextType;
                return (
                  <Fragment key={i}>
                    {textItem.text.split('\\n').map((text, index) => {
                      return (
                        <p
                          key={index}
                          className={clsx(`${textItem?.indent ? 'indent-4' : ''}`, `${textItem.className || ''}`)}
                        >
                          {text}
                        </p>
                      );
                    })}
                  </Fragment>
                );
              } else if (item.name === 'span') {
                const spanItem = item as TextType;
                return (
                  <span key={i} className={`${spanItem?.indent ? 'ml-4' : ''} ${spanItem.className || ''}`}>
                    {spanItem.text}
                  </span>
                );
              } else if (item.name === 'p') {
                const pItem = item as TextType;
                return (
                  <p key={i} className={`${pItem?.indent ? 'indent-4' : ''} ${pItem.className || ''}`}>
                    {pItem.text}
                  </p>
                );
              } else if (item.name === 'link') {
                const linkItem = item as LinkType;
                return (
                  <span key={i} className={linkItem.className || ''}>
                    <ColorLink
                      name={linkItem.link}
                      url={linkItem.url}
                      blank={linkItem.blank === undefined ? true : linkItem.blank}
                    />
                  </span>
                );
              } else if (item.name === 'break') {
                const breakItem = item as BreakType;
                return (
                  <div key={i} className={`w-full ${breakItem.className || ''}`} style={{ height: breakItem.h }} />
                );
              } else if (item.name === 'section') {
                const sectionItem = item as SectionType;
                return (
                  <Fragment key={i}>
                    <IdLink id={sectionItem.section} />
                  </Fragment>
                );
              } else if (item.name === 'component') {
                const componentItem = item as ComponentType;
                return <DynamicComponentLoader key={i} component={componentItem} />;
              }
              return null;
            })}
          </Fragment>
        ))}
    </div>
  );
}

function DynamicComponentLoader({ component }: { component: ComponentType }) {
  const { component: componentInfo } = component;

  const { name, ...componentProps } = componentInfo[0];

  const Component = lazy(() => import(`@/components/${name}`));

  return (
    <Suspense fallback={<div>Loading {name}...</div>}>
      <Component {...componentProps} />
    </Suspense>
  );
}
