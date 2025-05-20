import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, FolderIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt'; 
import { motion } from 'framer-motion';


const navItems = [
  { id: 'home', icon: <Image src="/home.png" alt="LinkedIn" width={18} height={18} className=""/>, label: 'Home' },
  { id: 'about', icon: <Image src="/user.png" alt="LinkedIn" width={18} height={18} className=""/>, label: 'About' },
  { id: 'experience', icon: <Image src="/baggage.png" alt="LinkedIn" width={18} height={18} className=""/>, label: 'Experience' },
  { id: 'projects', icon: <FolderIcon className="w-5 h-5" />, label: 'Projects' },
  { id: 'contact', icon: <EnvelopeIcon className="w-5 h-5" />, label: 'Contact' },
];

export default function CircleNavBar() {
  // Enable smooth scroll behavior
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Tilt
        className="tilt-container overflow-hidden rounded-full"
        perspective={1000} // Adjust perspective
        glareEnable={true} // Add a glare effect
        glareMaxOpacity={0.05} // Glare opacity
        glarePosition="all"
        // scale={1.02} // Slight scale on hover
        tiltMaxAngleX={5} // Max tilt on X axis
        tiltMaxAngleY={8} // Max tilt on Y axis
        transitionSpeed={1000}
      >

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-neutral-700/50 bg-neutral-900/50  backdrop-blur-lg shadow-xl shadow-black/30"
        // className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700/60 bg-neutral-900/80 backdrop-blur-md shadow-lg"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            aria-label={item.label}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (el) {
                const rect = el.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700/40 bg-neutral-800/40 hover:bg-neutral-700/60 hover:-translate-y-1.5 transition-all duration-250 ease-out focus:outline-none focus:ring-1 focus:ring-[#737373] mx-1"
          >
            <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
          </button>
        ))}
      </motion.div>
      </Tilt>
    </nav>
  );
} 