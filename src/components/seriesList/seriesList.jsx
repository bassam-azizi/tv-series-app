import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const SerieslistItems = ({ series }) => (
  <li>
    <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>
  </li>
);

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
