const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return params;
};

export default {
  requireModule: ['ts-node/register'],
  require: ['tests/**/*.steps.js'],
  format: [
    // 'message:e2e/reports/cucumber-report.ndjson',
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
    '@cucumber/pretty-formatter',
  ],

  formatOptions: {
    snippetInterface: 'async-await',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,

  },
  worldParameters: getWorldParams(),
  publishQuiet: true,
};
