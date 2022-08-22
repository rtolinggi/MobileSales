import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#E53935',
  },
  darkColors: {
    primary: '#000',
  },
  components: {
    Button: {
      color: 'primary',
      size: 'lg',
      containerStyle: {
        width: '100%',
      },
      uppercase: true,
    },
  },
});

export default theme;
