/* eslint-disable import/no-anonymous-default-export */
import { mergeDeep } from 'utils'
import MuiButton from './MuiButton'
import MuiCssBaseline from './MuiCssBaseline'
import MuiButtonBase from './MuiButtonBase'
import MuiTooltip from './MuiTooltip'
import MuiPaper from './MuiPaper'

export default function overrides(theme) {
  return mergeDeep(MuiButton(theme), MuiCssBaseline(theme), MuiButtonBase(theme), MuiTooltip(theme), MuiPaper(theme))
}
