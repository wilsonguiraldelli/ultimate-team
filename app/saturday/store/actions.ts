import { createAction } from 'typesafe-actions';
import { SaturdayProps } from 'saturday/types';

export const create = createAction('SATURDAY/CREATE')<any>();
export const update = createAction('SATURDAY/UPDATE')<SaturdayProps[]>();
export const select = createAction('SATURDAY/SELECT')<SaturdayProps>()
