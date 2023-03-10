import { Box, Tooltip } from '@mui/material'
import { Fragment } from 'react'

const Skillset = ({ skill }) => {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', m: 1 }}>
        {skill.map((item) => {
          return (
            <Fragment key={item.title}>
              <Tooltip title={item.title}>
                <Box
                  alt={item.title}
                  component='img'
                  sx={{
                    margin: 1,
                    maxWidth: { xs: '1.5rem', sm: '3rem' },
                    maxHeight: { xs: '1.5rem', sm: '3rem' },
                    '&:hover': { transform: 'scale3d(1.3, 1.3, 1)', transition: 'all .4s ease-in-out' },
                  }}
                  src={item.icon}
                />
              </Tooltip>
            </Fragment>
          )
        })}
      </Box>
  )
}

export default Skillset
