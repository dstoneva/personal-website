import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import useRaf from '@rooks/use-raf'
import discord from './logos/discord.png'
import docs from './logos/docs.svg'
import excel from './logos/excel.svg'
import gmail from './logos/gmail.svg'
import photoshop from './logos/photoshop.svg'
import powerpoint from './logos/powerpoint.svg'
import safari from './logos/safari.svg'
import slack from './logos/slack.svg'
import spotify from './logos/spotify.svg'
import vlc from './logos/vlc.svg'
import visualstudio from './logos/visual-studio.png'
import { Box } from '@mui/material'

const images = [discord, docs, excel, gmail, photoshop, powerpoint, safari, slack, spotify, visualstudio, vlc]

export default function Dock() {
  return <BottomIcons />
}

function BottomIcons() {
  const mouseX = useMotionValue(null)

  return (
    <Box sx={{ width: 'auto', mb: '0px', left: '0px', right: '0px', bottom: '0px'}}>
      <Box
        sx={{
          display: 'flex',
          padding: '5px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          height: '70px',
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
          backdropFilter: 'blur(4px)',
        }}
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {images.map((image, index) => (
          <Box key={index} sx={{ height: 'auto', padding: '5px' }}>
            <Img src={image} mouseX={mouseX} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const iconWidth = 40
const space = iconWidth * 3
const beyondSpace = space + 1
const spaceInput = [-space, -space / 1.25, -space / 2, 0, space / 2, space / 1.25, space]
const widthOutput = [
  iconWidth,
  iconWidth * 1.3,
  iconWidth * 1.7,
  iconWidth * 2.5,
  iconWidth * 1.7,
  iconWidth * 1.3,
  iconWidth,
]

function Img({ src, mouseX }) {
  const distance = useMotionValue(beyondSpace)
  const width = useSpring(useTransform(distance, spaceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  })

  const ref = useRef()

  useRaf(() => {
    const el = ref.current
    const mouseXValue = mouseX.get()
    if (el && mouseXValue !== null) {
      const rect = el.getBoundingClientRect()

      const imgCenterX = rect.left + rect.width / 2

      const distanceDelta = mouseXValue - imgCenterX
      distance.set(distanceDelta)
      return
    }

    distance.set(beyondSpace)
  }, true)

  return <motion.img ref={ref} src={src} style={{ width }} />
}
