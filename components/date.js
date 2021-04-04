import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(parseISO(dateString), 'LLLL d, yyyy')}
  </time>
);

export { Date as default };
