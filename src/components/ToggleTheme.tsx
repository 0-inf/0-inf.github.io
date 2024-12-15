'use client';
import { useTheme } from '@/app/theme';
import { CiDark, CiLight } from 'react-icons/ci';

export function ToggleThemeRound() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center rounded-full bg-white shadow-round text-[--color-ui-font] w-[30px] h-[30px] fixed right-4 bottom-4"
    >
      {theme === 'dark' ? <CiLight /> : <CiDark />}
    </button>
  );
}

export function ToggleThemeEmojiBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <div className="flex gap-1 items-center">{theme === 'dark' ? <CiLight /> : <CiDark />}Theme</div>
    </button>
  );
}
