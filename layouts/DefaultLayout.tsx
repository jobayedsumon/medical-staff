import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import TopBar from '@/components/TopBar/TopBar';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <Header />
      <main className="main-site">{children}</main>
      <Footer />

      <ScrollToTop />
    </>
  );
};
