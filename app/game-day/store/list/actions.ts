import { createAction } from 'typesafe-actions';

export const get = createAction('PLAYERS/LIST/GET')<Number>();
