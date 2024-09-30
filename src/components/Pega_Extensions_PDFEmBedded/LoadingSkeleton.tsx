import React from 'react';
import StyledPegaExtensionsPdfEmBeddedWrapper from './styles';

interface LoadingSkeletonProps {
  isLoading: boolean;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ isLoading }) => {
  return (
    <StyledPegaExtensionsPdfEmBeddedWrapper>
      <div className={`timeline-wrapper ${isLoading ? 'loading' : 'hide'}`}>
        <div className='timeline-item'>
          <div className='animated-background'>
            <div className='background-masker header-top' />
            <div className='background-masker header-left' />
            <div className='background-masker header-right' />
            <div className='background-masker header-bottom' />
            <div className='background-masker subheader-left' />
            <div className='background-masker subheader-right' />
            <div className='background-masker subheader-bottom' />
            <div className='background-masker content-top' />
            <div className='background-masker content-first-end' />
            <div className='background-masker content-second-line' />
            <div className='background-masker content-second-end' />
            <div className='background-masker content-third-line' />
            <div className='background-masker content-third-end' />
          </div>
        </div>
      </div>
    </StyledPegaExtensionsPdfEmBeddedWrapper>
  );
};

export default LoadingSkeleton;
