import React from 'react';
import { Typography } from '@mui/material';

import DeckStyles from './Deck.module.scss';

const Deck: React.FC<{}> = () => {
  return (
    <div className={DeckStyles['deck-container']}>
      <div className={DeckStyles['title']}>
        <Typography variant="h1" align="center" sx={{ fontWeight: 500 }}>
          🚀 Micro-frontend{' '}
        </Typography>
        <Typography variant="h1" align="center" sx={{ fontWeight: 500 }}>
          Architecture{' '}
        </Typography>
      </div>
    </div>
  );
};

export default Deck;
