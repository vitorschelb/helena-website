export const animateAxisXLeftSlow = {
  initial: {
    opacity: 1,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.8,
    },
  },
}

export const animateAxisXLeftFast = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export const animateAxisXRightSlow = {
  initial: {
    opacity: 1,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.8,
    },
  },
}

export const animateAxisXRightFast = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export const animateAxisYSlow = {
  initial: {
    opacity: 0,
    y: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
}

export const animateAxisYFast = {
  initial: {
    opacity: 0,
    y: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
}
