import React from 'react';
import './App.css';
import updateMovies from './store/actions/updateMovies';
import { connect } from "react-redux";


function App(props) {
  return (
    <div className="App">
      <h3>REDUX MOVIELIST APP</h3>
      <p></p>
      <p></p>
      <p><span style={{color: 'green'}}>Your current movie is: </span>{props.movies.name}</p>
      <button onClick={props.updateMovies}>Select Next Movie</button>
    </div>
  );
};

const MapstateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => {
      console.log("Update movie called");
      dispatch(updateMovies)
    }
  }
}

export default connect(MapstateToProps, mapDispatchToProps)(App);
