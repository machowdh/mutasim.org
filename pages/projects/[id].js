/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { getProjectIds, getProjectById } from '../../lib/projects';
import ProjectLayout from '../../components/ProjectLayout';

export async function getStaticPaths() {
  const projectIds = getProjectIds();
  return {
    paths: projectIds,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const project = await getProjectById(id);
  return {
    props: { project },
  };
}

function Project({ project }) {
  return (
    <>
      <Head>
        <title> — Mutasim Chowdhury</title>
      </Head>
      <ProjectLayout {...project} />
    </>
  );
}

export default Project;
