/* eslint-disable import/no-anonymous-default-export */
export default (theme) => ({
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        background: 'rgba(0, 0, 0, 0.2) !important',
      },
      rounded: {
        borderRadius: '16px',
      },
    },
  },
})
