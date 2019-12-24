import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { search } from "actions/index";
import env from "env.config";
import SignupFields from "components/SignupFields";

const mapDispatchToProps = (dispatch) => {
    return {
        search: (input) => dispatch(search(input)),
    };
};

const mapStateToProps = state => {
    return {
        message: state.common && state.common.message ? state.common.message : ""
    };
};

function SignupApp(props) {

    useEffect(() => {
    }, []);

    function search(page = 1, isPageRequest = false) {
        window[env.APP_NAME]["message"] = "";
    }

    return (
        <div>
            <div className="todo-signup-content">
                <h1><SignupFields /></h1>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(SignupApp);