import loadYAML from '@/lib/loadYAML';
import ColorLink from './ColorLink';
import IdLink from './IdLink';
import { BlockType, BreakType, ComponentType, LinkType, SectionType, TextType } from '@/type/ReadYAML';
import { Fragment, lazy, Suspense } from 'react';

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
                  <span key={i} className={`${textItem?.indent ? 'ml-4' : ''}`}>
                    {textItem.text}
                  </span>
                );
              } else if (item.name === 'link') {
                const linkItem = item as LinkType;
                return (
                  <span key={i}>
                    <ColorLink
                      name={linkItem.link}
                      url={linkItem.url}
                      blank={linkItem.blank === undefined ? true : linkItem.blank}
                    />
                  </span>
                );
              } else if (item.name === 'break') {
                const breakItem = item as BreakType;
                return <div key={i} className="w-full" style={{ height: breakItem.h }} />;
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
