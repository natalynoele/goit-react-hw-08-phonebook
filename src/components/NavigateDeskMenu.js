import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function NavigateDeskMenu() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contacts');
  };
  return (
    <Button
      onClick={handleNavigate}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      Contacts
    </Button>
  );
}
export default NavigateDeskMenu;
