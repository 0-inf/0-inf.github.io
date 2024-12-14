'use client';

import Image from 'next/image';
import { useTheme } from './theme';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import IdLink from '@/components/IdLink';

export default function Home() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <header className="flex flex-col justify-items-center items-center w-full py-40 gap-4">
        <div>
          <h1 className="text-8xl">Welcome to 0-inf</h1>
          <p className="text-end">Since 2020</p>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/0-inf" target="_blank" className="flex items-center gap-1">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.youtube.com/@zerotoinf" target="_blank" className="flex items-center gap-1">
            <FaYoutube />
            <span>YouTube</span>
          </a>
        </div>
      </header>
      <main className="flex flex-col justify-items-center max-w-4xl mx-auto p-4">
        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
        <h4>Dear reader.</h4>a long time ago...
        <p>사랑하는 한글...</p>
        <IdLink id="member" />
        <ul className="list-disc ml-8">
          <li>Siwon Yun</li>
          <li>Jinjae Park</li>
          <li>Chaehwan Seol</li>
          <li>Mossygoldcoin</li>
          <li>Hraverals</li>
          <li>Seonghyun Kim</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisl lorem. Cras aliquam risus tellus, in
          porta risus finibus a. Sed ex enim, gravida ut nisl eu, bibendum pretium est. Cras velit odio, lobortis eu
          bibendum id, posuere ut urna. Morbi ac lorem eleifend, interdum lacus eget, elementum elit. Aenean et
          pellentesque mi, non feugiat neque. Nulla pellentesque tellus tellus, vitae porta nisi posuere vitae. Donec
          luctus feugiat sapien, et pharetra magna vestibulum vel. Maecenas et tortor sed urna aliquam pellentesque nec
          at lorem. Vivamus consectetur hendrerit tincidunt. Maecenas ullamcorper neque risus, quis ornare ligula
          porttitor vitae. Integer sed accumsan velit, vel commodo lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis cursus purus id rhoncus elementum. Sed eu pellentesque urna. Suspendisse pellentesque
          vehicula commodo. Nam auctor tristique felis. Mauris scelerisque nisl ut eros dignissim hendrerit. Duis nec
          vulputate leo. Praesent et risus purus. Phasellus quis massa lacus. Aliquam tincidunt id mi nec lacinia. Nunc
          vitae purus eu augue viverra imperdiet sed vitae augue. Sed commodo libero non dolor mattis scelerisque. Sed
          ac blandit felis. Nunc vitae maximus velit. Ut ornare convallis mi et vehicula. Sed porta mattis fringilla.
          Sed in quam sit amet orci vehicula fermentum. Maecenas placerat in nibh vitae imperdiet. Sed sit amet orci
          diam. Donec blandit quam vel interdum imperdiet. Quisque bibendum sodales molestie. Quisque a sollicitudin
          ligula, quis efficitur felis. Mauris quis arcu vitae sapien auctor vestibulum. Integer metus purus, maximus
          nec justo ac, consectetur sodales lacus. Mauris nisi felis, ultrices id sagittis a, dictum et nulla. Aliquam
          ac sem non erat condimentum mollis id in nisi. Pellentesque vel luctus risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce in fermentum diam, ut efficitur risus. Nunc eget
          molestie elit. In non odio non dui accumsan feugiat et at orci. Phasellus lobortis ac nisi nec viverra. Proin
          condimentum vehicula sem sit amet laoreet. Morbi vitae semper nisi, et consectetur velit. Mauris sem est,
          pretium ac viverra eu, efficitur ac lorem. Proin blandit quis quam eu pellentesque. Fusce tempus dolor sem, in
          bibendum tellus convallis sed. Nam euismod dictum enim nec mollis. Donec a tempus dui. Etiam eget interdum
          felis. Nulla orci mi, ullamcorper id porttitor sed, sollicitudin quis erat. Ut quis sodales orci.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisl lorem. Cras aliquam risus tellus, in
          porta risus finibus a. Sed ex enim, gravida ut nisl eu, bibendum pretium est. Cras velit odio, lobortis eu
          bibendum id, posuere ut urna. Morbi ac lorem eleifend, interdum lacus eget, elementum elit. Aenean et
          pellentesque mi, non feugiat neque. Nulla pellentesque tellus tellus, vitae porta nisi posuere vitae. Donec
          luctus feugiat sapien, et pharetra magna vestibulum vel. Maecenas et tortor sed urna aliquam pellentesque nec
          at lorem. Vivamus consectetur hendrerit tincidunt. Maecenas ullamcorper neque risus, quis ornare ligula
          porttitor vitae. Integer sed accumsan velit, vel commodo lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis cursus purus id rhoncus elementum. Sed eu pellentesque urna. Suspendisse pellentesque
          vehicula commodo. Nam auctor tristique felis. Mauris scelerisque nisl ut eros dignissim hendrerit. Duis nec
          vulputate leo. Praesent et risus purus. Phasellus quis massa lacus. Aliquam tincidunt id mi nec lacinia. Nunc
          vitae purus eu augue viverra imperdiet sed vitae augue. Sed commodo libero non dolor mattis scelerisque. Sed
          ac blandit felis. Nunc vitae maximus velit. Ut ornare convallis mi et vehicula. Sed porta mattis fringilla.
          Sed in quam sit amet orci vehicula fermentum. Maecenas placerat in nibh vitae imperdiet. Sed sit amet orci
          diam. Donec blandit quam vel interdum imperdiet. Quisque bibendum sodales molestie. Quisque a sollicitudin
          ligula, quis efficitur felis. Mauris quis arcu vitae sapien auctor vestibulum. Integer metus purus, maximus
          nec justo ac, consectetur sodales lacus. Mauris nisi felis, ultrices id sagittis a, dictum et nulla. Aliquam
          ac sem non erat condimentum mollis id in nisi. Pellentesque vel luctus risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce in fermentum diam, ut efficitur risus. Nunc eget
          molestie elit. In non odio non dui accumsan feugiat et at orci. Phasellus lobortis ac nisi nec viverra. Proin
          condimentum vehicula sem sit amet laoreet. Morbi vitae semper nisi, et consectetur velit. Mauris sem est,
          pretium ac viverra eu, efficitur ac lorem. Proin blandit quis quam eu pellentesque. Fusce tempus dolor sem, in
          bibendum tellus convallis sed. Nam euismod dictum enim nec mollis. Donec a tempus dui. Etiam eget interdum
          felis. Nulla orci mi, ullamcorper id porttitor sed, sollicitudin quis erat. Ut quis sodales orci.
        </p>
        <IdLink id="test" />
        <h3 className="text-end w-full">
          <p>Best,</p>
          <p>0-inf</p>
        </h3>
        <div className="bg-red-500 w-full p-6">block</div>
      </main>
      <footer className="flex flex-col justify-items-center w-full theme-inverse">
        <div className="w-full max-w-4xl mx-auto gap-4 p-4">
          <div>
            <h1>0-inf</h1>
            <div className="flex justify-between">
              <p>We make something weird.</p>
              <button onClick={toggleTheme}>theme btn</button>
            </div>
          </div>
          <div className="flex w-full h-28 items-center">
            <p>
              Made with ❤️️ by the <b>0-inf</b> team.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
