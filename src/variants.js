
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
      y: 100,
      scale:0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,     
        delay: i * 0.3,    
      }
    }),
  };