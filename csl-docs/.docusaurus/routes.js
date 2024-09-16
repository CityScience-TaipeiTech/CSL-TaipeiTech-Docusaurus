import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '946'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '305'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cd5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '80d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '815'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ab2'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd0f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '38b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '1fb'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '733'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '5a3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a5b'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e2f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '0e5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'cf7'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'f29'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b47'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'cce'),
    exact: true
  },
  {
    path: '/test',
    component: ComponentCreator('/test', '773'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e42'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd55'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/docusaurus-v-2',
            component: ComponentCreator('/docs/tags/docusaurus-v-2', 'bc4'),
            exact: true
          },
          {
            path: '/docs/tags/hello',
            component: ComponentCreator('/docs/tags/hello', '17d'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd9b'),
            routes: [
              {
                path: '/docs/airflow/slack_notification_tutorial',
                component: ComponentCreator('/docs/airflow/slack_notification_tutorial', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/airflow/welcome-docusaurus-v2',
                component: ComponentCreator('/docs/airflow/welcome-docusaurus-v2', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/city-scope',
                component: ComponentCreator('/docs/category/city-scope', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/super-contoller',
                component: ComponentCreator('/docs/category/super-contoller', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/taiwan-island',
                component: ComponentCreator('/docs/category/taiwan-island', '8bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/實驗室資料庫設定',
                component: ComponentCreator('/docs/category/實驗室資料庫設定', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cityscope/todo',
                component: ComponentCreator('/docs/cityscope/todo', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/server-setting/tutorial',
                component: ComponentCreator('/docs/server-setting/tutorial', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/super-contoller/todo',
                component: ComponentCreator('/docs/super-contoller/todo', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/taiwan-island/todo',
                component: ComponentCreator('/docs/taiwan-island/todo', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '656'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
