
// 5 Answer
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// var CryptoJS:any = require("crypto-js");

interface IUser {
    college: string;
    branch: string;
    number: null | string;
    address: string;
}

const Signup = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IUser>({
        college: "",
        branch: '',
        number: null,
        address: ''
    });

    const [data, setData] = useState<IUser | any | Array<null>>([])
    const [hasError, setHasError] = useState<IUser>({
        college: "",
        number: '',
        branch: '',
        address: ''
    })
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user_data") as any);
        if (userData) {
            setData(userData);
        }
    }, [])
    const handleChange = (field: string, e: ChangeEvent<HTMLInputElement>) => {
        const event = e.target?.value;
        // console.log("eeee", event);
        const temp: any = value;
        temp[field] = event;
        setValue(temp)
    }
    const checkError = async () => {
        console.log(`value`, value);
        var tempError: any = hasError;

        if (value.college?.length === 0) {
            tempError["college"] = 'college is not fill up ';
        }
        if (value.number === null) {
            tempError["number"] = 'number is not fill up ';
        }
        if (value.branch?.length === 0) {
            tempError["branch"] = 'branch is not fill up';
        }

        if (value.address?.length === 0) {
            // console.log(`ww`);
            tempError["address"] = 'address is not fill up ';
        }
        // console.log(`tempError`, tempError);

        setHasError({ hasError, ...tempError });

    }

    const Save = async () => {
        await checkError();
        console.log(hasError)
        if (hasError?.college === "" && hasError?.number === '' && hasError?.branch === "" && hasError?.address === "") {
            let temp: (IUser | any)[]
            temp = [];
            if (data.length > 0) {
                temp = [, value]
            } else {
                temp = [value]
            }
            if (hasError?.college === "" && hasError?.number === "" && hasError?.branch === "" && hasError?.address === "") {
                let temp = []
                if (data.length > 0) {
                    temp = [...data, value]
                } else {
                    temp = [value]
                }
                localStorage.setItem("user_data", JSON.stringify(temp))
                setData(temp);

                alert('Account successfully created')

            }

        }
    }

    return (
        <div>
            <div className="container">
                <h1>Collage Form </h1>
                <div className="input_space">

                    <input placeholder="Collage Name" type='text'
                        onChange={(e) => {
                            handleChange("college", e);
                        }} />
                    <p>{hasError?.college}</p>

                </div>

                <div className="input_space">
                    <input placeholder="Mobile Number" type='number' onChange={(e) => {
                        handleChange("number", e);

                    }} />
                    <p>{hasError?.number}</p>
                </div>

                <div className="input_space">
                    <input placeholder="Branch" type='text' onChange={(e) => {
                        handleChange("branch", e);

                    }} />
                    <p>{hasError?.branch}</p>

                </div>

                <div className="input_space">
                    <input placeholder="address" type='address' onChange={(e) => {
                        handleChange("address", e);
                    }} />
                    <p>{hasError?.address}</p>

                </div>

                <button onClick={Save}>Submit</button>

                <p onClick={() => navigate("/login")}>
                    already have an account
                </p>
            </div>
        </div>
    );
}

export default Signup;