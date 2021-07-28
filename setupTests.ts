import 'whatwg-fetch';

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
