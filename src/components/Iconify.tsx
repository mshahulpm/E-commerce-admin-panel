// icons
import { Icon } from '@iconify/react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  icon: JSX.Element | string,

};

export default function Iconify({ icon, sx, ...other }: Props & BoxProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
