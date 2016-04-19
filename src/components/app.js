import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';
import ReduxPromise from 'redux-promise';

export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBar></SearchBar>
            <WeatherList></WeatherList>
        </div>
    );
  }
}
 
