import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
  title?: string;
}

const Page = forwardRef(({ children, title = '', ...other }: PageProps, ref) => (
  <Box ref={ref} {...other}>
    <title>{title}</title>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
