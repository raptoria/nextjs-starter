import 'expect-playwright';

describe('App', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000', { timeout: 60000 });
	});

	it('should contain an h1', async () => {
		const content = await page.textContent('h1');
		expect(content).toBe('Hello World');
	});
});
