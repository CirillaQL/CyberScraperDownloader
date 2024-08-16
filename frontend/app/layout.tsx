import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <NavBar />
          <main>
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}