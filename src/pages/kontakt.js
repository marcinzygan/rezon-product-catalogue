import GoogleMap from "@/components/GoogleMap/GoogleMap";
import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";

const kontakt = () => {
  return (
    <main>
      <PageHeading heading={"Kontakt"} subHeading={"Jak możemy pomóc ?"} />
      <GoogleMap />
      <div>
        formularz zamowien <a href="/pdf01.pdf">TUTAJ</a>
      </div>
    </main>
  );
};

export default kontakt;
