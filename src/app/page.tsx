import Header from "@/components/Header";
import Products from "@/components/Products";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Training from "@/components/products/Training";
import Automate from "@/components/products/Automate";

export default function Home() {
  return (
    <main>
      <Header />
      <Automate />
      <Training />
      <Products />
      <Faq />
      <Footer />
    </main>
  )
}
