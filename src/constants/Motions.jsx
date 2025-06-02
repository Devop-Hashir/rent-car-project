import { delay, easeOut, stagger } from "framer-motion";
import { Exo } from "next/font/google";

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: easeOut,
    },
  },
});

export const staggerContainer = (staggerChild, delayChild) => ({
  hidden: {},
  show: {
    transition: {
      staggerChild,
      delayChild,
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: { 
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120 
    },
  show: {
    x:0,
    rotate:0,
    transition:{
        type:'spring',
        delay: 0.5,
        duration: 1.8
    }
  }
});

export const textContainer = ()=>({
    hidden:{
        opacity:0
    },
    show:(i=1)=>({
        opacity:1,
        transition:{
            staggerChild: 0.1,
            delayChild: i*0.1
        }
    })
})

export const textVariant =() =>({
    hidden:{
        opacity:0,
        y:20
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'tween',
            ease: 'easIn'
        }
    }
}) 