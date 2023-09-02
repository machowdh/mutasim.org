import { MDX } from '../Markdown'; // Replace with the actual import path
import { MDXProvider } from '@mdx-js/react';
import PrevNext from './components/PrevNext';
import Date from './components/Date';
import Author from './components/Author';
import * as styles from './styles';

function Post({ title, date, html, prev, next }) {
  return (
    <article css={styles.article}>
      <h1 css={styles.title}>{title}</h1>
      <h2>
        <Date>{date}</Date>
      </h2>
      <MDXProvider>
        <MDX css={styles.prose} source={html} />
      </MDXProvider>
      <Author />
      <PrevNext prev={prev} next={next} />
    </article>
  );
}

export default Post;
