import { test, expect } from '@playwright/test';

test.describe('API methods test', () => {
    test('GET method', async ({ request }) => {
        const response = await request.get('/get');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });
    test('POST method', async ({ request }) => {
        const response = await request.post('/post');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });
    test('PUT method', async ({ request }) => {
        const response = await request.put('/put');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });
    test('DELETE method', async ({ request }) => {
        const response = await request.delete('/delete');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });
    test('PATCH method', async ({ request }) => {
        const response = await request.patch('/patch');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });
});