import { motion } from 'framer-motion';
// material
import { Box, BoxProps } from '@mui/material';
//
import { varWrapEnter } from './variants';

// ----------------------------------------------------------------------


type Props = {
  open: boolean,
  children: React.ReactNode,
}

export default function MotionContainer({ open, children, ...other }: Props & BoxProps) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
