import type { Metadata } from "next";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Productos | TDM Asfaltos",
  description: "Asfaltos, emulsiones, señalización y seguridad vial, y otros productos de TDM Asfaltos.",
};

export default function Page() {
  return <ProductsPage />;
}
