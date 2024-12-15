import Link from 'next/link';
import loadYAML from '@/lib/loadYAML';
import { useState, useEffect } from 'react';

type MenuType = {
  name: string;
  url: string;
};

type MenusDataType = {
  menu: MenuType[];
};

export default function Nav() {
  const [menusData, setMenusData] = useState<MenusDataType | null>(null);

  useEffect(() => {
    loadYAML('data/setting.yml', setMenusData);
  }, []);

  return (
    <nav className="flex flex-col justify-items-center w-full max-w-4xl mx-auto sticky top-0 z-50 p-4">
      <div className="w-full theme-inverse py-2 px-6 rounded-xl flex justify-between items-center">
        <h4>0-inf</h4>
        <div className="flex gap-4">
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
