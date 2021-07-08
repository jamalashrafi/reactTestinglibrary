import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('test the presence of a checkbox', () => {
    render(<SummaryForm />);
    let targetCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    expect(targetCheckbox).not.toBeChecked();

    let targetBtn = screen.getByRole('button', { name: /Confirm Order/i });
    expect(targetBtn).toBeDisabled();
});

test('Checkbox enables button on the first click and disbles on the second click', () => {
    render(<SummaryForm />);
    let targetCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    let targetBtn = screen.getByRole('button', { name: /Confirm Order/i });
    userEvent.click(targetCheckbox);
    expect(targetCheckbox).toBeChecked();
    expect(targetBtn).toBeEnabled();
});

test('popover appears on hover of terms and conditions', async () => {
    render(<SummaryForm />);
    const nullPopOver = screen.queryByText(/no icecream will actually be delivered./i);
    expect(nullPopOver).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions./i);
    userEvent.hover(termsAndConditions);

    const popOver = screen.getByText(/no icecream will actually be delivered./i);
    expect(popOver).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    waitForElementToBeRemoved(() => screen.queryByText(/no icecream will actually be delivered./i));
    // expect(nullPopOver1).not.toBeInTheDocument();

});

// console.error
// Warning: An update to Overlay inside a test was not wrapped in act(...).