export interface News {
    nyheder: Nyheder[];
}

export interface Nyheder {
    newsTitle: string;
    published: string;
    urlSlug: string;
    content: {
        raw: unknown;
    };
    imageText: string;
    billedNyhed: { url: string, id: string };
    author: string;
}

export interface BilledNyhed {
    id: string;
    url: string;
}

export interface Content {
    raw: Raw;
}

export interface Raw {
    children: RawChild[];
}

export interface RawChild {
    type: Type;
    children: ChildChild[];
}

export interface ChildChild {
    text: string;
}

export enum Type {
    Paragraph = "paragraph",
}
