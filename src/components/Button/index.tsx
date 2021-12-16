import React from 'react';

import { Container } from './styles';

type Props = React.HTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = function ({ ...rest }) {
  return (
    <Container {...rest}>
      {rest.children}
    </Container>
  );
};

export default Button;
