import { Typography } from '@mui/material'

const ButtonContact = ({ mailto, label }) => {
  return (
    <Typography component='div' variant='body' onClick={() => (window.location = mailto)}>
      {label}
    </Typography>
  )
}

export default ButtonContact
