import ContactForm from "@/components/ContactForm/ContactForm";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";
import classes from "../styles/kontakt.module.css";

const kontakt = () => {
  return (
    <main className="main__page_layout">
      <PageHeading heading={"Kontakt"} subHeading={"Jak możemy pomóc ?"} />
      <div className={classes.form__container}>
        <GoogleMap />
        <ContactForm />
      </div>
    </main>
  );
};

export default kontakt;
