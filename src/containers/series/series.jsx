import React, { Component } from "react";
import Serieslist from "../../components/seriesList/seriesList";

class Series extends Component {
  state = {
    series: []
  };

  onSeriesInputChange = e => {
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  };
  render() {
    return (
      <div>
        the length of series is: {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        <Serieslist list={this.state.series} />
      </div>
    );
  }
}

export default Series;
