import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Spinner from './spinner/Spinner';
import { logIn } from 'redux/auth/authOperations';
import { useState } from 'react';
import { selectError } from 'redux/auth/authSelectors';
import { selectIsLoading } from 'redux/auth/authSelectors';


export default function SignIn() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser(prevState => ({ ...prevState, [name]: value.trim() }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn(user));
    setUser({
      email: '',
      password: '',
    });
  };

  const { email, password } = user;
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ bgcolor: 'background.default', paddingBottom: 8 }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5" color="primary.main">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="center">
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          </Grid>
          <Grid container>
            <Grid container justifyContent="center">
              {loading && <Spinner />}
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
