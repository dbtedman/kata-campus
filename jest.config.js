module.exports = {
    roots: ["<rootDir>/src/main/typescript", "<rootDir>/src/test/typescript"],
    modulePaths: ["<rootDir>/src/main/typescript", "<rootDir>/node_modules"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
