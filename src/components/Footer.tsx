import { ToggleThemeEmojiBtn } from './ToggleTheme';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-items-center w-full theme-inverse">
      <div className="w-full max-w-4xl mx-auto gap-4 px-4 py-8">
        <div>
          <h1>0-inf</h1>
          <div className="flex justify-between">
            <p>We make something weird</p>
            <ToggleThemeEmojiBtn />
          </div>
        </div>
        <div className="flex w-full mt-14 mb-4 items-center">
          <p>
            Made with ❤️️ by the <b>0-inf</b> team
          </p>
        </div>
      </div>
    </footer>
  );
}
