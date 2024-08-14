import { MDX } from '../Markdown'; // Replace with the actual import path
import PrevNext from './components/PrevNext';
import Image from 'next/image';
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
      <MDX
        css={styles.prose}
        source={html}
        components={{
          Image: (props) => <Image alt="" {...props} />,
          // Add other components as needed
        }}
      />
      <Author />
      <PrevNext prev={prev} next={next} />
    </article>
  );
}

export default Post;
