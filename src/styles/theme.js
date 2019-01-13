import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primaryColor = '#BE3535';
const secondaryColor = '#484848';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: [
        'Hind Vadodara',
        'Hind',
        'Noto Sans JP',
        'Roboto',
        'Open Sans',
        'Arial',
        'sans-serif',
        'Source Sans Pro',
        'Fira Sans',
        'Oxygen',
        'Hind Siliguri'
      ].join(','),
  },
  palette: {
    primary: { 
        main: primaryColor, 
        contrastText: '#fff',
        dark: '#7B1515'
    },
    secondary: { 
        main: secondaryColor, 
        contrastText: '#fff',
        light: '#E3E3E3' 
    }
  }
});

export default theme