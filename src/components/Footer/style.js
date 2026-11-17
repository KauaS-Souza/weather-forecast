import styled from "styled-components"

export const FooterContainer = styled.footer`
    background: ${({ theme }) => theme.colors.headerFooterBg};
    color: ${({ theme }) => theme.colors.footerText};
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    font-size: ${({ theme }) => theme.typography.xs};
    margin-top: auto;
`