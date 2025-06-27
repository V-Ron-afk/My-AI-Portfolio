import "@/app/globals.css";
import { Outfit, Ovo, Roboto_Mono, } from "next/font/google";

const outfit = Outfit ({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo ({
  subsets: ["latin"], weight: ["400"]
});

const roboto_mono = Roboto_Mono ({
  subsets: ["latin"], weight: ["400",]
});

export const metadata = {
  title: "RON PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${roboto_mono.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
