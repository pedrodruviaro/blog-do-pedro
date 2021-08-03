import React from "react";
import Button from "../../components/Button";
import { useState } from "react";
import FlexContainer from "../../components/FlexContainer";
import { PrimaryTitle } from "../../components/Typography";
import { FormStyled } from "../../components/Form";
import { MdSend } from "react-icons/md";
import SpanErrorForm from "../../components/SpanErrorForm";
import { RiChatSmile2Line } from "react-icons/ri";

import bannerContact from "../../images/contact.svg";
import { BannerContainer } from "./styles";


import emailjs from 'emailjs-com';
import { useHistory } from "react-router";

export default function Index() {

  const history = useHistory()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageError, setMessageError] = useState({ valid: true, text: "" });

  function handleMessage(e) {
    if (e.target.value.length < 10) {
      setMessageError({
        valid: false,
        text: `Message must containt a minimum of 10 digits`,
      });
    } else {
      setMessageError({ valid: true, text: "" });
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (!messageError.valid) {
  //     return;
  //   }

  //   console.log({ name, email, message });

  //   setName("");
  //   e.target[0].focus();
  //   setEmail("");
  //   setMessage("");
  // }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2y29jom', 'gmail_template', e.target, 'user_37pn5F7XBS1rzbKxl2yb7')
      .then((result) => {
          console.log(result.text);
          history.push("/")
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <FlexContainer direction="column">
        <PrimaryTitle>Contact me!!</PrimaryTitle>
        <FormStyled onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            required
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            onBlur={handleMessage}
          ></textarea>

          {messageError.valid === false ? (
            <SpanErrorForm>
              <RiChatSmile2Line />
              {messageError.text}
            </SpanErrorForm>
          ) : null}

          <Button type="submit">
            Send
            <MdSend />
          </Button>
        </FormStyled>

        <BannerContainer>
          <img src={bannerContact} alt="" />
        </BannerContainer>
      </FlexContainer>
    </div>
  );
}
