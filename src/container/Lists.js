import { connect } from "react-redux";
import React, { Component } from "react";

import "./Lists.css";
import { List } from "react-virtualized";
import * as actions from "../store/actions";
import ListItem from "../components/List-item";
import Spinner from "../components/UI/Spinner/Spinner";

class Lists extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  renderRow({ index, key, style }) {
    return <ListItem key={key} style={style} index={index} />;
  }

  displayListsOrSpinner = () => {
    let lists = <Spinner />;
    if (this.props.lists) {
      // lists = this.props.lists.map(item => {
      return (
        <List
          className="m-auto"
          width={800}
          height={500}
          rowHeight={150}
          rowWidth={800}
          rowRenderer={this.renderRow}
          rowCount={this.props.lists.length}
        />
      );
      // });
    }
    return lists;
  };

  render() {
    return (
      <div>
        <header>
          <h1>List Displaying Huge Data.</h1>
        </header>
        <div className="huge-list">{this.displayListsOrSpinner()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(actions.fetchList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
