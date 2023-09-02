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
        {/* <br />A software engineering student currently in Dallas. */}
      </p>
      <p css={styles.paragraph}>
        What I care about: I&apos;m really interested in working on problems
        that have the promise to change things for the better.
      </p>
      <p css={styles.paragraph}>
        What excites me: Improving my software engineering skills and utilizing
        them to do the above, regardless of the technological stack! That said,
        I&apos;m keen to help integrate AI into modern software applications at
        scale.
      </p>

      <section>
        <Subtitle css={styles.subtitle}>Currently</Subtitle>
        <p css={styles.paragraph}>
          I&apos;m currently a semester away from finishing up my Master&apos;s
          in CS at{' '}
          <Link href="https://omscs.gatech.edu/home">Georgia Tech</Link> where
          I&apos;ve taken courses on machine learning, autonomous robotics,
          knowledge-based artificial intelligence, and more.
          {/* collaborate with physicians, biologists, and engineers to build
          portals, tools, and{' '}
          <Link href="https://www.mskcc.org/msk-impact">tests</Link> in clinical
          bioinformatics. */}
        </p>
        <p css={styles.paragraph}>
          I&apos;m also into music, gaming, and mentoring individuals whether
          they are entering the tech industry, or simply trying to move forward.
        </p>
        <p css={styles.paragraph}>
          As an example, some of that has been helping build and design
          solutions for online communities, check out who my buddies and I at{' '}
          <Link href="https://q3p.com/">q3p LLC</Link> have worked with!
        </p>
        <p css={styles.paragraph}>
          So since school is almost done, I&apos;m definitely open to new
          opportunities! Feel free to{' '}
          <Link href="mailto:mutasimac@gmail.com">email</Link>
          <CopyIconButton text="mutasimac@gmail.com" /> me or check out my{' '}
          <Link href="/contact">socials</Link> or{' '}
          <Link href="https://mutasim.org/files/mutasim-chowdhury-resume.pdf">
            résumé
          </Link>
          .
        </p>
      </section>

      <section>
        <Subtitle css={styles.subtitle}>Previously</Subtitle>
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
          <p css={styles.paragraph}>
            After graduating into the pandemic, I started graduate school, have
            been taking care of family, and am now one step closer to being
            done!
          </p>
        </p>
      </section>

      {/* <section>
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
      </section> */}
    </section>
  );
}

export default About;
