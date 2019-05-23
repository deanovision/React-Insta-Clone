import React from "react";
import Moment from "moment";
const time = timestamp => {
  Moment.defaultFormat = "MMM DD";
  Moment(timestamp, Moment.defaultFormat).toDate();
};
const Timestamp = props => {
  return <span className="timestamp">{time(props.timestamp)}</span>;
};
export default Timestamp;
