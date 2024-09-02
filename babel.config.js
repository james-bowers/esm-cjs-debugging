module.exports = {
  babelrcRoots: ['./src', '../shared-ui/src', '../shared-logic/src', '../charts/src', '../services/src'],
  presets: [
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    '@babel/preset-typescript',
    '@babel/preset-env',
  ],
  plugins: [
    '@emotion/babel-plugin',
    [
      'module-resolver',
      {
        alias: {
          'shared-logic': '../shared-logic',
          'results-driver': '../results-driver',
          'shared-ui': '../shared-ui',
          services: '../services',
        },
      },
    ],
  ],
};
