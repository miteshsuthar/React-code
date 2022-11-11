// 6 Answer

import React, { useState, ChangeEvent } from 'react'
import SecureLS from 'secure-ls';

interface Iser {
  email: string;
  password: string;
}

const Login = () => {

  const [value, setValue] = useState<Iser>({
    email: '',
    password: ''
  })
  const [hasError, setHasError] = useState({
    email: '',
    password: ''
  })
  const [isselect, setSelect] = useState(false);
  const [data, setData] = useState<Iser | any | Array<null>>([])
  const [show, setShow] = useState(false);

  const handleChange = (field: string, e: ChangeEvent<HTMLInputElement>) => {
    const event = e?.target?.value;
    const temp: any = value;
    temp[field] = event;
    setValue(temp)
  }

  const checkError = async () => {
    // console.log(`value`, value);
    var tempError: any = hasError;

    if (value.email?.length === 0) {
      tempError["email"] = 'email is not fill up ';
    }

    if (value.password?.length === 0) {
      // console.log(`ww`);
      tempError["password"] = 'password is not fill up ';
    }

    // console.log(`tempError`, tempError);
    setHasError({ hasError, ...tempError });
  }

  const remember = () => {
    setSelect(true)
    if (isselect === true) {
      localStorage.removeItem('user_data');
    }
    else {
      var ls = new SecureLS();
      ls.set("user_data", JSON.stringify(value)); // set key1
    }
  }

  const showbtn = () => {
    setShow(prevState => !prevState)
  }

  const onlogin = async () => {
    await checkError();
    // console.log(`hasError`, hasError,hasError?.title,hasError?.description);
    console.log(hasError)
    // let localStorage:any;
    if (hasError?.email === "" && hasError?.password === "") {
      let temp = []
      if (data.length > 0) {
        temp = [...data, value]
      } else {
        temp = [value]
      }
      // localStorage.setItem("user_data", JSON.stringify(temp))
      setData(temp);
    }
  }
  return (
    <div>
      <div className="container">
        <h1>Log In Page</h1>
        <div className="input_space">
          <input placeholder="Email" type='text' onChange={(e) => {
            handleChange("email", e);
          }} />
          <p>{hasError?.email}</p>
        </div>
        <div className="input_space">
          <input placeholder="Password" type={show ? "text" : 'password'} onChange={(e) => {
            handleChange("password", e);
          }} /><i className="far fa-eye" onClick={showbtn}></i>
          <p>{hasError?.password}</p>
        </div>
        <div>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" onClick={remember} /> <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button onClick={onlogin}>Sign In</button>
      </div>
    </div>
  );
}
export default Login;
