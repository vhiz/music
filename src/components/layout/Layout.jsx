import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <body className="overflow-x-hidden relative">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
