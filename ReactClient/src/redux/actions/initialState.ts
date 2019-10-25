import { Asset } from "../types/asset";

export interface State {
  assets: Asset[];
}

class InitialState implements State {
  assets: Asset[] = [];
}

export default function(): State {
  return new InitialState();
}
