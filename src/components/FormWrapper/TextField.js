import React, { useState, useEffect } from 'react';

export default function TextField(props) {

    const { id, value, type, header, style, className, placeholder, onChange, isMobile, isNumber, error } = props;
    const [pattern, setPattern] = useState(undefined);
    const [maxLength, setMaxLength] = useState(undefined);
    const [finalClassName, setFinalClassName] = useState('');

    useEffect(() => {
        getExtraProps();
    }, []);

    useEffect(() => {
        getClassName();
    }, [error]);

    useEffect(() => {
        getClassName();
    }, [value]);

    function getClassName() {
        let finalClass = "form-control tmn-id-input input-height";
        if (className) {
            finalClass = className;
        }
        if (error) {
            finalClass = finalClass + " mrt-has-error";
        }
        setFinalClassName(finalClass);
    }

    function getExtraProps() {
        getClassName();
        if (isMobile) {
            setPattern("[0-9]*");
            setMaxLength(10);
        }
        if (isNumber) {
            setPattern("[0-9]*");
        }
    }

    function handleChange(e) {
        if (isMobile || isNumber) {
            onChange(e.target.validity.valid ? e.target.value : value);
        } else {
            onChange(e.target.value);
        }
    }

    return (
        <div>
            <label>{header}</label>
            <br />
            <input
                id={id}
                type={type ? type : "text"}
                style={style}
                className={finalClassName}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                value={value}
                pattern={pattern}
                maxLength={maxLength}
            />
        </div>
    )
}