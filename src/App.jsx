import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </StyledApp>
    </>
  );
}

export default App;
