import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Router from "./routers/Routes";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
