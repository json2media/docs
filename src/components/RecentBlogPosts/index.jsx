import React from 'react';
import posts from '@site/.docusaurus/docusaurus-plugin-content-blog/recent_blogs/blog-posts-metadata.json';
import RecentBlogPost from '../RecentBlogPost';

const RecentBlogPosts = ({ nrPosts }) => {
    const recentPosts = posts.slice(0, nrPosts);

    if (recentPosts.length === 0) {
        return null;
    }

    return (
        <div>
            <h1 className="text--center padding-vert--md">Recent Blog Posts</h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                {recentPosts.map((post, index) => (
                    <RecentBlogPost key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default RecentBlogPosts;