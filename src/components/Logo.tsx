import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------


export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to="/">
      <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />
    </RouterLink>
  );
}
