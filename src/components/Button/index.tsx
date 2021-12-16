import React from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({...rest}) => {
    return <Container {...rest}>
        {rest.children}
  </Container>;
};

export default Button;