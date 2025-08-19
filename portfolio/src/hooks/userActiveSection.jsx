// hooks/useActiveSection.js
import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the section that is currently in view
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;