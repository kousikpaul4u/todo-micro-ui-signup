import React, { useState } from 'react';
import { TextField, Submit } from 'components/FormWrapper/index';
import env from "env.config";

export default function SignupFields(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSearch() {
        if (userName === "admin" && password === "admin") {
            if (window["todo_header_app"]) {
                window["todo_header_app"]["username"] = userName;
                alert("Welcome " + userName)
            }
        } else {
            alert("Signup Unsuccessful!!")
        }
    }

    return (
        <div>
            <div>
                <TextField
                    id={`${env.APP_NAME}-username`}
                    className={`${env.APP_NAME}-username`}
                    header="Username"
                    placeholder="Enter User Name"
                    value={userName}
                    onChange={(value) => setUserName(value)}
                    isMobile={false}
                    isNumber={false}
                />
            </div>
            <div>
                <TextField
                    id={`${env.APP_NAME}-password`}
                    className={`${env.APP_NAME}-password`}
                    header="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    isMobile={false}
                    isNumber={false}
                />
            </div>
            <div>
                <Submit
                    label="Sign Up"
                    handleSearch={handleSearch}
                />
            </div>
        </div>
    );

}