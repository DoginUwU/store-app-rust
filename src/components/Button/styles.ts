import styled from 'styled-components';
import Color from 'color';

const Container = styled.button`
    width: 100%;
    position: relative;
    border-radius: 1em;
    background: #0064fe;
    color: #fff;
    border: none;
    outline: none;
    padding: 0.6em 1em;

    &:hover {
        background: ${Color('#0064fe').lighten(0.2).string()};
    }
`;

export { Container };
