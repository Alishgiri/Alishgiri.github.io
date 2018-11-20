import React from "react";
import { connect } from 'react-redux';

import "./List-item.css";

const list = props => (
  <div key={props.key} style={props.style} className="list">
    <div className="box">
      <h3>
        {props.lists[props.index].firstName} {props.lists[props.index].lastName}
      </h3>
      <p>{props.lists[props.index].gender}</p>
      <p>{props.lists[props.index].email}</p>
    </div>
  </div>
);

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(list);
