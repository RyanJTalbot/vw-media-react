import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
// import {Link} from "react-router-dom";

export default function GalleryHero({ hero}) {
  return (
    <header className={hero}>
      <h1 className = "galleryHero">
        <div>
          VW-Media.com
        </div>

         {/* <Link to="https://www.instagram.com/virginielouisiana">
           <FaInstagramSquare className="insta"/>
        </Link> */}
           <a href="https://www.instagram.com/virginielouisiana">
            <FaInstagramSquare className="insta"/>
           </a>
      </h1>
    </header>
  )
}

GalleryHero.defaultProps = {
  Galleryhero: "defaultGalleryHero"
}
