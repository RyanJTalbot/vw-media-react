import React from 'react'

export default function GalleryHero({children, hero}) {
  return (
    <header className={hero}>
      <h1 className = "galleryHero">
        <div>
          VW-Media.com
        </div>
      </h1>
    </header>
  )
}

GalleryHero.defaultProps = {
  Galleryhero: "defaultGalleryHero"
}