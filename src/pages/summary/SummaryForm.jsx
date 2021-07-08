import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SummaryForm = () => {
    const [tcChecked, setTcChecked] = useState(false);
    const checkBoxLabel = (
        <span>
            I aggree to <span style={{ color: 'blue' }}>Terms and Conditions.</span>
        </span>
    )
    return (
        <Form>
            <Form.Group controlId='terms-and-conditions'>
                <Form.Check
                    type='checkbox'
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkBoxLabel}
                    name='terms and conditions'
                />
            </Form.Group>
            <Button variant='primary' type='submit' disabled={!tcChecked} name='Confirm Order'>
                Confirm Order
            </Button>
        </Form>
    )
}

export default SummaryForm
