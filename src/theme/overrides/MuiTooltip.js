/* eslint-disable import/no-anonymous-default-export */
export default (theme) => ({
  // you can safely use all props from the default theme
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: '1em',
        color: theme.palette.common.black
      },
    },
  },
})
