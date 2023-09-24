import type { Config } from "jest";

const config: Config | any = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    globals: {
      __DEV__: true,
    },
    transform: { "\\.[jt]sx?$": "babel-jest", "^.+\\.(ts|tsx)?$": "ts-jest" },
    projects: [
      {
        displayName: "test",
        testMatch: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(spec|test).[jt]s?(x)",
        ],
      },
    ],
  },
};

export default config;
