'use client';

import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import { useState } from 'react';
import { TextAnimate } from "@/registry/magicui/text-animate";

const SectionTitle = ({ title, subtitle, sectionId }) => {
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/#${sectionId}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mb-16">
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-primary uppercase tracking-wider font-medium"
        >
          <TextAnimate animation="blurInUp" by="character" once as="span">
            {subtitle}
          </TextAnimate>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-2 relative inline-flex items-center justify-center w-full group"
      >
        <div 
          className="relative inline-flex items-center"
          onMouseEnter={() => setShowCopy(true)}
          onMouseLeave={() => setShowCopy(false)}
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showCopy ? 1 : 0 }}
            onClick={handleCopy}
            className="absolute -left-12 p-2 text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <FaLink className="w-4 h-4" />
          </motion.button>
          <h2 className="text-3xl font-bold text-gray-900">
            <TextAnimate animation="blurInUp" by="character" once as="span">
              {title}
            </TextAnimate>
          </h2>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded"
            >
              URL Copied!
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionTitle; 