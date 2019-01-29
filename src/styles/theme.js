import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primaryColor = '#BE3535';
const secondaryColor = '#484848';

const customTheme = createMuiTheme({
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
    display1: {
      fontFamily: ['Hind Vadodara'],
      fontWeight: '900',
      fontSize: 32,
      color: primaryColor
    },
    display2: {
      fontFamily: ['Roboto'],
      fontWeight: '300',
      fontSize: 15,
    },
    display3: {
      fontFamily: ['Hind'],
      fontWeight: '800',
      fontSize: 13,
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