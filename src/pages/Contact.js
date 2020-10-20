import React from 'react';
import Form from '../components/Form';
import GalleryHero from '../components/GalleryHero';
import Footer from '../components/Footer';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <GalleryHero />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default Contact;