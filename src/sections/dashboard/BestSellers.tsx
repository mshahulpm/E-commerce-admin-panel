
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { mockImgCover } from 'src/utils/mockImages';
//
import Scrollbar from 'src/components/Scrollbar';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: 'Title ' + setIndex,
    description: `$ ${index}00.00`,
    image: mockImgCover(setIndex),
    postedAt: new Date(Date.now() - (setIndex * 8640000)),
  }
});

// ----------------------------------------------------------------------

type NewsItemProps = {
  news: {
    title: string;
    description: string;
    image: string;
    postedAt: Date;
  }
};

function NewsItem({ news }: NewsItemProps) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ height: 48, width: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 100 }} >
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'right', }}>
        30 items sold
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Best Sellers" />
      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {NEWS.map((news) => (
          <NewsItem key={news.title} news={news} />
        ))}
      </Stack>

      <Divider />
    </Card>
  );
}
