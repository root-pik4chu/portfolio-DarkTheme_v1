"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <div>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


{/* <svg width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1440" height="1024" fill="black"/>
</svg> */}


