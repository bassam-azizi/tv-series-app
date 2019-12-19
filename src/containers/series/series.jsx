import React, { Component } from "react";

class Series extends Component {
  state = {
    series: []
  };
  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=Vikings")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }
  render() {
    return <div>the length of series is: {this.state.series.length}</div>;
  }
}

export default Series;
