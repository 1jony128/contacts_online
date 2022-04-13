import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const base = [
  {
    login: "admin",
    password: "12345"
  },
  {
    login: "user",
    password: "54321"
  },
]


const Login: FC  = () => {

  const login = useInput('');
  const password = useInput('');
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log((password.error && login.error));
    // console.log("password.error " + password.error)
    // console.log("login.error " + login.error)
    // console.log("password.value " + password.value === "")
    if(login.value !== ""){
      const validEmail = base.find(user => user.login === login.value)
      console.log(validEmail)
      if(!validEmail){
        login.setError(false)
      } else {
        login.setError(true)
      }
    }
    if(password.value !== ""){
      const validPassword = base.find(user => user.password === password.value)
      console.log(validPassword)
      if(!validPassword){
        password.setError(false)
      } else {
        console.log("ds")
        password.setError(true)
      }
    }
   
  }, [login.value, password.value])

  return (
    <div className='login'>
      <FormControl fullWidth>
        <h1>Вход в контакты</h1>
        <div className="input_wrapper">
          <TextField
            required
            fullWidth
            id="outlined-required"
            label='Введите логин'
            placeholder='Введите логин'
            inputProps={{ inputMode: 'numeric', pattern: login }}
            value={login.value}
            onChange={login.onChange}
            onBlur={e => login.setHover(true)}
          />
          {
              (!login.error && login.hover) && <div className={"error"}>Учетная запись не найдена в базе данных</div>
            }
        </div>
        <div className="input_wrapper">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password.value}
            fullWidth
            placeholder={"Введите пароль"}
            onChange={password.onChange}
            onBlur={e => password.setHover(true)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {
              (!password.error && password.hover) && <div className={"error"}>Не корректный пароль</div>
            }
        </div>
        {
          ((password.error && login.error))  &&
        <Link to={"/contact"}>
          <Button variant="contained">Войти</Button>
        </Link>
        }
       
      </FormControl>
      
    </div>
  );
}

export default Login; 
