'use client';

import { useTheme } from '@/app/theme';
import { CiDark, CiLight } from 'react-icons/ci';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="flex flex-col justify-items-center w-full theme-inverse">
      <div className="w-full max-w-4xl mx-auto gap-4 p-4">
        <div>
          <h1>0-inf</h1>
          <div className="flex justify-between">
            <p>We make something weird</p>
            <button onClick={toggleTheme}>
              <div className="flex gap-1 items-center">{theme == 'dark' ? <CiLight /> : <CiDark />}Theme</div>
            </button>
          </div>
        </div>
        <div className="flex w-full h-28 items-center">
          <p>
            Made with ❤️️ by the <b>0-inf</b> team
          </p>
        </div>
      </div>
    </footer>
  );
}
