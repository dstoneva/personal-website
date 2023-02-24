import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from 'theme'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { API_URL } from 'config'

const fetcher = (url) => axios.get(`${API_URL}${url}`).then(({ data }) => data)

const Store = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
    </ThemeProvider>
  )
}

export default Store
