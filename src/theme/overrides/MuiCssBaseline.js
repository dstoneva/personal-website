/* eslint-disable import/no-anonymous-default-export */
export default (theme) => ({
  // you can safely use all props from the default theme
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        background: '#663399',
        width: '100vw',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `radial-gradient(at 96% 92%, hsla(290,97%,60%,1) 0px, transparent 50%),
        radial-gradient(at 48% 98%, hsla(216,88%,74%,1) 0px, transparent 50%),
        radial-gradient(at 76% 43%, hsla(42,82%,66%,1) 0px, transparent 50%),
        radial-gradient(at 44% 89%, hsla(176,87%,76%,1) 0px, transparent 50%),
        radial-gradient(at 88% 17%, hsla(198,86%,62%,1) 0px, transparent 50%),
        radial-gradient(at 27% 41%, hsla(318,96%,63%,1) 0px, transparent 50%)
        `,
      },
      html: {
        scrollBehavior: 'smooth',
      },
      p: {
        lineHeight: 1.75,
      },
      button: {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: 14,
      },
      a: {
        textDecoration: 'none',
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
  },
})
