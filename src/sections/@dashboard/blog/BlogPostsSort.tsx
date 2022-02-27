// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

type props = {
  options: {
    label: string,
    value: any
  }[],
  onSort: (value?: any) => any
};

export default function BlogPostsSort({ options, onSort }: props) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
