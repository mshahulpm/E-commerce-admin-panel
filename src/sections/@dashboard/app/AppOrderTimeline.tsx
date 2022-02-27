// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: '1983, orders, $4220',
    time: new Date(Date.now() - (1 * 8640000)),
    type: 'order1'
  },
  {
    title: '12 Invoices have been paid',
    time: new Date(Date.now() - (2 * 8640000)),
    type: 'order2'
  },
  {
    title: 'Order #37745 from September',
    time: new Date(Date.now() - (3 * 8640000)),
    type: 'order3'
  },
  {
    title: 'New order placed #XF-2356',
    time: new Date(Date.now() - (4 * 8640000)),
    type: 'order4'
  },
  {
    title: 'New order placed #XF-2346',
    time: new Date(Date.now() - (5 * 8640000)),
    type: 'order5'
  }
];

type TimelineItem = {
  title: string;
  time: Date;
  type: string;
}
// ----------------------------------------------------------------------

type OrderItem = {
  item: TimelineItem;
  isLast: boolean;
};

function OrderItem({ item, isLast }: OrderItem) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Order Timeline" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
