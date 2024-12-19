import React from 'react';
import Link from '@docusaurus/Link';
import { useBlogPosts } from '@docusaurus/theme-common';
import clsx from 'clsx';

export default function LatestBlogPosts() {
  const blogPosts = useBlogPosts();

  // Function to determine blog post tags
  const getPostTag = (createdAt: string, updatedAt: string): string | null => {
    return createdAt === updatedAt ? 'new' : 'updated';
  };

  // Sort posts by updatedAt in descending order
  const sortedPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.metadata.updatedAt).getTime() - new Date(a.metadata.updatedAt).getTime()
  );

  return (
    <section className="margin-vert--xl">
      <div className="container">
        <h2 className="text--center">Latest Blog Posts</h2>
        <div className="row">
          {sortedPosts.slice(0, 5).map((post, idx) => {
            const { title, description, permalink, createdAt, updatedAt } = post.metadata;
            const tag = getPostTag(createdAt, updatedAt);

            return (
              <div key={idx} className={clsx('col col--4 margin-bottom--lg')}>
                <div className="card shadow--md padding--lg">
                  <div className="card__header">
                    <h3>
                      <Link to={permalink}>{title}</Link>
                    </h3>
                  </div>
                  <div className="card__body">
                    <p>{description}</p>
                    {tag && (
                      <span
                        className={clsx(
                          'badge',
                          tag === 'new' ? 'badge--primary' : 'badge--warning'
                        )}
                      >
                        {tag.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text--center margin-top--lg">
          <Link to="/latest-blogs" className="button button--primary button--lg">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
