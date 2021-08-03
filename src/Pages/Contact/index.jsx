import React from "react";
import Button from "../../components/Button";
import { useState } from "react";
import FlexContainer from "../../components/FlexContainer";
import { PrimaryTitle } from "../../components/Typography";
import { FormStyled } from "../../components/Form";
import { MdSend } from "react-icons/md";
import SpanErrorForm from "../../components/SpanErrorForm";
import { RiChatSmile2Line } from "react-icons/ri";

export default function Index() {
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

  function handleSubmit(e) {
    e.preventDefault();

    if(!messageError.valid){
        return
    }

    console.log({ name, email, message });

    setName("");
    e.target[0].focus()
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <FlexContainer direction="column">
        <PrimaryTitle>Contact me!</PrimaryTitle>
        <FormStyled onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            required
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
      </FlexContainer>
    </div>
  );
}
