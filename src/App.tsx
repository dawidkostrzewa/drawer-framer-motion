import { AnimatePresence, motion, PanInfo, Variants } from 'framer-motion';
import { useState } from 'react'
import { DrawerHeader } from './DrawerHeader';
import "./App.css"
import Card from './Card';

function App() {

  const [open, setOpen] = useState(false);

  const variants: Variants = {
    inactive: { y: 0 },
    active: { y: '-80%' },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleDragEnd = (_: unknown, info: PanInfo): void => {
    if (info.offset.y < 0 && info.offset.y < -80) {
      setOpen(true);
    }

    if (info.offset.y > 0 && info.offset.y > 80) {
      setOpen(false);
    }
  };

  const handleCloseDrawer = (): void => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="drawerOverlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleCloseDrawer}
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>
      <motion.div
        className={'drawer'}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        dragConstraints={{ top: 0, bottom: 0 }}
        drag="y"
      >
        <motion.div
          className={'drawerInner'}
          transition={{ type: 'spring', duration: 0.8 }}
          variants={variants}
          initial="inactive"
          animate={open ? 'active' : 'inactive'}
        >
          <DrawerHeader />
          <div className='drawer-content'>
            <Card
              title="Placeholder card"
              text="This is a sample card text. You can replace it with any text."
              imgSrc="https://via.placeholder.com/300x200"
            />
            <Card
              title="Placeholder card"
              text="This is a sample card text. You can replace it with any text."
              imgSrc="https://via.placeholder.com/300x200"
            />
            <Card
              title="Placeholder card"
              text="This is a sample card text. You can replace it with any text."
              imgSrc="https://via.placeholder.com/300x200"
            />
          </div>
        </motion.div>
      </motion.div>

    </>
  );
}

export default App
