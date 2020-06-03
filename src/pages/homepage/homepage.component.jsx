import React from "react";
import "./homepage.style.scss";

import { connect } from "react-redux";

//?COMPONENTS

const HomePage = ({ sidebar, popularMovies }) => {
  return (
    <>
      <div className={`homepage ${sidebar ? "homepage-margin-push" : ""}`}>
        <div className="container">
          {popularMovies.map(({ id, poster_path, backdrop_path, title }) => (
            <div key={id} className="card">
              <img
                src={poster_path}
                style={{ width: "200px", height: "200px" }}
                alt="img"
              />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ toggleReducer, popularMoviesReducer }) => ({
  sidebar: toggleReducer.toggle,
  popularMovies: popularMoviesReducer.popularMovies,
});

export default connect(mapStateToProps)(HomePage);
