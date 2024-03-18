'use client'

import Image from 'next/image'
import HeroOne from '@/public/HeroOne.png'
import HeroTwo from '@/public/HeroTwo.jpg'
import FotoHelena from '@/public/FotoHelena.jpeg'
import { motion } from 'framer-motion'
import {
  animateAxisXLeftFast,
  animateAxisXLeftSlow,
  animateAxisXRightFast,
  animateAxisXRightSlow,
  animateAxisYSlow,
} from '../utils/animations'
import { CarouselSolutions } from '@/components/SolutionsCarousel'
import BlogCard from '@/components/BlogCard'

export default function HeroSection() {
  return (
    <>
      <section className="h-2/4 bg-whiteIce">
        <div className="relative h-full w-full">
          <div className="hidden lg:flex">
            <motion.div
              variants={animateAxisXLeftFast}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-1 left-0 flex h-1/2 w-1/5 bg-lightSand shadow-md"
            />

            <motion.div
              variants={animateAxisXLeftSlow}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="border-b-1 border-r-1 border-t-1 absolute bottom-10 left-0 flex border-darkSand shadow-md"
            >
              <Image
                src={HeroOne}
                alt="Mulher de oculos lendo documentos antigos"
                width={400}
                sizes="100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="hidden lg:flex">
            <motion.div
              variants={animateAxisXRightFast}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-10  right-0 flex h-1/2 w-1/5 bg-lightSand shadow-md"
            />
            <motion.div
              variants={animateAxisXRightSlow}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="border-b-1 border-l-1 border-t-1 absolute bottom-24 right-0 flex border-darkSand shadow-md"
            >
              <Image
                src={HeroTwo}
                alt="Logo Helena Amaral"
                width={400}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            variants={animateAxisYSlow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="absolute inset-0 flex flex-col  items-center justify-center space-y-6"
          >
            <h2 className="font-dosis text-xs uppercase text-darkSand md:text-sm lg:text-base">
              Conectando o Presente ao Passado
            </h2>
            <h1 className="font-italianno text-4xl text-lightBlack md:text-6xl lg:text-8xl">
              Helena Amaral Sant Ana
            </h1>
            <button className="lg:text-basis border border-transparent bg-darkSand p-3 font-dosis text-sm uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
              Consultoria Histórica
            </button>
          </motion.div>
        </div>
      </section>

      <section className="relative flex bg-darkSand lg:h-1/2">
        <motion.div
          variants={animateAxisYSlow}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex h-full w-full items-center justify-center space-y-6 lg:w-1/2 lg:border-r-2 lg:border-whiteIce"
        >
          <div className="m-2 flex flex-col items-center justify-center space-y-6 border border-lightSand p-6 shadow-md lg:w-3/4 lg:space-y-8">
            <h1 className="font-prata text-xl uppercase text-whiteIce md:text-2xl">
              Soluções
            </h1>
            <h2 className="text-justify font-dosis text-whiteIce md:text-lg">
              Oferecemos soluções completas de consultoria histórica, abrangendo
              o levantamento e análise de documentos e artefatos, inventários,
              assessoria para a realização do ICMS Patrimônio Cultural, apoio em
              processos de tombamento e restauração, bem como a oferta de
              palestras, workshops e materiais educativos para atender às suas
              necessidades.
            </h2>
            <button className="w-28 border  border-whiteIce bg-darkSand p-3 font-dosis text-sm uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg md:text-base">
              Detalhes
            </button>
          </div>
        </motion.div>
        <div className="hidden h-full w-1/2 flex-col items-center justify-center lg:flex">
          <CarouselSolutions />
        </div>
      </section>
      <section className="hidden h-2/4 items-center bg-whiteSnow lg:flex">
        <BlogCard />
      </section>
      <section className="relative items-center justify-center space-y-4 bg-whiteIce py-4 lg:flex lg:h-1/2  lg:space-y-0 lg:py-0">
        <span className="absolute z-0 hidden bg-lightSand shadow-md lg:bottom-5 lg:left-96 lg:flex lg:h-4/5 lg:w-[300px]" />
        <div className="z-10 m-auto flex h-[250px] w-[250px] justify-center rounded-sm border-b-4 border-r-4 border-darkSand shadow-md lg:m-0 lg:h-4/5 lg:w-[350px] lg:border-0">
          <Image
            src={FotoHelena}
            alt="Mulher de oculos lendo documentos antigos"
            width={350}
            sizes="100vw"
            className="object-cover shadow-md"
            priority
          />
        </div>
        <div className="flex w-full flex-col items-center space-y-4 px-10 text-justify lg:w-1/3 lg:items-start lg:space-y-6 lg:text-start">
          <h2 className="font-dosis text-sm uppercase tracking-wider text-darkSand">
            Conheça mais
          </h2>
          <h1 className="font-prata text-xl text-darkBlack lg:text-2xl">
            Sobre Helena...
          </h1>
          <p className="font-dosis text-lightBlack">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia, amet earum minus assumenda tenetur, eveniet eaque quos
            exercitationem quia sunt! Facere itaque omnis aperiam eligendi
            accusamus adipisci, sunt labore? Facere itaque omnis aperiam
            eligendi accusamus adipisci, sunt labore?
          </p>
          <button className="w-28 border border-transparent bg-darkSand p-3 font-dosis uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
            Saiba Mais
          </button>
        </div>
      </section>
      <section className=" hidden h-1/2 items-center justify-center bg-darkSand md:flex"></section>
    </>
  )
}
