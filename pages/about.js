import Head from 'next/head';
import { css, keyframes } from '@emotion/react';
import Link from '../components/Link';
import Subtitle from '../components/Subtitle';
import CopyIconButton from '../components/CopyIconButton';

const animation = keyframes`
    0% { background-position: 0% 30% }
    50% { background-position: 100% 70% }
    100% { background-position: 0% 30% }
`;

const styles = {
  blurb: css`
    position: relative;
    font-size: calc(var(--font-size-scale) * 70px);
    font-weight: 500;
    line-height: 1.1;
    z-index: 1;
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      width: 54%;
      height: 100%;
      content: '';
      background: linear-gradient(
        40deg,
        var(--colors-link-700),
        var(--colors-link-gradient),
        var(--colors-accent),
        var(--colors-link-700)
      );
      background-size: 400% 400%;
      border-radius: var(--shape-border-radius);
      opacity: 0.25;
      pointer-events: none;
      z-index: -1;
      animation: ${animation} 10s ease-in-out infinite;
    }
    @media (max-width: 500px) {
      font-size: calc(var(--font-size-scale) * 54px);
    }
  `,
  subtitle: css`
    color: var(--colors-accent);
  `,
  paragraph: css`
    font-size: calc(var(--font-size-scale) * 22px);
    line-height: 1.5;
  `,
};

function About() {
  return (
    <section>
      <Head>
        <title>About — Mutasim Chowdhury</title>
      </Head>
      <p css={styles.blurb}>I&apos;m Mutasim.</p>
      <p css={styles.paragraph}>
        Improving my software engineering skills and utilizing them to do the
        above, regardless of the technological stack! That said, I&apos;m keen
        to help integrate AI into modern software applications at scale.
      </p>

      <section>
        <Subtitle css={styles.subtitle}>Currently</Subtitle>
        <p css={styles.paragraph}>
          Having just graduated, I&apos;m definitely open to new opportunities!
          Feel free to <Link href="mailto:mutasimac@gmail.com">email</Link>
          <CopyIconButton text="mutasimac@gmail.com" /> me or check out my{' '}
          <Link href="/contact">socials</Link> or{' '}
          <Link href="https://mutasim.org/files/mutasim_chowdhury_resume.pdf">
            résumé
          </Link>
          .
        </p>

        <p css={styles.paragraph}>
          I&apos;n my free time when I&apos;m not working on projects that
          interest me--music, gaming, and mentoring individuals whether they are
          entering the tech industry or simply trying to move forward in life
          are some of the things you can find me involved in.
        </p>
        <p css={styles.paragraph}>
          As an example, some of that has been helping build and design
          solutions for online communities-- check out who my buddies and I at{' '}
          <Link href="https://q3p.com/">q3p LLC</Link> have worked with!
        </p>
      </section>

      <section>
        <Subtitle css={styles.subtitle}>Previously</Subtitle>
        <p css={styles.paragraph}>
          In May of 2024, I finished my Master&apos;s in CS at{' '}
          <Link href="https://omscs.gatech.edu/home">Georgia Tech</Link> where I
          worked on natural language programming, machine learning, autonomous
          robotics, knowledge-based artificial intelligence, and more with a 3.9
          GPA.
        </p>
        <p css={styles.paragraph}>
          I recently finished interning as a full stack software engineer at{' '}
          <Link href="https://gusto.com/">Gusto</Link> in San Francisco working
          on <Link href="https://embedded.gusto.com/">Gusto Embedded</Link>, the
          payroll partner API.
          <p css={styles.paragraph}>
            Before I entered Georgia Tech, I finished my B.S. in Computer
            Engineering at{' '}
            <Link href="https://www.utdallas.edu/">UTDallas</Link> in May 2020.
            During that time, I completed an internship at{' '}
            <Link href="https://argodata.com/">Argo Data</Link> working on the
            Teller Payments software.
          </p>
          {/* <p css={styles.paragraph}>
            After graduating into the pandemic, I started graduate school, have
            been taking care of family, and am now one step closer to being
            done!
          </p> */}
        </p>
      </section>
    </section>
  );
}

export default About;
