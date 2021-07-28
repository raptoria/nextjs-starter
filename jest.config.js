module.exports = {
	projects: [
		{
			displayName: 'automated',
			preset: 'jest-playwright-preset',
			transform: {
				'\\.tsx?$': 'babel-jest',
				'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
					'jest-transform-stub'
			},
			moduleNameMapper: {
				'^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
					'jest-transform-stub'
			},
			testMatch: [
				'<rootDir>/src/**/__automated__/**/*.test.ts',
				'<rootDir>/src/**/__automated__/**/*.test.tsx'
			]
		},
		{
			displayName: 'unit/integration',
			transform: {
				'\\.tsx?$': 'babel-jest',
				'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
					'jest-transform-stub'
			},
			moduleNameMapper: {
				'^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
					'jest-transform-stub'
			},
			globalSetup: '<rootDir>/setupEnv.ts',
			setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
			testMatch: [
				'<rootDir>/src/**/__tests_/**/*.test.ts',
				'<rootDir>/src/**/__tests__/**/*.test.tsx'
			]
		}
	]
};
