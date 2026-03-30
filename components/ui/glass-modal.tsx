'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlassModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function GlassModal({ open, onClose, children }: GlassModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.97, filter: 'blur(8px)' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            className="fixed inset-4 md:inset-12 lg:inset-20 z-50 overflow-hidden rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(48px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(48px) saturate(1.4)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 24px 80px -12px rgba(0,0,0,0.15)',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-[var(--outline)] hover:text-[var(--on-surface)] hover:bg-white/40 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Scrollable content */}
            <div className="h-full overflow-y-auto p-8 md:p-12 no-scrollbar">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
