module.exports = {
	testEnvironment: 'node',
	setupFilesAfterEnv: ['jest-extended'],
	coverageReporters: ['json-summary', 'html', 'text', 'lcov']
};
