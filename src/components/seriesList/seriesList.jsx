import React from "react";
import "./styles.css";

const SerieslistItems = props => <li>{props.series.show.name}</li>;

const Serieslist = props => {
  return (
    <div>
      <ul className="serieslist">
        {props.list.map(series => (
          <SerieslistItems series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default Serieslist;
