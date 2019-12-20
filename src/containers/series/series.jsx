import React, { Component } from "react";
import Serieslist from "../../components/seriesList/seriesList";
import Loader from "../../components/loader/loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter series into the input </p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No Tv series have been found with this name</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <Serieslist list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
