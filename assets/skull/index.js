System.register("chunks:///_virtual/skull", [], function () {
  return {
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/skull', 'chunks:///_virtual/skull'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});