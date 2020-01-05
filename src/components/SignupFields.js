import React, { useState } from 'react';
import { TextField, Submit } from 'components/FormWrapper/index';
import env from "env.config";

function SignupFields(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");

    function handleSearch() {
        window.dispatchEvent(
            new CustomEvent(`${env.APP_NAME}_set_signup_details`, {
                detail: {
                    userName: userName,
                    dob: dob
                }
            })
        );
    }

    return (
        <div>
            <div>
                <TextField
                    id={`${env.APP_NAME}-username`}
                    className={`${env.APP_NAME}-username ${env.APP_NAME}-textfield`}
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
                    className={`${env.APP_NAME}-password ${env.APP_NAME}-textfield`}
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
                <TextField
                    id={`${env.APP_NAME}-dob`}
                    className={`${env.APP_NAME}-dob ${env.APP_NAME}-textfield`}
                    header="Date of Birth"
                    placeholder="MM/DD/YYYY"
                    value={dob}
                    onChange={(value) => setDob(value)}
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
export default SignupFields;