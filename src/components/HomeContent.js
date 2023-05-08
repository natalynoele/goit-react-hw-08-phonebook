import photo from '../assets/images/pexels-andrea-piacquadio-826349.jpg';
import { Container, Typography, Box } from '@mui/material';

function HomeContent() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        maxWidth: 'unset',
        height: 'calc(100vh - 78px)',
        position: 'relative',
        bgcolor: 'background.default',
        pl: 'unset !important',
        pr: 'unset !important',
        m: 'unset',
        overflow: 'hidden',
      }}
    >
      <img
        className="home-background"
        src={photo}
        alt="girl is talking on the phone"
        loading="lazy"
        width="100%"
        height="100%"
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          top: 235,
          right: 50,
          backgroundColor: '#fffbe67a',
        }}
      >
        <Typography
          sx={{
            p: 10,
            color: 'primary.main',
            fontWeight: 700,
            fontSize: '2em',
            fontStyle: 'italic',
          }}
        >
          It's your local Phone Book
        </Typography>
      </Box>
    </Container>
  );
}
export default HomeContent;
