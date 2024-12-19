import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  width: string;
  height: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Guides',
    icon: 'ion:book-outline',
    width: '48',
    height: '48',
    description: (
      <>
        Access detailed documentation to learn how to create, customize, and manage your assistants effectively.
      </>
    ),
  },
  {
    title: 'Frequent Updates',
    icon: 'fluent:arrow-repeat-all-24-filled',
    width: '48',
    height: '48',
    description: (
      <>
        Stay updated with the latest features and improvements through our regularly updated docs.
      </>
    ),
  },
  {
    title: 'Your Feedback Matters',
    icon: 'mynaui:chat-dots',
    width: '48',
    height: '48',
    description: (
      <>
        We listen to your feedback to enhance the platform and provide the best user experience.
      </>
    ),
  },
];

function Feature({ title, icon, width, height, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4 padding-vert--md')}>
      <div className="text--center">
        <Icon icon={icon} width={width} height={height} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
