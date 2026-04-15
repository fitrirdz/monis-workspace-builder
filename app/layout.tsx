import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workspace Builder',
  description: 'Build your dream workspace and rent it easily',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light'>
      <body className='bg-neutral-100 text-neutral-900 antialiased'>
        {children}
      </body>
    </html>
  );
}
