import type { Config } from "@jest/types";
import { defaults as tsjPreset } from "ts-jest/presets";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  collectCoverage: true,
  transform: {
    ...tsjPreset.transform,
    "/test/.*\\.spec\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  coverageReporters: ["lcov", "html"],
  testRegex: "/test/.*\\.spec\\.tsx?$",
  collectCoverageFrom: ["src/**/*"],
};

export default config;
