import { createAction } from 'typesafe-actions';
import {Player} from 'players/types';

export const add = createAction('PLAYERS/LIST/ADD')<Player>();
