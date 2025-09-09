import './globals.css';

export const metadata = {
  title: 'Home',
  description: 'hello world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
