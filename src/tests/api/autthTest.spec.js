import {test, expect} from '@playwright/test';
import { log } from 'console';

test.describe('Authentication test', () => {
    test('Fail Bearer Authentication', async ({ request }) => {
        const response = await request.get('/bearer');
        expect(response.status()).toBe(401);
    });
    test('Success Bearer Authentication', async ({ request }) => {
        const token = Math.floor(Math.random() * (1000000 - 1) + 1);
        const response = await request.get('/bearer', {
            headers: {
                'Authorization':'Bearer ' + token
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const bodyResponse = await response.json();
        expect(bodyResponse).toHaveProperty('token');
        expect(parseInt(bodyResponse.token)).toBe(token);
    });
});