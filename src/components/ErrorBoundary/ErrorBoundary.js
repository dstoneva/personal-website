import React from 'react'
import { Button, Typography, Box } from '@mui/material'
import axios from 'axios'
import { API_URL } from 'config'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    const sendError = async (error) => {
      try {
        await axios.post(`${API_URL}/error-report`, { location: window.location.href, data: error })
      } catch (err) {
        console.error('Could not send error:', err)
      }
    }

    sendError({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
          <img src="/images/issue.png" alt="error" width="100px" />
          <Typography variant="h3" align="center" sx={{ mt: 4 }}>
            We had an internal issue
          </Typography>

          <Button onClick={() => this.setState({ hasError: false })} variant="outlined" sx={{ mt: 4 }}>
            Try again?
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
