export default {
  preset: 'ts-jest/presets/default',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.typecheck.json',
    },
  },

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
