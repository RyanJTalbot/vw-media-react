import React from 'react';
// import Hero from '../components/Hero';
import GalleryHero from '../components/GalleryHero';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/Photos';
import Footer from '../components/Footer';

class Photography extends React.Component {
  constructor() {
    super();

    this.state = {
      nothing: ""
    }
  };

  render() {
    const BasicRows = () => <Gallery photos={photos} />;
    return (
      <>
        <GalleryHero Galleryhero="roomsGalleryHero"/>

        <BasicRows />
        <Footer />
      </>
    );
  }
}

export default Photography;
