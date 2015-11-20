Package.describe({
  summary: "A TinyMCE plugin for editing equations using Mathquill",
  version: "1.0.0",
  name: "huaming:tinymce-equation-editor",
  git: "http://github.com/foraker/tinymce_equation_editor.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use( 'templating' );

  api.addAssets( [
    'build/fonts/Symbola.eot',
    'build/fonts/Symbola.otf',
    'build/fonts/Symbola.svg',
    'build/fonts/Symbola.ttf',
    'build/fonts/Symbola.woff',
    'build/equation_editor.html',
    'build/js/plugin.min.js',
    'build/js/mathquill.min.js',
    'build/js/equation_editor.js',
    'build/equation_editor.css',
    'build/mathquill.css',
    'build/config.json'
  ], 'client' );

  api.addFiles( [
    'meteor/header.html',
    'meteor/setup.js'
  ], 'client' );
});

Package.onTest(function (api) {
  api.use('huaming:tinymce-equation-editor');
  api.use('tinytest');
  api.addFiles('meteor/test.js', 'client');
});
