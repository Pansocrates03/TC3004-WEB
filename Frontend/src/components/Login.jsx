import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

const Login = ({ login }) => {
    const navigate = useNavigate
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please fill all fields');
            return;
        }
        login(username, password);
        setUsername('');
        setPassword('');
    }
    return (
        <form onSubmit={onSubmit}>
            <Box 
                margin={"auto"}
                flexDirection={"column"}
                display={"flex"}
                width={400}
                marginTop={"20px"} >

                <TextField 
                    label="Username" 
                    variant="outlined" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    fullWidth />

                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    fullWidth />
                
                <Button
                    type="submit"
                    variant="contained"
                    color="primary" >
                    Login
                </Button>

            </Box>
        </form>
    )
}

export default Login;