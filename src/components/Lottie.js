import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

// Dynamically import `lottie-react` with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieAnimation({ animationDataFile }) {
  return (
    <Lottie animationData={animationDataFile} loop={true} />
  );
}

LottieAnimation.propTypes = {
  animationDataFile: PropTypes.object.isRequired,
};
