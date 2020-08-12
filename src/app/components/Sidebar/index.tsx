import React from 'react';
import * as Icon from 'react-feather';

import { Menu } from '../Menu';
import { MenuConfigData } from './menu.config.data';

import './style.scss';

export interface Props {
  currentPath: string;
  isMenuOpen: boolean;
  isMobile: boolean;
  onToggleSidebar: () => void;
}

const { MENU_LIST } = MenuConfigData;

export function Sidebar(props: Props) {
  const parentUrl = props.currentPath.split('/')[1];

  let toggleSidebarClass = '';
  if (props.isMobile) {
    toggleSidebarClass = props.isMenuOpen ? 'open' : 'close';
  }

  return (
    <nav className={`col-md-2 col-6 bg-light sidebar ${toggleSidebarClass}`}>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {MENU_LIST.map(item => (
            <Menu
              key={item.title}
              link={item.link}
              icon={item.icon}
              title={item.title}
              isActive={parentUrl === item.link.split('/')[1]}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
