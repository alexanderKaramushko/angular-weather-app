import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AppState } from 'src/app/core/store/core.store';

export function persistReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return reducer({ ...state, ...LocalStorageService.loadInitialState() }, action);
    }

    return reducer(state, action);
  };
}
