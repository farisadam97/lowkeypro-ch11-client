import React, {useState} from "react";
import Axios from 'axios';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Alert, Snackbar} from '@mui/material';
// import {postLoginAxios} from '../../services/auth.service';
// import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";

import {baseURL} from '../../services/config.service';

// import { useDispatch } from "react-redux";
// import { postLoginAction } from "../../redux/actions/navbar.action";

export default function FormLogin(){
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
    // const dispatch = useDispatch();

    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
          username: '',
          password: ''
        }
      });
    const onSubmit = data => {
        const dataJSON = JSON.stringify(data);
        // dispatch(
        //   postLoginAction(dataJSON)
        // );

        Axios({
          method: 'post',
          url: `${baseURL}/login`,
          data: dataJSON,
          headers: {"Content-Type": "application/json"}
        })
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('bio', response.data.bio);
          localStorage.setItem('city', response.data.city);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('total_score', response.data.total_score);
          localStorage.setItem('status', "Login Success");
          window.location = "/home-page/";
        })
        .catch(function (error) {
          setAlertContent(error.response.data.message);
          setAlert(true);
          // alert(error.response.data.message);
        })
    };

    const handleClose = () => {
      
      setAlert(false);
      setAlertContent('');
    };

    const gridFormStyle = {
        padding: "50px"
    };
    
    const textFieldStyle = {
        marginBottom: "20px",
        border: 1, 
        px: 1,
        borderRadius: 1,
        width: "100%"
    };
    
    return(
    <Card sx={{ minWidth: 200 }} >
      {alert ? 
          <Snackbar 
          open={true}
          anchorOrigin={{vertical: 'top', horizontal: 'center' }}
          >
            <Alert severity='error' onClose={handleClose}>
              {alertContent}
            </Alert>
          </Snackbar> 
        : 
          <></> 
        }
      <CardContent style={gridFormStyle}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="label">Username</label>
            <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Username" />
            }
            />
            {
              errors.username?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Password</label>
            <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="password" style={textFieldStyle} placeholder="Password" />
            }
            />
            {
              errors.password?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Submit</Button>
            <p style={{textAlign: "right"}}>
              {/* <Link style={{ color: 'black' }} to="/register"> */}
                Register Now!
              {/* </Link> */}
            </p>
          </form>
        </Container>
      </CardContent>
      
    </Card>
    )
}
