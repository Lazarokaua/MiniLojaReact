const shared = {
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  transition: '150ms ease-in-out',
  ratingColor: '#ffc107',
};

export const lightTheme = {
  ...shared,
  colors: {
    background: '#f8f9fa',
    text: '#212529',
    cardBg: '#ffffff',
    borderColor: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
    primary: '#0d6efd',
    primaryText: '#ffffff',
    tagNewBg: '#198754',
    tagPromoBg: '#dc3545',
    tagText: '#ffffff',
    skeletonBg: '#e9ecef',
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    background: '#212529',
    text: '#f8f9fa',
    cardBg: '#343a40',
    borderColor: '#495057',
    shadow: 'rgba(0, 0, 0, 0.25)',
    primary: '#2582ff',
    primaryText: '#ffffff',
    tagNewBg: '#20c997',
    tagPromoBg: '#fd7e14',
    tagText: '#212529',
    skeletonBg: '#495057',
  },
};