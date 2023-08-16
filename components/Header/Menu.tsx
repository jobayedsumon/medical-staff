import { classNames } from '@/utils/class-names';
import { menu } from './menu-items';

export const Menu = () => {
  return (
    <nav className="main-menu">
      <ul className="menu">
        {menu.map((item, index) => (
          <li
            className={classNames(
              item.sub_links ? 'mega-menu-item' : 'menu-item'
            )}
            key={index}
          >
            <a
              href={item.path}
              className={classNames(item.sub_links ? 'mega-menu-link' : '')}
            >
              {item.label}
            </a>
            {item.sub_links && (
              <ul className="mega-submenu">
                {item.sub_links.map((sub_item, sub_index) => (
                  <li key={sub_index}>
                    <a href={sub_item.path}>{sub_item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
