"use client";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../_scss/carousel.scss";

interface Props {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: Props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel( options, [Autoplay()])

  return (
    <section className="theme-light embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number card">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel