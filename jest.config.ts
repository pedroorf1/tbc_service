import type { Config } from "jest";

const config: Config | any = {
  coverageThreshold: {
    moduleDirectories: ["node_modules", "node_modules/.pnpm", "src"],
    modulePaths: ["<rootDir>"],
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    globals: {
      __DEV__: true,
    },
    moduleFileExtensions: [
      "js",
      "mjs",
      "cjs",
      "jsx",
      "ts",
      "tsx",
      "json",
      "node",
    ],
    moduleNameMapper: {
      // obsidian:
      //  "<rootDir>//node_modules/.pnpm/obsidian@1.1.1_cknrwgf45skglbt6g7kref4zeq/node_modules/obsidian",
      "./node_modules/(.*)": "<rootDir>/node_modules/$1",
    },
    transform: {
      "\\.[jt](s|sx)?$": "babel-jest",
      "^.+\\.(ts|tsx)?$": "ts-jest",
    },
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
