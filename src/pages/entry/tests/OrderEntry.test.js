import { rest } from 'msw';
import { server } from '../../../mocks/server';
import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

test('test the error response from the server to be an alert', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
            return res(ctx.status(500));
        }),

        rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
            return res(ctx.status(500));
        }));

    render(<OrderEntry />);
    await waitFor(
        async () => {
            const alertText = await screen.findAllByRole('alert');
            expect(alertText).toHaveLength(2);
        }
    )
});