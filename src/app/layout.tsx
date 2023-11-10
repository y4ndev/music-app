import "normalize.css";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music app",
  description: "free music app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <div className="main__inner">
            <Sidebar />
            <section className="content">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
