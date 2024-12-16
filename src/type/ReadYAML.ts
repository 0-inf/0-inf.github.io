export type ComponentDataType = { name: string };

export type ComponentType = {
  name: string;
  component: ComponentDataType[];
};
export type TextType = { name: string; className?: string; text: string; indent?: boolean };
export type LinkType = { name: string; className?: string; link: string; url: string; blank?: boolean };
export type BreakType = { name: string; className?: string; h: number | string };
export type SectionType = { name: string; className?: string; section: string };
export type BlockType = { block: (ComponentType | TextType | LinkType | BreakType | SectionType)[] };
