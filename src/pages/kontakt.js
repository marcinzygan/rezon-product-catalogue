import GoogleMap from "@/components/GoogleMap/GoogleMap";
import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";

const kontakt = () => {
  return (
    <div>
      <PageHeading heading={"Kontakt"} subHeading={"Jak możemy pomóc ?"} />
      <GoogleMap />
    </div>
  );
};

export default kontakt;
