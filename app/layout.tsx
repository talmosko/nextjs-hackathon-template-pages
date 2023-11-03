import "./globals.css";

import Navbar from "../components/Navbar";

import LogoBlack from "../assets/logo/icons8-pixel-heart-100 (black).png";
import LogoWhite from "../assets/logo/icons8-pixel-heart-100.png";

import Bottom from "../components/Bottom";
import { SocialList } from "../template_data/Social";

import { SessionProvider } from "next-auth/react";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar Logo={LogoBlack.src} />
        {children}
        <Bottom Logo={LogoWhite.src} SocialList={SocialList} />
      </body>
    </html>
  );
}
