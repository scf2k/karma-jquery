karma-jquery
============

A Karma plugin - adapter for jQuery framework.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-jquery --save-dev
```

Add `jquery` to the `plugins` property in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    plugins: ['karma-jquery']

   //...
```

---

Add `jquery` of the version you need to the `frameworks` property in your Karma configuration:
```js
module.exports = function(config) {
  config.set({

    frameworks: ['jquery-1.8.3']
    
    //...
```

Note: configure plugin under `karma-jquery` name, in the frameworks array speify as `jquery-<version>`. Current version of the package is bundled with following jQuery versions:
 * 1.6.4
 * 1.7.2
 * 1.8.2
 * 1.8.3
 * 1.9.0
 * 1.9.1
 * 1.10.0
 * 1.10.1
 * 1.10.2
 * 1.11.0
 * 1.11.1
 * 1.11.2
 * 1.11.3
 * 1.12.4
 * 2.0.0
 * 2.0.1
 * 2.0.2
 * 2.0.3
 * 2.1.0
 * 2.1.1
 * 2.1.2
 * 2.1.3
 * 2.1.4
 * 2.2.0
 * 2.2.1
 * 2.2.2
 * 2.2.3
 * 2.2.4
 * 3.0.0
 * 3.1.0
 * 3.1.1
 * 3.2.1
 * 3.3.1
 * 3.4.0
