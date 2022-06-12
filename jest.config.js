module.exports = {
    roots: ["<rootDir>/src/main/typescript", "<rootDir>/src/test/typescript"],
    modulePaths: ["<rootDir>/src/main/typescript", "<rootDir>/node_modules"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    // https://devblogs.microsoft.com/typescript/announcing-typescript-2-7/#easier-ecmascript-module-interoperability
    esModuleInterop: true,
};
