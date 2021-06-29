import Header from "./component/Header";
import Chair from "./component/Chair";
import Table from "./component/Table";
import Sofa from "./component/Sofa";
import Drag from "./component/Drag";
import ContentDisplay from "./component/ContentDisplay";
import HeroSection from "./component/HeroSection";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Header />
      {/* <Chair />
      <Table />
      <Sofa /> */}
      <Drag />
      <ContentDisplay />
      <HeroSection />
    </>
  );
}
export default App;
