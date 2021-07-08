import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

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
    fireEvent.click(targetCheckbox);
    expect(targetCheckbox).toBeChecked();
    expect(targetBtn).toBeEnabled();
})