import loadYAML from '@/lib/loadYAML';
import Link from 'next/link';

type MenuType = {
  name: string;
  url: string;
};

type MenuDataType = {
  menu: MenuType[];
};

export default function Nav() {
  const menusData = loadYAML<MenuDataType>('/data/setting.yml');

  return (
    <nav className="flex flex-col justify-items-center w-full max-w-4xl mx-auto sticky top-0 z-50 p-4">
      <div className="w-full theme-inverse py-2 px-6 rounded-xl flex justify-between items-center gap-6">
        <h4>
          <Link href="/" style={{ display: 'ruby' }}>
            0-inf
          </Link>
        </h4>
        <div className="flex gap-x-2 flex-wrap justify-end md:gap-x-4">
          {menusData ? (
            menusData.menu.map((menu, index) => (
              <Link href={menu.url} key={`menu-${index}`}>
                {menu.name}
              </Link>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </nav>
  );
}
