import { css } from '@emotion/react';
import { formatDate } from '../../../lib/dates';

const styles = {
  date: css`
    margin-top: var(--spacing);
    margin-bottom: calc(var(--spacing) * 2);
    font-size: calc(var(--font-size-scale) * 16px);
    font-weight: var(--font-weight-body);
    letter-spacing: normal;
    color: var(--colors-accent);
  `,
};

function Date({ date, children }) {
  return (
    <time css={styles.date} dateTime={date}>
      {formatDate(date || children)}
    </time>
  );
}

export default Date;
