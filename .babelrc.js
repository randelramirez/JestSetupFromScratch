const isProd = String(process.env.NODE_ENV) === 'production'
// use to set if modules are to be compiled, we need to compile import/expport statement when running jest under nodejs
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
