const protractorUtils = require('@angular/bazel/protractor-utils');
const protractor = require('protractor');

module.exports = function(config) {
  const portFlag = config.server.endsWith('prodserver') ? '-p' : '-port';
  return protractorUtils.runServer(config.workspace, config.server, portFlag, [])
      .then(serverSpec => {
        const serverUrl = `http://localhost:${serverSpec.port}`;
        protractor.browser.baseUrl = serverUrl;
      });
};
