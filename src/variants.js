
export const detailedPageVariants = {
    hidden:{
        opacity:0,
        scale:0.3,
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            type:"tween",
            ease:"easeInOut",
            duration:0.8
        }
    },
}
export const countryCardVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.8,
        // Staggering the appearance of children
        staggerChildren: 0.3, // Adjust this value for different staggering speeds
        delayChildren: 0.2,   // Optional: Add delay before stagger starts
      },
    },
  };

  export const childVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Duration for each card's animation
      }
    },
  };