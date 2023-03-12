import { Box, CircularProgress, Container, Divider, Typography } from '@mui/material'

const PageLayout = ({
  error,
  children,
  data,
  isAsync = true,
  container = false,
  title,
  loading = <CircularProgress />,
  button,
  weatherApi,
}) => {
  if (error)
    return (
      <Container>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {button}
          <Typography textAlign="center">
            {weatherApi
              ? error.response.data.error.message
              : 'We had an error, please contact the system administrator.'}
          </Typography>
        </Box>
      </Container>
    )

  if (!data && !error && isAsync) return <Container>{loading}</Container>

  return container ? (
    <>
      <Container sx={{ py: 4 }}>
        {title && (
          <Box mb={2}>
            <Typography variant="h5">{title}</Typography>
            <Divider />
          </Box>
        )}
        {children}
      </Container>
    </>
  ) : (
    children
  )
}

export default PageLayout
