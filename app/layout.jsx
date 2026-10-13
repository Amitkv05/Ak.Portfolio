import "./globals.css";

const siteUrl = "https://YOUR-PORTFOLIO-URL.vercel.app";

const title = "AK Portfolio | React.js, MERN & Flutter Developer";

const description =
  "Explore React.js, MERN stack and Flutter projects, full-stack development skills, and web and mobile application experience.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title,
  description,

  applicationName: "AK Portfolio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "AK Portfolio",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Portfolio — React.js, MERN and Flutter Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
