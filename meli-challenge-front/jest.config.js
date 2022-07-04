module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/app/**/*.{ts,tsx}",
    "src/@redux/**/*.ts",
    "!src/app/components/Header/Dropdown.tsx",
    "!src/app/modules/*.tsx",
    "!src/@redux/*.ts",
    "!src/**/**/saga.{ts,tsx}",
    "!src/**/**/reducer.ts",
    "!src/*.tsx",
    "!src/routes/*.{ts,tsx}",
    "!src/app/components/*.{ts,tsx}",
    "!**/node_modules/**"
  ],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  }
}
