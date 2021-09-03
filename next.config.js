const path = require('path')

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

	if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
			sassOptions: {
				includePaths: [path.join(__dirname, 'styles')],
			},
			env: {
				apiUrl: 'http://localhost:3050'
			}
    }
  }

  return {
		reactStrictMode: true,
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		},
		env: {
			apiUrl: 'http://kylo-ren-3f10f1910b7ec0b1bd973da20db66b8f-0000.us-south.containers.appdomain.cloud'
		}
	}
}
