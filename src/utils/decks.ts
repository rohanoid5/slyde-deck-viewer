import { DeckConfig, Dimension, ProcessedDeckConfig } from '../types/decks';

const getProcessedDeckContent = (
  deckConfig: Array<DeckConfig>,
  dimension: Dimension,
): Array<ProcessedDeckConfig> => {
  const { width, height } = dimension;

  return deckConfig.map((pageConfig) => {
    const { contents, ...restOfConfig } = pageConfig;

    return {
      ...restOfConfig,
      contents: contents.map((content) => {
        const { positionX, positionY } = content;

        return {
          ...content,
          x: (positionX / width) * 100,
          y: (positionY / height) * 100,
        };
      }),
    };
  });
};

export { getProcessedDeckContent };
