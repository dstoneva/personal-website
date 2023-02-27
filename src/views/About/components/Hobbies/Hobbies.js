import React from 'react'
import { Box, Typography } from '@mui/material'
import { personalInfo } from 'utils/constants'

export default function Hobbies() {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="terminalbody1" sx={{ mb: 1 }}>
        Apart from coding, my interests include:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {personalInfo.hobbies.map((hobby) => (
          <Box display="flex" alignItems="center" sx={{ gap: 1 }} key={hobby.label}>
            <Box component="span" fontSize="1.25rem">
              {hobby.emoji}
            </Box>
            <Typography variant="terminalbody1">
              {hobby.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
