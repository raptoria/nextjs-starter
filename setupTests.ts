import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			addListener: () => undefined,
			removeListener: () => undefined
		};
	}
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => {
		return {
			getPropertyValue: () => undefined
		};
	}
});
