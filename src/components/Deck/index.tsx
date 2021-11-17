import React, { useRef } from 'react';

import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import useDimensions from '../../hooks/useDimensions';

import { getProcessedDeckContent } from '../../utils/decks';

import { DeckConfig, Dimension } from '../../types/decks';

import DeckStyles from './Deck.module.scss';

import mockDeckConfig from './deckConfig.json';

const Deck: React.FC<{}> = () => {
  const containerRef = useRef(null);
  const size = useDimensions(containerRef);

  const handleDrag = (_: DraggableEvent, data: DraggableData) => {
    console.log(data);
  };

  const renderContents = (deckConfigs: Array<DeckConfig>, currentDimension: Dimension) => {
    const [firstPage] = getProcessedDeckContent(deckConfigs, currentDimension);

    return firstPage.contents.map((content) => {
      return (
        <Typography
          variant={content.variant}
          sx={{
            fontWeight: content.fontWeight,
            position: 'absolute',
            left: `${content.x}%`,
            top: `${content.y}%`,
            width: 'max-content',
          }}
        >
          {content.value}
        </Typography>
      );
    });
  };

  return (
    <div className={DeckStyles['deck-container']} ref={containerRef}>
      {renderContents(mockDeckConfig as Array<DeckConfig>, size).slice(0, 1)}
      {/* <Draggable
        defaultClassName={DeckStyles['draggable']}
        defaultClassNameDragging={DeckStyles['dragging']}
        grid={[32, 32]}
        onStop={handleDrag}
        defaultPosition={{ x: 0, y: 0 }}
        bounds="parent"
      >
        <Typography variant="h1" sx={{ fontWeight: 500 }}>
          🚀 Micro-frontend{' '}
        </Typography>
      </Draggable> */}
      <Draggable
        defaultClassName={DeckStyles['draggable']}
        defaultClassNameDragging={DeckStyles['dragging']}
        grid={[32, 32]}
        onStop={handleDrag}
        defaultPosition={{ x: 0, y: 0 }}
        bounds="parent"
      >
        <Typography variant="h1" sx={{ fontWeight: 500 }}>
          Architecture{' '}
        </Typography>
      </Draggable>

      {/* <Typography
        variant="h1"
        sx={{
          fontWeight: 500,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '45%',
          width: 'max-content',
        }}
      >
        🚀 Micro-frontend
      </Typography> */}
      {/* <Typography
        variant="h1"
        sx={{
          fontWeight: 500,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '60%',
          width: 'max-content',
        }}
      >
        Architecture
      </Typography> */}

      <div className={DeckStyles['nav-btns']}>
        <IconButton disabled aria-label="left" color="primary" size="large">
          <KeyboardArrowLeftIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="right" color="primary" size="large">
          <KeyboardArrowRightIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Deck;
