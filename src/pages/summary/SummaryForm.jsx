import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const SummaryForm = () => {
    const [tcChecked, setTcChecked] = useState(false);

    const popOver = (
        <Popover id="popover-basic">
            <Popover.Content>
                no icecream will actually be delivered.
            </Popover.Content>
        </Popover>
    );

    const checkBoxLabel = (
        <span>
            I aggree to
            <OverlayTrigger placement='right' overlay={popOver}>
                <span style={{ color: 'blue' }}>Terms and Conditions.</span>
            </OverlayTrigger>
        </span>
    );


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
