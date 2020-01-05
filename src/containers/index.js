import React, { useEffect } from 'react';
import SignupFields from "components/SignupFields";

function SignupApp(props) {

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className="todo-signup-content">
                <h1><SignupFields /></h1>
            </div>
        </div>
    )

}

export default SignupApp;