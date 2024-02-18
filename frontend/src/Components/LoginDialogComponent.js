import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddressAddButton from './AddressAddButton';
import LoginComponent from './loginComponent';
import { DialogContent } from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setloginComponent } from '../Redux/reducer';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function LoginDialogComponent() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [loggedIn, setUserLoggedIn] = React.useState(false);

  const openDialogBox = useSelector(state => state.myReducer.openLoginComponent)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(setloginComponent(false));
    setOpen(false);
  };

  const openDialog = () => {
    if(openDialogBox == true){
      
    }
  }

  const handlelogOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  const verifyAuthToken = async () => {
    const Token = localStorage.getItem('token');
    if (Token) {
      const config = {
        headers: {
          'auth_token': Token
        }
      }

      setUserData(JSON.parse(localStorage.getItem('user')))

      try {
        const response = await axios.get('/api/apiRoutes/verifyIsLoggedIn', config);

        console.log(response);

        if (response.data.message == 'user Logged In') {
          setUserLoggedIn(true)
        } else {
          setUserLoggedIn(false)
        }
      } catch (err) {
        console.log(err);
      }
    }

  }

  React.useEffect(() => {
    openDialog();
    verifyAuthToken();
  },[openDialogBox])


  return (
    <React.Fragment>
      {loggedIn ? <><text style={{ fontWeight: 'bold', fontSize: '17px', width : '200px'}}>Hii!! {userData.name}</text> <AddressAddButton onpress={handlelogOut} BtnName={'LOGOUT'} styles={{ width: '200px', height: '40px', border: 'none', backgroundColor: 'white', color: 'black'}} /></> : <AddressAddButton onpress={handleClickOpen} BtnName={'LOG IN | SIGNUP'} styles={{ width: '200px', height: '40px', border: 'none', backgroundColor: 'white', color: 'black' }} />}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <LoginComponent />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
