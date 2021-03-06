import { createReducer, on, Action } from '@ngrx/store';
import { getCustomers, loadCustomers } from './customer.action';
import { Customer } from '../models';

export const initialState: Customer[] = [];

const _customersReducer = createReducer(
    initialState,
    on(getCustomers, state => state),
    on(loadCustomers, (state, { payload }) => [...payload])
);

export function customersReducer(state: Customer[] | undefined, action: Action): Customer[] {
    return _customersReducer(state, action);
}
