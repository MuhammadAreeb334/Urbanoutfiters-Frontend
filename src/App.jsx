import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CategoryPageWrapper from "./components/layout/CategoryPageWrapper";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "0px",
            background: "#1A1A1A",
            color: "#fff",
            fontSize: "12px",
            textTransform: "uppercase",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#1A1A1A",
          },
        }}
      />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="categories/:categoryName"
            element={<CategoryPageWrapper />}
          />

          <Route path="sale" element={<CategoryPage />} />

          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />

          <Route
            path="*"
            element={
              <div className="p-20 text-center font-light uppercase tracking-widest">
                404 - Page Not Found
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
