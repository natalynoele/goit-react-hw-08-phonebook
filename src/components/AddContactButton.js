import { Box, Avatar, Button } from "@mui/material";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function AddContactButton({ handleClick }) {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <PermPhoneMsgIcon sx={{ fontSize: 'small' }} />
      </Avatar>

      <Button
        type="button"
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Add contact to Phone Book
      </Button>
    </Box>
  );
}
