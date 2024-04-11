import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* replacing home component to outlet the <Outlet /> component is used in App.js as a placeholder for 
          rendering child routes defined in your routing setup (index.js). This is a feature provided by 
          react-router-dom that allows you to render nested routes within a parent route. */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
