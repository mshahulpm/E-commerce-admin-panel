// @mui
import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';
//

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  title: string;
  img?: string;
  description?: string;
}

export default function EmptyContent({ title, description, img, ...other }: Props) {
  return (
    <RootStyle {...other}>
      <img
        alt="empty content"
        src={img || '/assets/illustrations/illustration_empty_content.svg'}
        style={{ height: 240, marginBottom: 3 }}
      />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}
