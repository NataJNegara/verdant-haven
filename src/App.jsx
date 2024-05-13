import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PlantDetail from "./features/plants/PlantDetail";
import ScrollToTop from "./utils/ScrollToTop";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
// import RegisterPage from "./pages/RegisterPage";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./pages/ProductPage";
import AddPlantPage from "./pages/AddPlantPage";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:plantId" element={<PlantDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/create" element={<AddPlantPage />} />
              <Route path="/update/:plantId" element={<AddPlantPage />} />

              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/register" element={<RegisterPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-white",
            color: "text-gray-700",
          },
        }}
      />
    </QueryClientProvider>
  );
}
