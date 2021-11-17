enum VARIANT {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  p = 'p',
}

type Content = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  positionX: number;
  positionY: number;
  fontWeight: string;
  value: string;
};

export interface DeckConfig {
  page: number;
  contents: Array<Content>;
}

export interface Dimension {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface ProcessedDeckConfig extends DeckConfig {
  contents: Array<Content & Position>;
}
