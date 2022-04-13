import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div className='flex-evenly'>
            <section className='contact flex-column'>
                < h1 > Contact me</h1 >
                <form className=' flex-column' id="contact-form" onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input className='contact-input' type="text" name="Name" defaultValue={name} onBlur={handleChange} />

                    <label htmlFor="email">Email address:</label>
                    <input className='contact-input' type="email" name="Email" defaultValue={email} onBlur={handleChange} />

                    <label htmlFor="message">Message:</label>
                    <textarea name="Message" defaultValue={message} onBlur={handleChange} />

                    {errorMessage && (
                        <div>
                            <h4 className="error-text">{errorMessage}</h4>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </section >
        </div>
    );
}

export default Contact;