import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const siteGitHubUrl = 'https://github.com/json2media/docs';

const config: Config = {
  title: 'Welcome to Json2Media Documentation',
  tagline: 'Your guide to creating and managing custom AI assistants.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.json2media.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  customFields: {
    siteGitHubUrl: siteGitHubUrl,
    recentBlogPostsOnHomePage: 5
  },

  organizationName: 'Json2Media',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      './plugins/blog-plugin/blog-plugin.js',
      {
        id: 'recent_blogs',
        blogTitle: 'Json2Media Blog',
        blogDescription: 'Blog',
        include: ['**/*.{md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        showReadingTime: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
        onUntruncatedBlogPosts: 'throw',
        onInlineAuthors: 'warn',
        // Remove this to remove the "edit this page" links.
        editUrl: `${siteGitHubUrl}/edit/main/`,
      },
    ]
  ],
  presets: [
    [
      'classic',
      {
        pages: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/json2media/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,          
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'throw',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/json2media-dark.png',
    navbar: {
      title: 'Json2Media Docs',
      logo: {
        alt: 'Json2Media Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'doc', docId: 'get-started', position: 'left', label: 'Get Started' },
        // { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/docs/feedback-support', label: 'Support', position: 'right' },
        {
          href: 'https://github.com/json2media',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/get-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/json2media',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/json2media',
            }
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/json2media',
            },
            {
              label: 'Sitemap',
              href: '/sitemap.xml'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Json2Media, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
