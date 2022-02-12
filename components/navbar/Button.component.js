import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { incrementCounterAction } from '../../redux/actions/counters'

export const ButtonNavbar = () =>{
	
	const dispatch = useDispatch()
    const counters = useSelector(state => state.counters)

	/* testing redux add score
    const handleChange = (e) => {
		dispatch(
			incrementCounterAction()
		)
		localStorage.setItem('total_score', counters.value+1)
    }
	*/
	
    const onLogoutClick = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        alert("Anda telah logout");
        window.location = "/login/";
    }
	
	const isUserLogin = ""
	var name = ""
	
	if (typeof window !== 'undefined') {
		isUserLogin = localStorage.getItem('status');
		name = localStorage.getItem('name');
	}
	
    return (
        <>
            {
              isUserLogin === "Login Success" ? 
              (
                <>
					{/* testing redux add score
						<a onClick={handleChange}>Testing redux add score</a>
					*/}
				
					<a href="/profile" style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px' }}><span style={{ padding: '2px 6px'}}>{name}</span> <span style={{ backgroundColor: '#55daab', color: 'white', borderRadius: '3px', padding: '2px 6px'}}>Score: {counters.value}</span></a> 
					<a href="/home-page" style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', border: '1px solid rgba(25, 118, 210, 0.5)', borderRadius: '90px', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px' }}>Dashboard</a> 
					<a href="/profile" style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', border: '1px solid rgba(25, 118, 210, 0.5)', borderRadius: '90px', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px' }}>My Profile</a> 
					<a href="/login" onClick={onLogoutClick} style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', lineHeight: '1.75', fontSize: '0.875rem', border: '1px solid rgba(46, 125, 50, 0.5)', borderRadius: '90px', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px' }}>Logout</a>
                </>
              ) : (
                <>
                  <Button variant="outlined" style={{ borderRadius: "90px" }}> 
					<a href="/register" style={{ textDecoration: 'none', color: 'black'}}>
                      Sign Up Free
					</a>
                  </Button>
                  <Button variant="outlined" color="success" style={{ borderRadius: "90px" }}>
                    <a href="/login" style={{ textDecoration: 'none', color: 'black' }}>
                      Login
                    </a>
                  </Button>
                </>
              ) 
            }
        </>
    )
}