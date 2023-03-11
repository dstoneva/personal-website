import { Box, Typography, ButtonBase } from '@mui/material'
import { useState } from 'react'

const UnitSwitch = ({ unit, setUnit }) => {
  const [isToggled, setToggle] = useState(false)

  const toggle = () => {
    setToggle(!isToggled)
    isToggled ? setUnit('C') : setUnit('F')
  }
  return (
    <Box>
      <ButtonBase onClick={toggle} disabled={unit === 'C'}>
        <Typography marginRight={1} fontSize="1.75rem" lineHeight={2} color={unit === 'F' ? 'lightgrey' : 'white'}>
          &deg;C
        </Typography>
      </ButtonBase>
      <ButtonBase disabled>
        <Typography fontSize="1.2rem" paddingBottom={0.5}>
          |
        </Typography>
      </ButtonBase>
      <ButtonBase onClick={toggle} disabled={unit === 'F'}>
        <Typography fontSize="1.75rem" marginLeft={1} lineHeight={2} color={unit === 'C' ? 'lightgrey' : 'white'}>
          &deg;F
        </Typography>
      </ButtonBase>
    </Box>
  )
}

export default UnitSwitch
