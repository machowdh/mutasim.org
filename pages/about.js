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
      <p css={styles.blurb}>
        I&apos;m Mutasim.
        <br />
        I&apos;m a software engineering student currently in Dallas.
      </p>
      <p css={styles.paragraph}>
        I&apos;m really interested in working on difficult technological
        problems that have the promise to change things for the better.
      </p>
      <p css={styles.paragraph}>
        I&apos;m excited about the prospect of interactive intelligence and
        it's integration in modern software applications at scale.
      </p>

      <section>
        <Subtitle css={styles.subtitle}>Currently</Subtitle>
        <p css={styles.paragraph}>
          I&apos;m currently a semester away from finishing up my Master's in CS at{' '}
          <Link href="https://omscs.gatech.edu/home">Georgia Tech</Link> where I've taken
          courses on machine learning, autonomous robotics, knowledge-based artificial intelligence,
          and more. 
          {/* collaborate with physicians, biologists, and engineers to build
          portals, tools, and{' '}
          <Link href="https://www.mskcc.org/msk-impact">tests</Link> in clinical
          bioinformatics. */}
        </p>
        <p css={styles.paragraph}>
          I spend a lot of time working on generative art and design. I&apos;m
          also into esports, peripherals, and music. Right now, I&apos;m trying
          to <Link href="/posts">write more</Link> and explore creative
          projects.
        </p>
        <p css={styles.paragraph}>
          I&apos;m open to new opportunities! Feel free to{' '}
          <Link href="mailto:mutasimac@gmail.com">email</Link>
          <CopyIconButton text="mutasimac@gmail.com" /> me or check out my{' '}
          <Link href="/contact">socials</Link> or{' '}
          <Link href="https://agarun.com/files/aaron-agarunov-resume.pdf">
            résumé
          </Link>
          .
        </p>
      </section>

      <section>
        <Subtitle css={styles.subtitle}>Previously</Subtitle>
        <p css={styles.paragraph}>
          I studied Chemistry at{' '}
          <Link href="https://macaulay.cuny.edu/">Macaulay @ CUNY Hunter</Link>{' '}
          until May 2017. After graduating, I went to{' '}
          <Link href="https://www.appacademy.io/">App Academy</Link> to learn
          development. I loved it and I&apos;ve been navigating the industry
          ever since. I guess messing with HTML and CSS on 2007-era Myspace and
          Tumblr was just the start.
        </p>
      </section>

      <section>
        <Subtitle css={styles.subtitle}>Colophon</Subtitle>
        <p css={styles.paragraph}>
          This is the 3rd iteration of my personal site. This one is built with
          React and Next.js, and hosted on Netlify. It&apos;s set in{' '}
          <Link href="https://rsms.me/inter/">Inter</Link> for sans serif and{' '}
          <Link href="https://fonts.google.com/specimen/Cousine">Cousine</Link>{' '}
          for monospace. The code is available on{' '}
          <Link href="https://github.com/agarun/agarun.com">GitHub</Link>.
        </p>
        <p css={styles.paragraph}>Thanks for reading!</p>
      </section>
    </section>
  );
}

export default About;
