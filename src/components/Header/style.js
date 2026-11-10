import styled from "styled-components";

export const HeaderContainer =styled.header`
    background: ${({ theme }) => theme.colors.headerFooterBg };
    color: ${({ theme }) => theme.colors.headerText };
    padding: ${({ theme }) => theme.spacing.md };
    text-align: center;
`;