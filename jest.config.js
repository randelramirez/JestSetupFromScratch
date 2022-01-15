// jest.config.js

const path = require('path')

// if we do not need browser apis/window object, we can use node as the environment
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // to access modules, to alias imports instead of using relative ex. import {foo} from '../../../foo'
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    // so that css modules ex. className={styles.yourCssClass}, the dom element will container <div class="yourCssClass"></div>
    '\\.module\\.css$': 'identity-obj-proxy',
    // to load css files
    '\\.css': require.resolve('./test/style-mock.js'),
  },
}
