'use client'

import Image from 'next/image'
import HeroOne from '@/public/HeroOne.png'
import HeroTwo from '@/public/HeroTwo.jpg'
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
              className="absolute bottom-0 left-0 flex h-1/2 w-1/5 bg-lightSand shadow-md"
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
                width={300}
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
              className="absolute bottom-20 right-0 flex border-b-1 border-l-1 border-t-1 border-darkSand shadow-md"
            >
              <Image
                src={HeroTwo}
                alt="Logo Helena Amaral"
                width={300}
                className="flex object-cover"
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
            <h1 className="font-italianno text-4xl text-darkBlack md:text-6xl lg:text-7xl">
              Helena Amaral Sant Ana
            </h1>
            <button className="bg-darkSand p-3 font-dosis text-whiteIce shadow-md duration-500 ease-in-out hover:border-1 hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
              Consultoria Histórica
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}