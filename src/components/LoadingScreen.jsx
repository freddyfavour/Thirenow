import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const logoAnim = gsap.to(logoRef.current, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: 'power1.inOut',
    });
    
    // Animate progress bar over 5 seconds
    const progressAnim = gsap.to(progressRef.current, {
      width: '100%',
      duration: 5,
      ease: 'power2.inOut',
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        setPercentage(progress);
      },
      onComplete: () => {
        // Kill the logo animation before fading out
        logoAnim.kill();
        
        // Fade out the loading screen smoothly
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            // Call onComplete immediately after fade finishes
            onComplete();
          },
        });
      },
    });

    // Cleanup function
    return () => {
      logoAnim.kill();
      progressAnim.kill();
    };
  }, [onComplete]);

  return (
    <div className="loading-screen" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#3E2455',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.6s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 32 }}>
        <img
          ref={logoRef}
          src="/logo.png"
          alt="Thirenow Logo"
          style={{ width: 60, height: 60 }}
        />
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>ThireNow</h1>
      </div>
      <div style={{ width: 220, height: 8, background: '#fff2', borderRadius: 4, marginBottom: 16 }}>
        <div
          ref={progressRef}
          style={{ width: '0%', height: '100%', background: '#fff', borderRadius: 4 }}
        />
      </div>
      <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: '600' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default LoadingScreen;
