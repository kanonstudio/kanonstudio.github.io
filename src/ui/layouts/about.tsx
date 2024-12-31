import Head from "next/head";

import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";


export const AboutPageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>{`${title} - KanonStudio.github.io`}</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
      </Head>
      <Header position="sticky-top" />
      {children}
      <Footer fab />
    </>
  );
};
