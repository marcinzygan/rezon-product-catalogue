import React from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const [emailSent, setEmailSent] = React.useState(false);
  const form = React.useRef();
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w7r7sek",
        "template_sbvr0m7",
        form.current,
        "UkxeEriq9CJHF2olx"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setEmailSent(true);
  };

  function closeEmailAlert() {
    setEmailSent((prevState) => !prevState);
    setLastName("");
    setName("");
  }

  return (
    <form
      id="form"
      ref={form}
      onSubmit={sendEmail}
      className={classes.form__container}
    >
      <label htmlFor="user_name" className={classes.form__label}>
        Imię <span className="span__accentFirst">.</span>
      </label>
      <input
        id="user_name"
        type="text"
        name="user_name"
        className={classes.form__input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="user_lastName" className={classes.form__label}>
        Nazwisko <span className="span__accentFirst">.</span>
      </label>
      <input
        id="user_lastName"
        type="text"
        name="user_lastName"
        className={classes.form__input}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email" className={classes.form__label}>
        Email <span className="span__accentFirst">.</span>
      </label>
      <input
        id="email"
        type="email"
        name="user_email"
        className={classes.form__input}
      />
      <label htmlFor="message" className={classes.form__label}>
        Wiadomość <span className="span__accentFirst">.</span>
      </label>
      <textarea
        id="message"
        name="message"
        className={classes.form__input + " " + classes.form__textarea}
      />
      <input type="submit" value="Wyślij" className={classes.form__btn} />
      <div
        className={
          !emailSent
            ? classes.email__message
            : classes.email__message + " " + classes.email__message_visible
        }
      >
        <Icon
          className={classes.close__message_icon}
          icon="ep:close-bold"
          onClick={closeEmailAlert}
        />

        <h3 className={classes.email__alert_heading}>
          Dziękujemy za Twoją Wiadomość
          <span className={classes.email__alert_name}>
            {" " + name.charAt(0).toUpperCase() + name.slice(1)}
          </span>{" "}
          <span className={classes.email__alert_name}>
            {" " + lastName.charAt(0).toUpperCase() + lastName.slice(1)}
          </span>
        </h3>

        <p className={classes.email__alert_message}>
          Postaramy się odpowiedzieć najszybciej jak to możliwe. <br></br>
          Miłego Dnia !
        </p>
        <p className={classes.email__alert_message}>Rezon.eu</p>
      </div>
    </form>
  );
}
