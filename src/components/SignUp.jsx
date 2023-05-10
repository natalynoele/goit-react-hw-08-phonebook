import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import Spinner from './spinner/Spinner';
import { register } from 'redux/auth/authOperations';
import { selectError } from 'redux/auth/authSelectors';
import { selectIsLoading } from 'redux/auth/authSelectors';

export default function SignUp() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register(user));
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser(prevState => ({ ...prevState, [name]: value.trim() }));
  };

  const { name, email, password } = user;
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            {loading && <Spinner />}
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
