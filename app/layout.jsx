// styles
import '@/public/styles/globals.scss'

export const metadata = {
  title: "Amirhosein Qadamgahi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
