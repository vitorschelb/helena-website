import React, { useEffect, useRef } from 'react'

import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: JSX.Element
  width?: 'fit' | 'full'
  duration?: number
  delay?: number
  axisX?: number
  axisY?: number
  visibleX?: number
  visibleY?: number
}

export const Reveal = ({
  children,
  width = 'fit',
  duration = 0.5,
  delay = 0.25,
  axisX = 0,
  axisY = 75,
  visibleX = 0,
  visibleY = 1,
}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: axisX, y: axisY },
          visible: { opacity: 1, y: visibleY, x: visibleX },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
