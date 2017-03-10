define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', 'i18next-xhr-backend'], function (exports, _environment, _i18nextXhrBackend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-i18n', function (instance) {
      window.i18n = instance;

      instance.i18next.use(_i18nextXhrBackend2.default);

      return instance.setup({
        backend: {
          loadPath: './locales/{{lng}}/{{ns}}.json' },
        lng: 'es',
        attributes: ['t', 'i18n', 'test'],
        fallbackLng: 'en',
        debug: true
      });
    }).feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['resources/elements/test']);
  }
});
define('resources/elements/test',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Test = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Test = exports.Test = (_dec = (0, _aureliaFramework.inject)(), _dec2 = (0, _aureliaFramework.customElement)('test'), _dec(_class = _dec2(_class = function Test() {
    _classCallCheck(this, Test);
  }) || _class) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>Home</h1><hr><test></test></template>"; });
define('text!resources/elements/test.html', ['module'], function(module) { module.exports = "<template><h2>Test Element</h2><span i18n=\"I18N_Test.i\">Hello</span><br><span t=\"T_Test.t\">Hello T</span></template>"; });
//# sourceMappingURL=app-bundle.js.map