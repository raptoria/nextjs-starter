import { waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../../../pages';

describe('App', () => {
	beforeEach(() => {
		render(<Index />);
	});

	it('Index contains the expected components', async () => {
		await waitFor(() => {
			expect(screen.getByText('Hello World')).toBeInTheDocument();
		});
	});
});
