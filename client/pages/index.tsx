import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/containers/HomePage";
import PropertyListing from "@/components/PropertyListing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homestead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <HomePage />
        <div className="flex flex-col items-center mt-6 space-y-4">
          <PropertyListing
            title="3 Bedroom Apartment"
            location="Lekki, Lagos"
            price={250000}
            image="/landing-image.svg"
            id="12345"
            bedrooms={3}
            bathrooms={2}
            area={2000}
          />
           <PropertyListing
            title="3 Bedroom Apartment"
            location="Lekki, Lagos"
            price={250000}
            image="/landing-image.svg"
            id="12345"
            bedrooms={3}
            bathrooms={2}
            area={2000}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
