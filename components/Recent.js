import { css } from '@emotion/react';
import { NavLink } from './Nav';
import * as navStyles from './Nav/styles';

const styles = {
  container: css`
    margin-bottom: var(--spacing);
  `,
  title: css`
    margin: var(--spacing) 0;
    font-size: calc(var(--font-size-scale) * 28px);
  `,
  summary: css`
    margin-top: var(--spacing);
    color: var(--colors-text-secondary);
  `,
  note: css`
    font-size: calc(var(--font-size-scale) * 14px);
    color: var(--colors-text-secondary);
  `,
};

function Recent({ projects }) {
  return (
    <section css={styles.container}>
      {projects.map(({ id, live, title, summary }) => (
        <article key={id}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            css={navStyles.link}
            href={live}
          >
            <h2 css={styles.title}>{title}</h2>
            <p css={styles.summary}>{summary}</p>
          </a>
        </article>
      ))}
      <NavLink css={styles.note} href="/projects">
        See all projects{' '}
        <span role="img" aria-label="arrow pointing right">
          &rarr;
        </span>
      </NavLink>
    </section>
  );
}

export default Recent;
