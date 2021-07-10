import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertBanner = ({ message, variant }) => {
    const messageText = message || 'An unexpected error occured. Please try again later.';
    const alertVariant = variant || 'danger';
    return (
        <Alert variant={alertVariant} name={messageText} style={{ backgroundColor: 'red' }}>
            {messageText}
        </Alert>
    )
}

export default AlertBanner
