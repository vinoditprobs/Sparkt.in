import "./styles/globals.scss";
import Header from "./components/header";
import Footer from "./components/footer";

import { generateMetaTags } from "./components/generateMetaTags";

export const metadata = generateMetaTags({
  metaTitle: "Sparkt | A Creative & Digital Marketing Agency in Mumbai",
  metaDescription: "Sparkt is a collaboration of data sciences and emotional intelligence to bridge need gaps with creative and experiential solutions both for brands and consumers.",
  pageUrl: "https://sparkt.in",
  ogImage: "https://sparkt.in/og.png",
  keywords: [
    "digital agency",
    "creative agency",
    "SMO",
    "SEO",
    "SEM",
    "programmatic media buying",
    "analytics",
    "website design",
    "website development",
  ],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
