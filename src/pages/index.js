import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Welcome from '@site/src/components/Welcome'
import About from '@site/src/components/About'
import Sponsors from '@site/src/components/Sponsors'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Welcome /> 
        <About />
        <Sponsors />
      </main>
    </Layout>
  );
}
