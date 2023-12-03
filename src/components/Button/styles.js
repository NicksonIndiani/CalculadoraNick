import styled from 'styled-components';

export const ButtonContainer = styled.button`
    
    padding: 20px;
    border: 1px solid gray;
    background-color: #c1c1c1;
    font-size: 24px;
    font-weight: 700;
    flex:1;
    background: linear-gradient(45deg, blue, red);
    color: white;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
        opacity: 0.8;
        background-color: red;
        background: linear-gradient(45deg, red, blue);
    }
`