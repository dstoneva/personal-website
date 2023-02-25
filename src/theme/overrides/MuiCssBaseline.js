/* eslint-disable import/no-anonymous-default-export */
export default (theme) => ({
  // you can safely use all props from the default theme
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        background: '#26004d',
        width: '100vw',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `radial-gradient(at 32% 66%, hsla(11, 89%, 51%, 1) 0, hsla(11, 89%, 51%, 0) 50%),
radial-gradient(at 9% 68%, hsla(215, 86%, 68%, 1) 0, hsla(215, 86%, 68%, 0) 50%),
radial-gradient(at 73% 88%, hsla(245, 87%, 64%, 1) 0, hsla(245, 87%, 64%, 0) 50%),
radial-gradient(at 99% 40%, hsla(333, 92%, 54%, 1) 0, hsla(333, 92%, 54%, 0) 50%),
radial-gradient(at 51% 59%, hsla(207, 92%, 64%, 1) 0, hsla(207, 92%, 64%, 0) 50%),
radial-gradient(at 59% 2%, hsla(198, 92%, 63%, 1) 0, hsla(198, 92%, 63%, 0) 50%),
radial-gradient(at 52% 16%, hsla(144, 89%, 53%, 1) 0, hsla(144, 89%, 53%, 0) 50%)`,
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
