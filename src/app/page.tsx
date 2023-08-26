import Image from "next/image";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Services from "../../components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
    </main>
  );
}
