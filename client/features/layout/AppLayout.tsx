import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './styles/AppLayout.module.scss';
import TopNav from './component/TopNav';
import Footer from './component/Footer';
import ScrollTop from './component/ScrollTop';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const AppLayout: NextPage<AppLayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://www.deptagency.com/wp-content/themes/dept/public/favicon.svg"
        />
        <link
          href="http://fonts.cdnfonts.com/css/maison-neue"
          rel="stylesheet"
        />
      </Head>

      <TopNav />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default AppLayout;