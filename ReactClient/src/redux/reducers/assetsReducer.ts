import { Asset } from "../types/asset";
import { Action, Reducer } from "redux";
import * as actionTypes from "../types/actions";
import { AssetActionTypes } from "../actions/assetActions";
import GetInitialState from "../actions/initialState";

export const reducer: Reducer<Asset[]> = (
  state: Asset[] | undefined,
  incomingAction: Action
): Asset[] => {
  if (state === undefined) {
    return GetInitialState().assets;
  }

  const action = incomingAction as AssetActionTypes;
  switch (action.type) {
    case actionTypes.LOAD_ASSETS_SUCCESS:
      return action.assets;
  }

  return state;
};
