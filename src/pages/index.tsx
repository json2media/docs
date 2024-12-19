import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
// import RecentBlogPosts from '../components/RecentBlogPosts';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // const nrRecentBlogPosts = siteConfig.customFields.recentBlogPostsOnHomePage;

  return (
    <Layout
      title="Json2Media Documentation"
      description="Comprehensive guides and tutorials to help you create and manage custom AI assistants with Json2Media.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <div className="container padding-top--xl padding-bottom--xl">
          <RecentBlogPosts nrPosts={nrRecentBlogPosts} />
        </div> */}
      </main>
    </Layout>
  );
}
