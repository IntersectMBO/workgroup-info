import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/workgroup-info/__docusaurus/debug',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug', '5f5'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/config',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/config', '128'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/content',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/content', '8a5'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/globalData',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/globalData', 'edd'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/metadata',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/metadata', 'fbd'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/registry',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/registry', 'd1a'),
    exact: true
  },
  {
    path: '/workgroup-info/__docusaurus/debug/routes',
    component: ComponentCreator('/workgroup-info/__docusaurus/debug/routes', 'd6b'),
    exact: true
  },
  {
    path: '/workgroup-info/',
    component: ComponentCreator('/workgroup-info/', '512'),
    exact: true
  },
  {
    path: '/workgroup-info/',
    component: ComponentCreator('/workgroup-info/', 'bb0'),
    routes: [
      {
        path: '/workgroup-info/',
        component: ComponentCreator('/workgroup-info/', '97d'),
        routes: [
          {
            path: '/workgroup-info/',
            component: ComponentCreator('/workgroup-info/', '490'),
            routes: [
              {
                path: '/workgroup-info/01152025',
                component: ComponentCreator('/workgroup-info/01152025', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/02102024',
                component: ComponentCreator('/workgroup-info/02102024', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/04092024',
                component: ComponentCreator('/workgroup-info/04092024', '00f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/11122024',
                component: ComponentCreator('/workgroup-info/11122024', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/16102024',
                component: ComponentCreator('/workgroup-info/16102024', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/18092024',
                component: ComponentCreator('/workgroup-info/18092024', 'fc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/27112024',
                component: ComponentCreator('/workgroup-info/27112024', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/workgroup-info/30102024',
                component: ComponentCreator('/workgroup-info/30102024', 'f93'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
