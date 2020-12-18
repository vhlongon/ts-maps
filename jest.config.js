module.exports = {
  reporters: ['default'],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['**/src/**'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['./testSetup.js'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  preset: 'ts-jest',
};
