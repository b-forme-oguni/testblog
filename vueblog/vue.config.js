module.exports = {

  outputDir: '../public/app',

  publicPath: '/app',

  // src
  pages: {

    src: {
      entry: 'src/main.js',
      template: 'templates/base.html',
      filename: '../../resources/views/spa/apli.blade.php',
    },
  },
};
