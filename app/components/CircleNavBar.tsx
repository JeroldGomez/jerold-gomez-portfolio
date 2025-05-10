import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, FolderIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const navItems = [
  { id: 'about', icon: <UserIcon className="w-6 h-6" />, label: 'About' },
  { id: 'experience', icon: <BriefcaseIcon className="w-6 h-6" />, label: 'Experience' },
  { id: 'projects', icon: <FolderIcon className="w-6 h-6" />, label: 'Projects' },
  { id: 'contact', icon: <EnvelopeIcon className="w-6 h-6" />, label: 'Contact' },
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
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700/60 bg-neutral-900/80 backdrop-blur-md shadow-lg">
        {navItems.map((item, idx) => (
          <button
            key={item.id}
            aria-label={item.label}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700/40 bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-blue)] mx-1"
          >
            <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
} 