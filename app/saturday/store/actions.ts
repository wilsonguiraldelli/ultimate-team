import { createAction } from 'typesafe-actions';
import { SaturdayProps } from 'saturday/types';
import { Player } from 'players/types';

export const create = createAction('SATURDAY/CREATE')<any>();
export const update = createAction('SATURDAY/UPDATE')<SaturdayProps[]>();
export const select = createAction('SATURDAY/SELECT')<string | number[]>()
export const addPlayer = createAction('SATURDAY/ADD_PLAYER')<{saturday_id: string | number[], players: Player[]}>();
