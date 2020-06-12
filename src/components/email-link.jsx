import React, { useRef, useState } from "react";
import styled from "styled-components";

const EmailContainer = styled.div({
    marginBottom: "3rem",
    display: "flex",
    flexWrap: "wrap",
});

const EmailForm = styled.form({
    position: "relative",
    width: "13em",
    padding: "0",
    margin: "0",
})

const EmailTextarea = styled.textarea(({ theme, isCopied }) => ({
    outline: "0",
    background: "white",
    border: `1px ${isCopied ? theme.highlight : "#888"} ${isCopied ? "solid" : "dashed"}`,
    padding: "0",
    width: "14em",
    height: "3.15em",
    padding: "0.9em 0 0.7em",
    borderRadius: "0.5em",
    fontSize: "0.9em",
    resize: "none",
    textAlign: "center",
}));

const Button = styled.button(({ theme, isCopied }) => ({
    color: theme.body,
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9em",
    fontWeight: "600",
    letterSpacing: "-0.006em",
    height: "3.15em",
    width: "16em",
    lineHeight: "2.75em",
    margin: "0",
    borderRadius: "0.5em",
    outline: "0",
    border: "0",
    color: theme.body,
    textDecoration: "none",
    display: "block",
    background: theme.highlight,
    color: "white",
    transition: "0.15s ease",
    ...isCopied && {
        boxShadow: "0px 3px 5px rgba(0,0,0,0.25) inset",
    },
    ":hover": {
      background: theme.lowlight,
      color: "white",
      cursor: "pointer",
    },
  }));

const EmailLink = () => {
    const textAreaRef = useRef(null);
    const [isCopied, setCopied] = useState(false);
    const copyEmailAddress = () => {
        textAreaRef.current.select();
        document.execCommand("copy");
        setCopied(true);
    }
    const copyAndOpen = () => {
        copyEmailAddress();
        window.open("mailto:laura@lauragallisa.com", "_blank");
    }
    return (
        <EmailContainer>
        <EmailForm>
          <EmailTextarea
            ref={textAreaRef}
            value="laura@lauragallisa.com"
            isCopied={isCopied}
          />
        </EmailForm>
        <Button isCopied={isCopied} onClick={copyEmailAddress}>{isCopied ? "Copied! Talk to you soon 📬" : "Copy email to clipboard 📭"}</Button> 
      </EmailContainer>
    )
}

export default EmailLink;
