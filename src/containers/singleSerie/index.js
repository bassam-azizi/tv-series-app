import React, { Component } from "react";
import Loader from "../../components/loader/loader";

class SingleSerie extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log({ show });
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Type - {show.type}</p>
            <p>Genre - {show.genres}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episode - {show._embedded.episodes.length}</p>
            <p>
              <img alt="show" src={show.image.medium} />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSerie;
