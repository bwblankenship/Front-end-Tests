import * as actionTypes from "../types/actions";
import { Asset } from "../types/asset";
import * as assetApi from "../../api/assetApi";
import { ThunkDispatch } from "redux-thunk";

interface LoadAssetAction {
  type: typeof actionTypes.LOAD_ASSETS_SUCCESS;
  assets: Asset[];
}

export type AssetActionTypes = LoadAssetAction;

export const LoadAssets = () => {
  return function(dispatch: ThunkDispatch<{}, {}, any>) {
    return assetApi.getAssets().then(assets => {
      dispatch({ type: actionTypes.LOAD_ASSETS_SUCCESS, assets });
    });
  };
};

export const assetActionCreators = {
  LoadAssets
};
