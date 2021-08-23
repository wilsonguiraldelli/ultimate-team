import { createAction } from 'typesafe-actions';
import { SaturdayProps } from 'saturday/types';
import { PlayerProps } from 'players/types';

export const create = createAction('SATURDAY/CREATE')<any>();
export const update = createAction('SATURDAY/UPDATE')<SaturdayProps[]>();
export const select = createAction('SATURDAY/SELECT')<string | number[]>()
export const updatePlayers = createAction('SATURDAY/UPDATE_PLAYERS')<{saturday_id: string | number[], players: PlayerProps[]}>();
