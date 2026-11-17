import styled from 'styled-components';

export const CardArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.iconBackground};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const Temperature = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;