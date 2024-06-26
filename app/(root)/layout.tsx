import type { Metadata } from "next";
import "../globals.css";
import { Footer, Header, Navigation } from "../components";
import { StoreProvider } from "../Store";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <StoreProvider>
          <div className="w-screen min-h-screen bg-slate-100 flex flex-col justify-between">
            <div>
              <Header />
              <Navigation />
            </div>
            <main className="text-black">{children}</main>
            <div>
              <Footer />
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
