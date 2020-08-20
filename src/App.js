import React from 'react';
import './App.css';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';
import { connect } from "react-redux";


function App(props) {
  return (
    <div className="App">
      <h3>REDUX MOVIELIST APP</h3>
      <p></p>
      <p></p>
      <p><span style={{color: 'green'}}>Your current movie is: </span>{props.movies.name}</p>
      <button onClick={props.updateMovies}>Select Next Movie</button>
      <br />
      <button onClick={props.fetchUsers}>Get Users</button>
      
      {props.users.length === 0 ? 
      <p>There are no users</p>
      : props.users.map((user) => <p key={user.id}>{user.first_name} - {user.email}</p>)
      }
    </div>
  );
};

const MapstateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => {
      console.log("Update movie called");
      dispatch(updateMovies)
    },

    fetchUsers: () => {
      console.log("Fetch users called");
      dispatch(fetchUsers)
    }
  }
}

export default connect(MapstateToProps, mapDispatchToProps)(App);
