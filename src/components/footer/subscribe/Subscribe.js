import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

import "./Subscribe.styles.scss";

const Subscribe = ({
    placeholder,
    buttonText,
    configureNotification,
    showNotification,
    changeLogoSpeed
}) => {
    const [state, setState] = useState({
        email: ""
    });

    const handleChange = e => {
        setState({ email: e.target.value.trim() });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (state.email) {
            fetch(`/api/memberAdd?email=${state.email}`)
                .then(res => res.json().then(data => ({ status: res.status, body: data })))
                .then(obj => {
                    configureNotification(obj);
                    showNotification();
                })
                .catch(err => console.log(err))

            setState({ email: '' });
        }
    };

    return (
        <Form inline className="subscribe inputGroup" onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    className='form-control subscribe-email'
                    name="email"
                    type="email"
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={state.email}
                    aria-label='Join Mailing List'
                />
                <InputGroup.Append>
                    <Button variant='outline-secondary subscribe-button' type='submit'>{ buttonText }</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

Subscribe.propTypes = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    configureNotification: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
};

export default Subscribe;