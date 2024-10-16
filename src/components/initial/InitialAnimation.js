import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './InitialAnimation.css'; // Import the CSS file

class InitialAnimation extends Component {
  render() {
    const animationVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeInOut" }
      },
      exit: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.8, ease: "easeInOut" }
      }
    };

    return (
      <motion.div
        className="initial-animation"
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={this.props.onAnimationEnd}
      >
        <h1 className="welcome-text">Welcome to My Portfolio</h1>
      </motion.div>
    );
  }
}

export default InitialAnimation;
