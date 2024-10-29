import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/working-groups-info/__docusaurus/debug',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug', 'bbe'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/config',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/config', '36a'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/content',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/content', '0a3'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/globalData',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/globalData', 'a40'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/metadata',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/metadata', '605'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/registry',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/registry', '0a6'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/routes',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/routes', '810'),
    exact: true
  },
  {
    path: '/working-groups-info/',
    component: ComponentCreator('/working-groups-info/', 'e1b'),
    exact: true
  },
  {
    path: '/working-groups-info/',
    component: ComponentCreator('/working-groups-info/', '6b7'),
    routes: [
      {
        path: '/working-groups-info/',
        component: ComponentCreator('/working-groups-info/', '206'),
        routes: [
          {
            path: '/working-groups-info/',
            component: ComponentCreator('/working-groups-info/', '125'),
            routes: [
              {
                path: '/working-groups-info/02102024',
                component: ComponentCreator('/working-groups-info/02102024', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/working-groups-info/04092024',
                component: ComponentCreator('/working-groups-info/04092024', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/working-groups-info/16102024',
                component: ComponentCreator('/working-groups-info/16102024', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/working-groups-info/18092024',
                component: ComponentCreator('/working-groups-info/18092024', '38f'),
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
