import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/working-groups-info/__docusaurus/debug',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug', '3fa'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/config',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/config', '892'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/content',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/content', 'bfb'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/globalData',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/globalData', 'c79'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/metadata',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/metadata', 'ce7'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/registry',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/registry', '473'),
    exact: true
  },
  {
    path: '/working-groups-info/__docusaurus/debug/routes',
    component: ComponentCreator('/working-groups-info/__docusaurus/debug/routes', 'a17'),
    exact: true
  },
  {
    path: '/working-groups-info/',
    component: ComponentCreator('/working-groups-info/', '837'),
    exact: true
  },
  {
    path: '/working-groups-info/',
    component: ComponentCreator('/working-groups-info/', '4d3'),
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
