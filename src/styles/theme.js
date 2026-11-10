export const theme = {
  colors: {
    background: '#f4f6f8',
    surface: '#ffffff',
    iconBackground: '#454545', // <-- Novo token para destacar o ícone
    primary: '#2563eb',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    headerFooterBg: '#1e293b',
    headerText: '#ffffff',
    footerText: '#94a3b8',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      xs: '0.875rem',
      sm: '0.9rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2.25rem',
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    card: '8px',
    circle: '50%',
  },
  boxShadow: {
    card: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1000px',
  },
};