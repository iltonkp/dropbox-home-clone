import React from "react";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          Dropbox
        </h1>
        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button>Next</button>

        <span className="terms">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi
          sit amet nisi volutpat facilisis.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
