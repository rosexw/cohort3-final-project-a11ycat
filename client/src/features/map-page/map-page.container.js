import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMapContainer } from '../google-map/google-map.container';

export class MapPageContainer extends Component {
    render() {
      return (
        <div>
            <Link to="/">Home</Link>
            <GoogleMapContainer />
        </div>
      );
    }
  }