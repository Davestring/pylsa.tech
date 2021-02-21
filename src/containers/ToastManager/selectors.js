import { createSelector } from 'reselect';
import { initialState } from './slice';

const selecttoastManagerDomain = (state) => state.toasts || initialState;

const makeSelecttoastManager = () =>
  createSelector(selecttoastManagerDomain, (substate) => substate);

export default makeSelecttoastManager;

export { selecttoastManagerDomain };
