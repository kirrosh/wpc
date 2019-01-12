import styled from 'styled';

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.button.primary};
    box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset;
    transition: background-color 300ms ease-out;
    color: ${({ theme }) => theme.colors.text.button};
    /* border-color: #1a1a1a; */
    border-color: #232320;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 2.125em;
    cursor: pointer;
    &:hover {
      background-color: #1a1a1a;
    }
`;
