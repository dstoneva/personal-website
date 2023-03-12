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
}) => {
  if (error)
    return (
      <Container>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {button}
          <Typography textAlign="center">{error}</Typography>
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
