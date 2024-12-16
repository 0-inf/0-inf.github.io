export type ComponentDataType = { name: string };

export type ComponentType = {
  name: string;
  component: ComponentDataType[];
};
export type TextType = { name: string; text: string; indent?: boolean };
export type LinkType = { name: string; link: string; url: string; blank?: boolean };
export type BreakType = { name: string; h: number | string };
export type SectionType = { name: string; section: string };
export type BlockType = { block: (ComponentType | TextType | LinkType | BreakType | SectionType)[] };
