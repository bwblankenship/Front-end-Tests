import React, { Component } from "react";
import { Asset } from "../../redux/types/asset";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { State } from "../../redux/actions/initialState";

type AssetListProps = State;

class AssetList extends Component<AssetListProps> {
  public render() {
    console.log(this.props.assets);
    if (this.props.assets && this.props.assets.length > 0) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.assets.map(asset => {
              return (
                <tr key={asset.Id}>
                  <th scope="row">
                    <Link
                      to={"/editor/" + asset.Id}
                      role="Button"
                      className="btn btn-success px-3"
                    >
                      <i className="oi oi-pencil"></i>
                    </Link>

                    <button className="btn btn-danger px-3">
                      <i className="oi oi-trash"></i>
                    </button>
                  </th>
                  <td>{asset.Id}</td>
                  <td>{asset.Name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <p>There are no assets in the db...</p>;
    }
  }
}

export default AssetList;
