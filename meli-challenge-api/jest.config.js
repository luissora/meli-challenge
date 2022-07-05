module.exports = {
  roots: ['src'],
  collectCoverage: true,
  collectCoverageFrom: [
    "!src/controllers/*.ts",
    "!src/app/contracts/*.ts",
    "!src/**/index.ts",
    "!rc/app/infrastructure/services/*.ts",
    "!**/node_modules/**"
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  }
}
