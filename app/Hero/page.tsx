'use client'

import Image from 'next/image'
import HeroOne from '@/public/HeroOne.png'
import HeroTwo from '@/public/HeroTwo.jpg'
import Solutions from '@/public/Solutions.jpg'
import { motion } from 'framer-motion'
import {
  animateAxisXLeftFast,
  animateAxisXLeftSlow,
  animateAxisXRightFast,
  animateAxisXRightSlow,
  animateAxisYSlow,
} from '../utils/animations'

export default function HeroSection() {
  return (
    <>
      <section className="h-2/4 bg-whiteIce">
        <div className="relative h-full w-full">
          <div className="hidden sm:hidden md:hidden lg:flex">
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
              className="absolute bottom-10 left-0 flex border-b-1 border-r-1 border-t-1 border-darkSand shadow-md"
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

          <div className="hidden sm:hidden md:hidden lg:flex">
            <motion.div
              variants={animateAxisXRightFast}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-10 right-0 flex h-1/2 w-1/5 bg-lightSand shadow-md"
            />
            <motion.div
              variants={animateAxisXRightSlow}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-24 right-0 flex border-b-1 border-l-1 border-t-1 border-darkSand shadow-md"
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
            <h1 className="font-italianno text-4xl text-darkBlack md:text-6xl lg:text-8xl">
              Helena Amaral Sant Ana
            </h1>
            <button className="bg-darkSand p-3 font-dosis uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border-1 hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
              Consultoria Histórica
            </button>
          </motion.div>
        </div>
      </section>

      <section className="flex h-1/2 bg-darkSand">
        <motion.div
          variants={animateAxisYSlow}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex h-full w-1/2 flex-col items-center justify-center space-y-6  "
        >
          <div className="m-2 flex w-3/4 flex-col items-center justify-center  space-y-8 border-1 border-lightSand p-6 shadow-md">
            <h1 className="font-prata text-2xl uppercase text-whiteIce md:text-3xl lg:text-4xl">
              Soluções
            </h1>
            <h2 className="text-justify font-dosis text-xl text-whiteIce">
              Oferecemos soluções completas de consultoria histórica, abrangendo
              o levantamento e análise de documentos e artefatos, inventários,
              assessoria para a realização do ICMS Patrimônio Cultural, apoio em
              processos de tombamento e restauração, bem como a oferta de
              palestras, workshops e materiais educativos para atender às suas
              necessidades.
            </h2>
            <button className="border-1 border-whiteIce bg-darkSand p-3 font-dosis uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border-1 hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
              Detalhes
            </button>
          </div>
        </motion.div>
        <div className="relative w-1/2 items-center justify-center">
          <Image
            src={Solutions}
            alt="Logo Helena Amaral"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </>
  )
}
