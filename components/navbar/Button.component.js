import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';





export const ButtonNavbar = () =>{

    const onLogoutClick =  (e) => {
        e.preventDefault();
        window.localStorage.clear();
        alert("Anda telah logout");
    }
    // const isUserLogin = localStorage.getItem('status');
    const isUserLogin = "";
    return (
        <>
            {
              isUserLogin === "Login Success" ? 
              (
                <>
                  <Button variant="contained"> 
                    {/* <Link style={{ textDecoration: 'none', color: '#fff' }} to="/home-page"> */}
                      My Profile
                    {/* </Link> */}
                  </Button>
                  <Button variant="contained" color="error" onClick={onLogoutClick}> 
                    {/* <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login"> */}
                      Logout
                    {/* </Link> */}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outlined" style={{ borderRadius: "90px" }}> 
                  {/* <Link style={{ textDecoration: 'none', color: 'black'}} to="/register"> */}
                    Sign Up Free
                  {/* </Link> */}
                  </Button>
                  <Button variant="outlined" color="success" style={{ borderRadius: "90px" }}>
                    {/* <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"> */}
                      Login
                    {/* </Link> */}
                  </Button>
                </>
              ) 
            }
        </>
    )
}