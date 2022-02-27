import SimpleBarReact, { Props } from 'simplebar-react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});



const SimpleBarStyle = styled(SimpleBarReact)<Props>(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

// ----------------------------------------------------------------------

type ScrollbarProps = {
  children: React.ReactNode,
  boxProps?: BoxProps,
  simpleBarProps?: Props
}

export default function Scrollbar({ children, boxProps = {}, simpleBarProps }: ScrollbarProps) {
  const { sx, ...other } = boxProps;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle
        timeout={500} clickOnTrack={false} sx={sx} {...simpleBarProps}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
