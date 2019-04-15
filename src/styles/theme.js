import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primaryColor = '#BE3535';
const secondaryColor = '#484848';

const customTheme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: [
        'Hind Vadodara',
        'Hind',
        'Roboto',
        'Open Sans',
        'Source Sans Pro',
        'Oxygen',
      ].join(','),
    h1: {
      fontFamily: ['Open Sans'],
      fontSize: 75,
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h2: {
      fontFamily: ['Hind Vadodara'],
      fontSize: 37,
      fontWeight: 900,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h3:{
      fontFamily: ['Open Sans'],
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h4: {
      fontFamily: ['Hind Vadodara'],
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: 0
    },
    h5: {
      fontFamily: ['Hind Vadodara'],
      fontWeight: '900',
      fontSize: 32,
      color: primaryColor
    },
    h6: {
      fontFamily: ['Hind Vadodara'],
      fontSize: 37,
      fontWeight: 300,
      color: '#fff',
      lineHeight: 0
    },
    subtitle1: {
      fontFamily: ['Roboto'],
      fontWeight: '300',
      fontSize: 15,
    },
    subtitle2: {
      fontFamily: ['Hind'],
      fontWeight: '800',
      fontSize: 13,
    },
    overline: {
      fontFamily: ['Roboto'],
      fontWeight: '600',
      fontSize: 20,
    },
    body1: {
      fontFamily: ['Oxygen'],
      fontSize: 15
    },
    body2: {
      fontWeight: '600',
      fontSize: 15,
    },
    button: {
      fontFamily: ['Roboto'],
      fontWeight: '600',
      fontSize: 15,
    }
  },
  palette: {
    primary: { 
        main: '#BE3535', 
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

export default customTheme