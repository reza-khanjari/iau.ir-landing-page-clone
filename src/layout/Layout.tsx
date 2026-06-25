import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Footer from "@/layout/Footer";
import Slider from "@/components/Slider";

function Layout() {
  return (
    <div >
      <Slider />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
