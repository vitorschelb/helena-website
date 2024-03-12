import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import carouselOne from '@/public/carousel/carouselOne.jpg'
import carouselTwo from '@/public/carousel/carouselTwo.jpg'
import carouselThree from '@/public/carousel/carouselThree.jpg'
import carouselFour from '@/public/carousel/carouselFour.jpg'
import carouselFive from '@/public/carousel/carouselFive.jpg'
import carouselSix from '@/public/carousel/carouselSix.jpg'

const carouselImages = [
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive,
  carouselSix,
]

export function CarouselSolutions() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={image.src}>
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-6">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
