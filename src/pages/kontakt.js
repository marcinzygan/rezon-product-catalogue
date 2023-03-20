import GoogleMap from "@/components/GoogleMap/GoogleMap";
import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";

const kontakt = () => {
  return (
    <main className="main__page_layout">
      <PageHeading heading={"Kontakt"} subHeading={"Jak możemy pomóc ?"} />
      <GoogleMap />
    </main>
  );
};

export default kontakt;
