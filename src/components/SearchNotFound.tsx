// material
import { Paper, Typography, PaperProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  searchQuery: string
};

export default function SearchNotFound({ searchQuery = '', ...other }: Props & PaperProps) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
}
