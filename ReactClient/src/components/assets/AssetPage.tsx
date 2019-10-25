import React, { Component } from "react";
import { connect } from "react-redux";
import AssetList from "./AssetList";
import { State } from "../../redux/actions/initialState";
import { assetActionCreators } from "../../redux/actions/assetActions";
import { Asset } from "../../redux/types/asset";

type AssetPageProps = State & typeof assetActionCreators;

class AssetPage extends Component<AssetPageProps> {
  public componentDidMount() {
    this.ensureDataFetched();
  }

  // public componentDidUpdate() {
  //   this.ensureDataFetched();
  // }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Asset List</h1>
        </div>
        <AssetList assets={this.props.assets} />
      </div>
    );
  }

  private ensureDataFetched() {
    this.props.LoadAssets();
  }
}

export default connect(
  (state: State) => state,
  assetActionCreators
)(AssetPage as any);
