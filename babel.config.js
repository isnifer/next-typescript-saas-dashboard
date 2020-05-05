module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['styled-components', { ssr: true }],
    '@babel/plugin-proposal-export-default-from',
  ],
}
