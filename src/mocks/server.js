import { setupServer } from 'msw/node';
import { handlers } from './handlers';
//This creates a request mocking the server with the given request handlers.png.
export const server = setupServer(...handlers);