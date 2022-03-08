module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	
	//".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2|svg)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    //'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
    //  '<rootDir>/__mocks__/fileMock.js',
	  
	".+\\.(css|scss|png|jpeg|jpg|svg)$": "jest-transform-stub",
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  coveragePathIgnorePatterns: 
    [
      '<rootDir>/node_modules/', 
      '<rootDir>/.next/', 
      '<rootDir>/__mock__/', 
      '<rootDir>/__test__/', 
      '<rootDir>/services/', 
      '<rootDir>/coverage/', 
      '<rootDir>/pages/api/', 
      '<rootDir>/redux/', 
      '<rootDir>/jest.config.js', 
      '<rootDir>/next.config.js',
      '<rootDir>/pages/_app.js',
      '<rootDir>/pages/_document.js'
    ],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg||ttf|woff|woff2)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
