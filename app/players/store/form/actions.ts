import { createAction } from 'typesafe-actions';
import { PlayerProps } from 'players/types';

export const setCurrent = createAction('PLAYERS/FORM/SET_CURRENT')<{player: PlayerProps, index: number}>();
