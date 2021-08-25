module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@types': './src/@types',
          '@core': './src/core',
          '@assets': './src/assets',
          '@modules': './src/modules',
          '@components': './src/modules/_shared/components',
          '@details': './src/modules/details',
          '@home': './src/modules/home',
        },
      },
    ],
  ],
};
