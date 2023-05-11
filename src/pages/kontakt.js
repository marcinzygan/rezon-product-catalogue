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
        <div>
          <div>
            <p className={classes.contact__strong}>
              ZAPRASZAMY DO NASZEJ HURTOWNI
            </p>
            <p className={classes.contact__address}>
              78-100 Kołobrzeg, ul. Ketlinga 1
            </p>
            <p className={classes.contact__p}>
              <strong>tel : </strong> +48 94 35 514 50
              <br></br>
              <strong>tel : </strong> 697 716 916 <br></br>{" "}
              <strong>fax : </strong> +48 94 35 514 50 wew. 21 <br></br>
              <strong>e-mail : </strong>
              hurtownia@rezon.eu
              <br></br>
              <br></br>Hurtownia czynna jest od poniedziałku do piątku w godz.
              od 7:00 do 15:00
            </p>
          </div>
          <GoogleMap />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default kontakt;
