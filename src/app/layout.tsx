import { ThemeProvider } from './theme';
import { Metadata } from 'next';

import '@/app/styles/base.scss';
import '@/app/styles/components.scss';
import '@/app/styles/utilities.scss';
import '@/app/styles/fonts.scss';
import '@/app/styles/colors.scss';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '0-inf',
  description: '여기 바꾸어야 해요요요!!!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-primary">
        <ThemeProvider>
          <Nav />
          <main className="flex flex-col justify-items-center max-w-4xl mx-auto px-4 pb-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
