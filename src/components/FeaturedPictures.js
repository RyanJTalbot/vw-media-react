import React, { Component } from 'react';
import { PictureContext } from '../context';
import Loading from './Loading';
import Pictures from './Pictures';

export default class FeaturedPictures extends Component {
  // static contextType = PictureContext

  render() {
    const {featuredPictures : pictures} = this.context
    console.log(pictures);
    return (
      <div>
        featured Pictures
        <Pictures />
        <Loading />
      </div>
    )
  }
}