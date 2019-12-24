import React from 'react';
import env from "env.config";

export default function Submit(props) {

    function renderSearchButton() {
        return (
            <button id={props.id && props.id !== '' ? `${env.APP_NAME}-${props.id}` : `${env.APP_NAME}-search-button`}
                type="button"
                className="btn btn-default bg-light-blue margin-r-5"
                onClick={() => props.handleSearch()}>
                {props.label && props.label !== '' ? props.label : 'Search'}
            </button>
        );
    }

    return (
        <div style={{ float: 'right', padding: '1px' }}>
            {renderSearchButton()}
        </div>
    );

}