import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import AppHeader from '@/components/AppHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developer Showcase',
  description: 'Portfólio do Dev Front-end Guilherme Venci',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppHeader>{children}</AppHeader>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
