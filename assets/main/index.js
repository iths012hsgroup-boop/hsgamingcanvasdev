System.register("chunks:///_virtual/AutoPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServiceModal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BlockInputEvents, UIOpacity, tween, Component, ServiceModal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BlockInputEvents = module.BlockInputEvents;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ServiceModal = module.ServiceModal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "32c50Wa0eZAt50hptmxhBZA", "AutoPopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AutoPopup = exports('AutoPopup', (_dec = ccclass('AutoPopup'), _dec2 = property({
        tooltip: 'Jeda muncul setelah game load (detik)'
      }), _dec3 = property({
        tooltip: 'Kecepatan animasi muncul (detik)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoPopup, _Component);
        function AutoPopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "delayTimer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fadeDuration", _descriptor2, _assertThisInitialized(_this));
          _this._uiOpacity = null;
          _this._serviceModal = null;
          return _this;
        }
        var _proto = AutoPopup.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.getComponent(BlockInputEvents)) {
            this.addComponent(BlockInputEvents);
          }

          // Siapkan komponen transparasi untuk KOTAK PUTIH-nya (keseluruhan)
          this._uiOpacity = this.getComponent(UIOpacity);
          if (!this._uiOpacity) {
            this._uiOpacity = this.addComponent(UIOpacity);
          }
          this._serviceModal = this.getComponent(ServiceModal);

          // Jangan hapus active-nya, tapi jadikan transparan seutuhnya dulu
          this._uiOpacity.opacity = 0;
          if (this._serviceModal && this._serviceModal.bgOverlay) {
            var bgOp = this._serviceModal.bgOverlay.getComponent(UIOpacity);
            if (!bgOp) bgOp = this._serviceModal.bgOverlay.addComponent(UIOpacity);
            bgOp.opacity = 0; // Pastikan background gelap hilang dulu
          }
        };

        _proto.start = function start() {
          var _this2 = this;
          // Mainkan animasi memunculkan seluruh Modal setelah jeda
          if (this._uiOpacity) {
            tween(this._uiOpacity).delay(this.delayTimer).to(this.fadeDuration, {
              opacity: 255
            }, {
              easing: 'quadOut'
            }).start();
          }

          // Panggil fungsi showModal bawaan ServiceModal agar background gelapnya meredup (opacity = 180) sesuai porsinya
          if (this._serviceModal) {
            this.scheduleOnce(function () {
              _this2._serviceModal.showModal();
            }, this.delayTimer);
          }
        };
        return AutoPopup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "delayTimer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fadeDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoSlider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4e5f9eqe+FJprUOgFFmag2i", "AutoSlider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AutoSlider = exports('AutoSlider', (_dec = ccclass('AutoSlider'), _dec2 = property({
        type: ScrollView,
        tooltip: 'Masukkan node ScrollView di sini (opsional, jika ditaruh di node yang sama akan terdeteksi otomatis)'
      }), _dec3 = property({
        tooltip: 'Waktu tunggu sebelum geser ke gambar berikutnya (detik)'
      }), _dec4 = property({
        tooltip: 'Kecepatan animasi menggeser (detik)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoSlider, _Component);
        function AutoSlider() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interval", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollSpeed", _descriptor3, _assertThisInitialized(_this));
          _this._currentIndex = 0;
          _this._totalItems = 0;
          return _this;
        }
        var _proto = AutoSlider.prototype;
        _proto.start = function start() {
          // Coba ambil komponen ScrollView dari node ini jika belum dimasukkan di Inspector
          if (!this.scrollView) {
            this.scrollView = this.getComponent(ScrollView);
          }

          // Jika ScrollView ditemukan, hitung jumlah bannernya dan mulai timer
          if (this.scrollView && this.scrollView.content) {
            this._totalItems = this.scrollView.content.children.length;
            if (this._totalItems > 1) {
              // Memanggil fungsi scrollToNext setiap [interval] detik secara berulang
              this.schedule(this.scrollToNext, this.interval);
            }
          }
        };
        _proto.scrollToNext = function scrollToNext() {
          if (!this.scrollView || !this.scrollView.content || this._totalItems <= 1) return;

          // Tambah index ke gambar berikutnya
          this._currentIndex++;

          // Cek apakah sudah mentok di gambar paling ujung (misal banner ke-5)
          if (this._currentIndex >= this._totalItems) {
            this._currentIndex = 0; // Kembali ke gambar pertama
          }

          // Hitung persentase guliran dari 0.0 (Kiri Mentok) ke 1.0 (Kanan Mentok)
          var percent = this._currentIndex / (this._totalItems - 1);

          // Perintahkan ScrollView untuk menggulir ke persentase tersebut dengan efek mulus
          this.scrollView.scrollToPercentHorizontal(percent, this.scrollSpeed, true);
        };
        return AutoSlider;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/border.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, VideoPlayer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      VideoPlayer = module.VideoPlayer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "5fefdqffEZHU7jgv0lHgt4v", "border", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoundedBorder = exports('RoundedBorder', (_dec = ccclass('RoundedBorder'), _dec2 = property(Color), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoundedBorder, _Component);
        function RoundedBorder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "borderRadius", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "borderWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "borderColor", _descriptor3, _assertThisInitialized(_this));
          // Emas
          _this._applied = false;
          return _this;
        }
        var _proto = RoundedBorder.prototype;
        _proto.update = function update() {
          if (this._applied) return;
          var vp = this.getComponent(VideoPlayer);
          if (!vp) return;
          var impl = vp._impl;
          if (!impl) return;
          var domVideo = impl._video;
          if (!domVideo) return;
          // Convert Color ke hex string
          var r = this.borderColor.r.toString(16).padStart(2, '0');
          var g = this.borderColor.g.toString(16).padStart(2, '0');
          var b = this.borderColor.b.toString(16).padStart(2, '0');
          var hex = "#" + r + g + b;
          domVideo.style.border = this.borderWidth + "px solid " + hex;
          domVideo.style.borderRadius = this.borderRadius + "px";
          domVideo.style.boxSizing = 'border-box';
          this._applied = true;
        };
        return RoundedBorder;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "borderRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "borderWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "borderColor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 215, 0, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/border2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, VideoPlayer, Sprite, Node, UITransform, Mask, Graphics, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      VideoPlayer = module.VideoPlayer;
      Sprite = module.Sprite;
      Node = module.Node;
      UITransform = module.UITransform;
      Mask = module.Mask;
      Graphics = module.Graphics;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6792czIIw9LSYwO9zDuIbD6", "border", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoundedBorder = exports('RoundedBorder', (_dec = ccclass('RoundedBorder'), _dec2 = property({
        tooltip: "Radius lengkungan sudut"
      }), _dec3 = property({
        tooltip: "Ketebalan border emas"
      }), _dec4 = property(Color), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoundedBorder, _Component);
        function RoundedBorder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "borderRadius", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "borderWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "borderColor", _descriptor3, _assertThisInitialized(_this));
          // Emas
          _this._videoApplied = false;
          _this._lastWidth = 0;
          _this._lastHeight = 0;
          // Komponen Kloning Virtual untuk mengakali batasan Cocos
          _this._maskNode = null;
          _this._cloneNode = null;
          _this._borderNode = null;
          _this._origSprite = null;
          _this._cloneSprite = null;
          return _this;
        }
        var _proto = RoundedBorder.prototype;
        _proto.onLoad = function onLoad() {
          // 1. VIDEOPLAYER (Langsung tembus HTML)
          if (this.getComponent(VideoPlayer)) return;

          // 2. GAMBAR SPRITE / ANIMASI
          this._origSprite = this.getComponent(Sprite);
          if (!this._origSprite) return;

          // MATIKAN GAMBAR ASLI: Kita sembunyikan gambar aslinya (agar kotak tajamnya tidak terlihat dan tidak error bentrok dengan Graphics)
          this._origSprite.enabled = false;

          // BIKIN GUNTING VIRTUAL: Sebagai anak dari node ini
          this._maskNode = new Node("VirtualMask");
          this._maskNode.layer = this.node.layer;
          this.node.addChild(this._maskNode);
          this._maskNode.addComponent(UITransform);
          var mask = this._maskNode.addComponent(Mask);
          mask.type = Mask.Type.GRAPHICS_STENCIL;

          // BIKIN KLONING GAMBAR: Di dalam perut Gunting (supaya ikut terpotong)
          this._cloneNode = new Node("VirtualSprite");
          this._cloneNode.layer = this.node.layer;
          this._maskNode.addChild(this._cloneNode);
          this._cloneNode.addComponent(UITransform);
          this._cloneSprite = this._cloneNode.addComponent(Sprite);

          // BIKIN BORDER EMAS: Di luar gunting agar tintanya tebal sempurna
          this._borderNode = new Node("VirtualBorder");
          this._borderNode.layer = this.node.layer;
          this.node.addChild(this._borderNode);
          this._borderNode.addComponent(UITransform);
          this._borderNode.addComponent(Graphics);
        };
        _proto.update = function update() {
          // ========== BAGIAN VIDEOPLAYER ==========
          var vp = this.getComponent(VideoPlayer);
          if (vp) {
            if (this._videoApplied) return;
            var impl = vp._impl;
            if (impl && impl._video) {
              var domVideo = impl._video;
              var rStr = this.borderColor.r.toString(16);
              var gStr = this.borderColor.g.toString(16);
              var bStr = this.borderColor.b.toString(16);
              var r = ('00' + rStr).slice(-2);
              var _g = ('00' + gStr).slice(-2);
              var b = ('00' + bStr).slice(-2);
              var hex = "#" + r + _g + b;
              domVideo.style.border = this.borderWidth + "px solid " + hex;
              domVideo.style.borderRadius = this.borderRadius + "px";
              domVideo.style.boxSizing = 'border-box';
              this._videoApplied = true;
            }
            return;
          }

          // ========== BAGIAN SPRITE COCOS ==========
          if (!this._origSprite || !this._cloneSprite || !this._maskNode || !this._borderNode) return;

          // SELALU PASTIKAN ORIGINAL SPRITE INVISIBLE (karena Animasi Cocos kadang memaksanya menyala lagi)
          if (this._origSprite.enabled) this._origSprite.enabled = false;

          // SINKRONISASI KLONING: Copy semua gerak-gerik Animasi ke Kloning kita secara live (HANYA JIKA BERUBAH untuk hemat RAM/CPU)
          if (this._cloneSprite.spriteFrame !== this._origSprite.spriteFrame) {
            this._cloneSprite.spriteFrame = this._origSprite.spriteFrame;
          }
          if (!this._cloneSprite.color.equals(this._origSprite.color)) {
            this._cloneSprite.color = this._origSprite.color;
          }
          if (this._cloneSprite.type !== this._origSprite.type) {
            this._cloneSprite.type = this._origSprite.type;
          }
          if (this._cloneSprite.sizeMode !== this._origSprite.sizeMode) {
            this._cloneSprite.sizeMode = this._origSprite.sizeMode;
          }
          if (this._cloneSprite.trim !== this._origSprite.trim) {
            this._cloneSprite.trim = this._origSprite.trim;
          }
          if (this._cloneSprite.fillType !== this._origSprite.fillType) {
            this._cloneSprite.fillType = this._origSprite.fillType;
          }
          if (this._cloneSprite.fillRange !== this._origSprite.fillRange) {
            this._cloneSprite.fillRange = this._origSprite.fillRange;
          }
          if (this._cloneSprite.customMaterial !== this._origSprite.customMaterial) {
            this._cloneSprite.customMaterial = this._origSprite.customMaterial;
          }

          // UKURAN DAN ANCHOR
          var uiTrans = this.getComponent(UITransform);
          var w = uiTrans.width;
          var h = uiTrans.height;
          var ax = uiTrans.anchorX;
          var ay = uiTrans.anchorY;
          var x = -w * ax;
          var y = -h * ay;

          // Baterai Saver: CPU Optimization
          var cacheR = this._lastRad || -1;
          var cacheB = this._lastBW || -1;
          if (this._lastWidth === w && this._lastHeight === h && cacheR === this.borderRadius && cacheB === this.borderWidth) {
            return;
          }
          this._lastWidth = w;
          this._lastHeight = h;
          this._lastRad = this.borderRadius;
          this._lastBW = this.borderWidth;

          // Samakan ukuran ketiga Virtual Node mengikuti Node Asli (game1) HANYA jika berubah
          [this._maskNode, this._cloneNode, this._borderNode].forEach(function (n) {
            var t = n.getComponent(UITransform);
            t.setContentSize(w, h);
            t.setAnchorPoint(ax, ay);
          });

          // 1. NGENG... GUNTING MASK BEKERJA
          var mask = this._maskNode.getComponent(Mask);
          var mg = mask.graphics || this._maskNode.getComponent(Graphics);
          if (mg) {
            mg.clear();
            // POTONGAN KE DALAM: Menyusutkan gunting setengah dari ketebalan border agar sisi-sisi gambar 100% tertutup pigura emas
            var shrink = this.borderWidth / 2 + 0.6; // Tambah 0.6 pixel ekstra aman untuk menutup gerigi anti-aliasing
            var innerRadius = this.borderRadius - shrink;
            if (innerRadius < 0) innerRadius = 0;
            mg.roundRect(x + shrink, y + shrink, w - shrink * 2, h - shrink * 2, innerRadius);
            mg.fillColor = Color.WHITE;
            mg.fill();
          }

          // 2. NGENG... SPIDOL EMAS MENGGAMBAR (Di atas hasil potongan gambar)
          var g = this._borderNode.getComponent(Graphics);
          g.clear();
          g.lineWidth = this.borderWidth;
          g.strokeColor = this.borderColor;
          g.roundRect(x, y, w, h, this.borderRadius);
          g.stroke();
        };
        return RoundedBorder;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "borderRadius", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "borderWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "borderColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 215, 0, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BreathingLight.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a1343ajIB1JMIV20yd3hfEd", "BreathingLight", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BreathingLight = exports('BreathingLight', (_dec = ccclass('BreathingLight'), _dec2 = property({
        tooltip: "Nilai minimum opacity (0 - 255)"
      }), _dec3 = property({
        tooltip: "Nilai maksimum opacity (0 - 255)"
      }), _dec4 = property({
        tooltip: "Sebesar apa cahaya membesar maksimal (misal 1.1 = 110%)"
      }), _dec5 = property({
        tooltip: "Sebesar apa cahaya mengecil minimal (misal 0.9 = 90%)"
      }), _dec6 = property({
        tooltip: "Waktu dalam detik untuk satu kali transisi (Redup -> Terang)"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BreathingLight, _Component);
        function BreathingLight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "minOpacity", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxOpacity", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor5, _assertThisInitialized(_this));
          _this._uiOpacity = null;
          _this._animTween = null;
          _this._scaleTween = null;
          return _this;
        }
        var _proto = BreathingLight.prototype;
        _proto.onLoad = function onLoad() {
          this._uiOpacity = this.getComponent(UIOpacity);
          if (!this._uiOpacity) {
            this._uiOpacity = this.addComponent(UIOpacity);
          }
        };
        _proto.onEnable = function onEnable() {
          this.startBreathing();
        };
        _proto.onDisable = function onDisable() {
          if (this._animTween) {
            this._animTween.stop();
            this._animTween = null;
          }
          if (this._scaleTween) {
            this._scaleTween.stop();
            this._scaleTween = null;
          }
        };
        _proto.startBreathing = function startBreathing() {
          // Animasi Opacity (Kadang cc.Graphics mengabaikan ini, tapi bagus untuk Sprite)
          if (this._uiOpacity) {
            this._uiOpacity.opacity = this.minOpacity;
            this._animTween = tween(this._uiOpacity).to(this.duration, {
              opacity: this.maxOpacity
            }, {
              easing: 'sineInOut'
            }).to(this.duration, {
              opacity: this.minOpacity
            }, {
              easing: 'sineInOut'
            }).union().repeatForever().start();
          }

          // Animasi Skala / Ukuran membesar dan mengecil (GARANSI 100% PASTI GERAK untuk cc.Graphics)
          this.node.scale = new Vec3(this.minScale, this.minScale, 1);
          this._scaleTween = tween(this.node).to(this.duration, {
            scale: new Vec3(this.maxScale, this.maxScale, 1)
          }, {
            easing: 'sineInOut'
          }).to(this.duration, {
            scale: new Vec3(this.minScale, this.minScale, 1)
          }, {
            easing: 'sineInOut'
          }).union().repeatForever().start();
        };
        return BreathingLight;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minOpacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonHover.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;
      cclegacy._RF.push({}, "4c97966GSZOAo4xJhEMCfVU", "ButtonHover", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonHover = exports('ButtonHover', (_dec = ccclass('ButtonHover'), _dec2 = property({
        type: Node,
        tooltip: "Node yang memiliki background (Sprite)"
      }), _dec3 = property({
        type: Node,
        tooltip: "Node border yang akan di-show/hide"
      }), _dec4 = property(Color), _dec5 = property(Color), _dec6 = property(Color), _dec7 = property({
        tooltip: "Jika dicentang, tombol akan tetap aktif setelah diklik (Mode Tab)"
      }), _dec8 = property({
        tooltip: "Grup Tab (tombol lain di grup yang sama akan mati saat ini aktif)"
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonHover, _Component);
        function ButtonHover() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetBackground", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "borderNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalColor", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverColor", _descriptor4, _assertThisInitialized(_this));
          // Orange
          _initializerDefineProperty(_this, "activeColor", _descriptor5, _assertThisInitialized(_this));
          // Darker Orange (Selected)
          _initializerDefineProperty(_this, "isTab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "groupId", _descriptor7, _assertThisInitialized(_this));
          // Internal state
          _this._targetSprite = null;
          _this._isSelected = false;
          return _this;
        }
        var _proto = ButtonHover.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.targetBackground) {
            this.targetBackground = this.node;
          }
          this._targetSprite = this.targetBackground.getComponent(Sprite);

          // Register instance
          ButtonHover._instances.push(this);
          this.resetState();

          // Mouse events
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.node.on(Node.EventType.MOUSE_UP, this.onMouseUp, this);

          // Touch events
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDestroy = function onDestroy() {
          // Remove instance
          var index = ButtonHover._instances.indexOf(this);
          if (index > -1) {
            ButtonHover._instances.splice(index, 1);
          }
          this.node.off(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.off(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.node.off(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onMouseEnter = function onMouseEnter() {
          if (this._isSelected) return; // Jangan ubah jika sudah terpilih
          this.setHoverState();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (this._isSelected) return; // Jangan reset jika sudah terpilih
          this.resetState();
        };
        _proto.onMouseDown = function onMouseDown() {
          this.handlePress();
        };
        _proto.onMouseUp = function onMouseUp() {
          // Jika bukan mode tab, kembalikan ke hover saat dilepas
          if (!this.isTab && !this._isSelected) {
            this.setHoverState();
          }
        };
        _proto.onTouchStart = function onTouchStart() {
          this.handlePress();
        };
        _proto.onTouchEnd = function onTouchEnd() {
          // Jika bukan mode tab, kembalikan ke normal/hover
          if (!this.isTab && !this._isSelected) {
            this.resetState();
          }
        };
        _proto.onTouchCancel = function onTouchCancel() {
          if (!this.isTab && !this._isSelected) {
            this.resetState();
          }
        };
        _proto.handlePress = function handlePress() {
          if (this.isTab) {
            // Jika mode tab, set terpilih dan matikan yang lain satu grup
            this.setSelected(true);
          } else {
            // Mode biasa (hanya efek tekan sementara)
            this.setActiveState();
          }
        }

        // Public method untuk set status terpilih secara manual
        ;

        _proto.setSelected = function setSelected(selected) {
          var _this2 = this;
          if (selected && this.isTab) {
            // Matikan tombol lain di grup yang sama
            ButtonHover._instances.forEach(function (btn) {
              if (btn !== _this2 && btn.groupId === _this2.groupId && btn.isTab) {
                btn.setSelected(false);
              }
            });
          }
          this._isSelected = selected;
          if (selected) {
            this.setActiveState();
          } else {
            this.resetState();
          }
        };
        _proto.resetState = function resetState() {
          if (this._targetSprite) {
            this._targetSprite.color = this.normalColor;
          }
          if (this.borderNode) {
            this.borderNode.active = false;
          }
        };
        _proto.setHoverState = function setHoverState() {
          if (this._targetSprite) {
            this._targetSprite.color = this.hoverColor;
          }
          if (this.borderNode) {
            this.borderNode.active = true;
          }
        };
        _proto.setActiveState = function setActiveState() {
          if (this._targetSprite) {
            this._targetSprite.color = this.activeColor;
          }
          if (this.borderNode) {
            this.borderNode.active = true;
          }
        };
        return ButtonHover;
      }(Component), _class3._instances = [], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetBackground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "borderNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hoverColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 165, 0, 255);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "activeColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 140, 0, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isTab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupId", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "default";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckboxController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, log, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8036esX+F1Nrpxwh1mOIXDL", "CheckboxController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CheckboxController = exports('CheckboxController', (_dec = ccclass('CheckboxController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CheckboxController, _Component);
        function CheckboxController() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CheckboxController.prototype;
        // Fungsi ini yang akan dipanggil setiap kali kotak dicentang atau dihilangkan centangnya
        _proto.onCheckboxClicked = function onCheckboxClicked(toggle, customEventData) {
          // toggle.isChecked menyimpan status True (dicentang) atau False (kosong)
          if (toggle.isChecked) {
            log("Checkbox DICENTANG! -> " + customEventData);
            // Tambahkan logika ketika pemain setuju (misal: Jangan tampilkan pesan ini lagi)
          } else {
            log("Checkbox KOSONG! -> " + customEventData);
            // Tambahkan logika ketika pemain membantalkan persetujuan
          }
        };

        return CheckboxController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DraggableButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, UITransform, Node, director, Camera, find, sys, Sprite, log, gfx, game, view, Vec3, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Node = module.Node;
      director = module.director;
      Camera = module.Camera;
      find = module.find;
      sys = module.sys;
      Sprite = module.Sprite;
      log = module.log;
      gfx = module.gfx;
      game = module.game;
      view = module.view;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f1f45o5FtBLbrPpgysx1agF", "DraggableButton", undefined);
      var ccclass = _decorator.ccclass;
      var DraggableButton = exports('DraggableButton', (_dec = ccclass('DraggableButton'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DraggableButton, _Component);
        function DraggableButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._startPos = new Vec3();
          _this._isDragging = false;
          _this._parentTransform = null;
          _this._dom = null;
          _this._domDragging = false;
          _this._domStartX = 0;
          _this._domStartY = 0;
          _this._nodeStartX = 0;
          _this._nodeStartY = 0;
          _this._camera = null;
          _this._isPressed = false;
          _this._modalManager = null;
          return _this;
        }
        var _proto = DraggableButton.prototype;
        _proto.onLoad = function onLoad() {
          var _this$node$parent;
          this._parentTransform = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(UITransform);
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.start = function start() {
          var _this2 = this;
          var cameras = director.getScene().getComponentsInChildren(Camera);
          for (var _iterator = _createForOfIteratorHelperLoose(cameras), _step; !(_step = _iterator()).done;) {
            var cam = _step.value;
            if (cam.visibility & this.node.layer) {
              this._camera = cam;
              break;
            }
          }
          if (!this._camera && cameras.length > 0) this._camera = cameras[0];

          // Cari ModalManager
          var modalNode = find('Canvas/ModalManager');
          if (modalNode) {
            this._modalManager = modalNode.getComponent('ModalManager');
          }
          if (sys.isBrowser) {
            // Sembunyikan sprite asli langsung (jangan tunggu overlay)
            var selfSprite = this.getComponent(Sprite);
            if (selfSprite) selfSprite.enabled = false;
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.node.children), _step2; !(_step2 = _iterator2()).done;) {
              var child = _step2.value;
              var cs = child.getComponent(Sprite);
              if (cs) cs.enabled = false;
            }
            // Buat overlay setelah GPU texture siap (1 frame cukup)
            this.scheduleOnce(function () {
              return _this2._createDom();
            }, 0.1);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._dom) {
            this._dom.remove();
            this._dom = null;
          }
        }

        /** Baca pixel dari GPU texture dan convert jadi data URL */;
        _proto._extractImageFromGPU = function _extractImageFromGPU() {
          // Cari sprite di children atau self
          var nodes = [].concat(this.node.children, [this.node]);
          for (var _iterator3 = _createForOfIteratorHelperLoose(nodes), _step3; !(_step3 = _iterator3()).done;) {
            var n = _step3.value;
            var sprite = n.getComponent(Sprite);
            if (!(sprite != null && sprite.spriteFrame)) continue;
            try {
              var sf = sprite.spriteFrame;
              var tex = sf.texture;
              var gfxTex = tex.getGFXTexture();
              if (!gfxTex) {
                log('[DraggableButton] gfxTexture null, skip');
                continue;
              }
              var device = director.root.device;
              var texW = tex.width;
              var texH = tex.height;
              log("[DraggableButton] Reading GPU texture: " + texW + "x" + texH + " from node \"" + n.name + "\"");

              // Baca pixel dari GPU
              var region = new gfx.BufferTextureCopy();
              region.texOffset.x = 0;
              region.texOffset.y = 0;
              region.texExtent.width = texW;
              region.texExtent.height = texH;
              region.texExtent.depth = 1;
              var bufferSize = texW * texH * 4;
              var pixels = new Uint8Array(bufferSize);
              device.copyTextureToBuffers(gfxTex, [pixels], [region]);

              // Crop ke area SpriteFrame (jika atlas)
              var rect = sf.rect;
              var cropX = Math.round(rect.x);
              var cropY = Math.round(rect.y);
              var cropW = Math.round(rect.width);
              var cropH = Math.round(rect.height);
              if (cropW <= 0 || cropH <= 0) {
                cropX = 0;
                cropY = 0;
                cropW = texW;
                cropH = texH;
              }
              log("[DraggableButton] Crop region: " + cropX + "," + cropY + " " + cropW + "x" + cropH);

              // Gambar ke canvas temporary
              var tmpCanvas = document.createElement('canvas');
              tmpCanvas.width = cropW;
              tmpCanvas.height = cropH;
              var ctx = tmpCanvas.getContext('2d');
              var imgData = ctx.createImageData(cropW, cropH);

              // Copy pixel data (crop dari atlas)
              for (var y = 0; y < cropH; y++) {
                for (var x = 0; x < cropW; x++) {
                  var srcIdx = ((cropY + y) * texW + (cropX + x)) * 4;
                  var dstIdx = (y * cropW + x) * 4;
                  imgData.data[dstIdx] = pixels[srcIdx]; // R
                  imgData.data[dstIdx + 1] = pixels[srcIdx + 1]; // G
                  imgData.data[dstIdx + 2] = pixels[srcIdx + 2]; // B
                  imgData.data[dstIdx + 3] = pixels[srcIdx + 3]; // A
                }
              }

              ctx.putImageData(imgData, 0, 0);
              var dataUrl = tmpCanvas.toDataURL('image/png');
              log("[DraggableButton] \u2705 Data URL berhasil dibuat! length=" + dataUrl.length);
              return dataUrl;
            } catch (e) {
              log('[DraggableButton] GPU read error:', e);
            }
          }
          return null;
        };
        _proto._createDom = function _createDom() {
          var _game$canvas,
            _this3 = this;
          var container = game.container;
          if (!container) container = ((_game$canvas = game.canvas) == null ? void 0 : _game$canvas.parentElement) || document.body;
          this._dom = document.createElement('div');
          this._dom.id = 'draggable-btn-overlay';
          this._dom.style.position = 'absolute';
          this._dom.style.cursor = 'grab';
          this._dom.style.touchAction = 'none';
          this._dom.style.userSelect = 'none';
          this._dom.style.setProperty('z-index', '99999', 'important');
          // Efek scale saat klik (sama seperti cc.Button SCALE transition)
          this._dom.style.transition = 'transform 0.1s ease';

          // Coba ambil gambar dari GPU
          var dataUrl = this._extractImageFromGPU();
          if (dataUrl) {
            this._dom.style.backgroundImage = "url(\"" + dataUrl + "\")";
            this._dom.style.backgroundSize = 'contain';
            this._dom.style.backgroundRepeat = 'no-repeat';
            this._dom.style.backgroundPosition = 'center';
          } else {
            this._dom.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
            this._dom.style.borderRadius = '12px';
            this._dom.innerHTML = '<span style="color:white;font-size:20px;display:flex;align-items:center;justify-content:center;height:100%;font-weight:bold;">⬇</span>';
          }
          container.appendChild(this._dom);

          // POINTER EVENTS
          this._dom.addEventListener('pointerdown', function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this3._dom.setPointerCapture(e.pointerId);
            _this3._domDragging = false;
            _this3._domStartX = e.clientX;
            _this3._domStartY = e.clientY;
            _this3._nodeStartX = _this3.node.position.x;
            _this3._nodeStartY = _this3.node.position.y;
            _this3._isPressed = true;
          });
          this._dom.addEventListener('pointermove', function (e) {
            if (!_this3._dom.hasPointerCapture(e.pointerId)) return;
            var dx = e.clientX - _this3._domStartX,
              dy = e.clientY - _this3._domStartY;
            if (!_this3._domDragging && Math.sqrt(dx * dx + dy * dy) > 10) _this3._domDragging = true;
            if (!_this3._domDragging) return;
            var cr = game.canvas.getBoundingClientRect(),
              vs = view.getVisibleSize();
            var nX = _this3._nodeStartX + dx * (vs.width / cr.width);
            var nY = _this3._nodeStartY - dy * (vs.height / cr.height);
            if (_this3._parentTransform) {
              var pW = _this3._parentTransform.width,
                pH = _this3._parentTransform.height;
              nX = Math.max(-pW / 2 + 50, Math.min(pW / 2 - 50, nX));
              nY = Math.max(-pH / 2 + 50, Math.min(pH / 2 - 50, nY));
            }
            _this3.node.setPosition(nX, nY, 0);
          });
          this._dom.addEventListener('pointerup', function (e) {
            _this3._dom.releasePointerCapture(e.pointerId);
            _this3._isPressed = false;
            if (!_this3._domDragging) {
              if (_this3._modalManager) {
                _this3._modalManager.showModal();
              }
            }
            _this3._domDragging = false;
          });
          this._syncDomPosition();
        };
        _proto._syncDomPosition = function _syncDomPosition() {
          if (!this._dom || !game.canvas || !this._camera) return;
          var cr = game.canvas.getBoundingClientRect();
          var cW = game.canvas.width,
            cH = game.canvas.height;
          var sp = new Vec3();
          this._camera.worldToScreen(this.node.worldPosition, sp);
          var cssX = cr.left + sp.x / cW * cr.width;
          var cssY = cr.top + (cH - sp.y) / cH * cr.height;
          var pr = this._dom.parentElement.getBoundingClientRect();
          var sr = cr.width / view.getVisibleSize().width;
          var t = this.getComponent(UITransform);
          var w = t.contentSize.width * this.node.scale.x * sr;
          var h = t.contentSize.height * this.node.scale.y * sr;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.node.children), _step4; !(_step4 = _iterator4()).done;) {
            var c = _step4.value;
            var ct = c.getComponent(UITransform);
            if (ct) {
              w = Math.max(w, ct.contentSize.width * c.scale.x * sr);
              h = Math.max(h, ct.contentSize.height * c.scale.y * sr);
            }
          }
          this._dom.style.width = Math.max(w, 40) + "px";
          this._dom.style.height = Math.max(h, 40) + "px";
          this._dom.style.left = cssX - pr.left + "px";
          this._dom.style.top = cssY - pr.top + "px";
          var scale = this._isPressed ? 'scale(0.9)' : 'scale(1)';
          this._dom.style.transform = "translate(-50%,-50%) " + scale;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (!this._dom) return;
          this._dom.style.setProperty('z-index', '99999', 'important');
          this._syncDomPosition();
        };
        _proto.onTouchStart = function onTouchStart(e) {
          this._isDragging = false;
          this._startPos.set(this.node.position);
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (!this._isDragging) {
            var s = e.getUIStartLocation(),
              c = e.getUILocation();
            if (Math.sqrt(Math.pow(c.x - s.x, 2) + Math.pow(c.y - s.y, 2)) > 10) this._isDragging = true;
          }
          if (!this._isDragging) return;
          var d = e.getUIDelta(),
            p = this.node.position,
            nX = p.x + d.x,
            nY = p.y + d.y;
          if (this._parentTransform) {
            var pW = this._parentTransform.width,
              pH = this._parentTransform.height;
            nX = Math.max(-pW / 2 + 50, Math.min(pW / 2 - 50, nX));
            nY = Math.max(-pH / 2 + 50, Math.min(pH / 2 - 50, nY));
          }
          this.node.setPosition(nX, nY, 0);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          this._isDragging = false;
        };
        return DraggableButton;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dropdown-search.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "747a8iMnE9IL7cHJJlbatuD", "dropdown-search", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropdownToggle = exports('DropdownToggle', (_dec = ccclass('DropdownToggle'), _dec2 = property({
        type: Node,
        tooltip: "Node 'bg-border-jenispermainan' yang berisi daftar tombol"
      }), _dec3 = property({
        type: Node,
        tooltip: "Opsional: Node icon panah/chevron yang akan berputar"
      }), _dec4 = property({
        tooltip: "Jika dicentang, menu akan langsung sembunyi saat game mulai"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropdownToggle, _Component);
        function DropdownToggle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetMenu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrowIcon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startHidden", _descriptor3, _assertThisInitialized(_this));
          _this._isOpen = false;
          return _this;
        }
        var _proto = DropdownToggle.prototype;
        _proto.start = function start() {
          // 1. Inisialisasi kondisi awal
          if (this.targetMenu) {
            this._isOpen = !this.startHidden;
            this.targetMenu.active = this._isOpen;
          }

          // 2. Setup rotasi awal panah jika menu tertutup
          if (this.arrowIcon && this.startHidden) {
            this.arrowIcon.setRotationFromEuler(0, 0, 0);
          }

          // 3. Daftarkan event klik secara otomatis
          var btn = this.getComponent(Button);
          if (btn) {
            this.node.on(Button.EventType.CLICK, this.onToggleMenu, this);
          } else {
            // Backup jika tidak ada komponen Button, gunakan touch
            this.node.on(Node.EventType.TOUCH_END, this.onToggleMenu, this);
          }
        };
        _proto.onToggleMenu = function onToggleMenu() {
          if (!this.targetMenu) {
            console.warn("DropdownToggle: Target Menu belum dipasang di Inspector!");
            return;
          }

          // Toggle status
          this._isOpen = !this._isOpen;

          // Munculkan atau sembunyikan menu
          this.targetMenu.active = this._isOpen;

          // Animasi rotasi panah (jika ada)
          if (this.arrowIcon) {
            // Putar 180 derajat jika buka, 0 jika tutup
            var targetRotationZ = this._isOpen ? 180 : 0;
            tween(this.arrowIcon).to(0.15, {
              eulerAngles: new Vec3(0, 0, targetRotationZ)
            }).start();
          }
        };
        return DropdownToggle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startHidden", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropdownToggle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "31707gQTcRDgri9p/6uSQr3", "DropdownToggle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropdownToggle = exports('DropdownToggle', (_dec = ccclass('DropdownToggle'), _dec2 = property({
        type: Node,
        tooltip: "Node kotak/menu yang ingin dimunculkan atau disembunyikan"
      }), _dec3 = property({
        tooltip: "Apakah menu (kotak) awalnya harus disembunyikan saat game mulai?"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropdownToggle, _Component);
        function DropdownToggle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "targetMenu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startHidden", _descriptor2, _assertThisInitialized(_this));
          // Untuk melacak apakah dropdown sedang terbuka atau tertutup
          _this._isOpen = false;
          return _this;
        }
        var _proto = DropdownToggle.prototype;
        _proto.start = function start() {
          // 1. Atur kondisi awal saat game dimulai
          if (this.targetMenu) {
            if (this.startHidden) {
              this.targetMenu.active = false;
              this._isOpen = false;
            } else {
              this._isOpen = this.targetMenu.active;
            }
          }

          // 2. Pasang pendengar (listener) klik pada tombol/node ini
          var btn = this.getComponent(Button);
          if (btn) {
            // Jika ada komponen cc.Button (seperti di chevron Anda)
            this.node.on(Button.EventType.CLICK, this.onToggleMenu, this);
          } else {
            // Jika tidak ada cc.Button, tetap bisa diklik pakai Touch
            this.node.on(Node.EventType.TOUCH_END, this.onToggleMenu, this);
          }
        };
        _proto.onToggleMenu = function onToggleMenu() {
          if (!this.targetMenu) {
            console.warn("Target Menu belum dimasukkan di Inspector!");
            return;
          }

          // Ubah status (kalau sedang buka jadi tutup, kalau tutup jadi buka)
          this._isOpen = !this._isOpen;

          // Munculkan / sembunyikan kotak
          this.targetMenu.active = this._isOpen;

          // (Opsional) Bikin panah chevron terbalik ke atas saat menu terbuka
          var targetRotationZ = this._isOpen ? 180 : 0;
          tween(this.node).to(0.15, {
            eulerAngles: new Vec3(0, 0, targetRotationZ)
          }).start();
        };
        return DropdownToggle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startHidden", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameCategoryMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "26d0bP9+0VBRL0NvTQ8LUTu", "GameCategoryMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameCategoryMenu = exports('GameCategoryMenu', (_dec = ccclass('GameCategoryMenu'), _dec2 = property({
        type: Node,
        tooltip: "Masukkan node 'gamelay' ke sini"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameCategoryMenu, _Component);
        function GameCategoryMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // Ini akan memunculkan kolom di inspector untuk memasukkan node 'gamelay'
          _initializerDefineProperty(_this, "gamelay", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameCategoryMenu.prototype;
        // --- FUNGSI BANTUAN UTAMA ---
        // Fungsi untuk menyembunyikan semua game terlebih dahulu (active = false)
        _proto.hideAllGames = function hideAllGames() {
          if (this.gamelay) {
            // Membaca semua anak dari node gamelay (game1, game2, dst)
            var allGames = this.gamelay.children;
            for (var i = 0; i < allGames.length; i++) {
              allGames[i].active = false;
            }
          }
        }

        // Fungsi untuk menampilkan daftar game berdasarkan urutan angkanya
        ;

        _proto.showGamesByNumbers = function showGamesByNumbers(kemunculan) {
          this.hideAllGames(); // Wajib sembunyikan semua dulu

          if (this.gamelay) {
            var allGames = this.gamelay.children;

            // Loop dan aktifkan (active = true) hanya pada game yang diinginkan
            for (var _iterator = _createForOfIteratorHelperLoose(kemunculan), _step; !(_step = _iterator()).done;) {
              var num = _step.value;
              var index = num - 1; // Karena urutan array/anak dimulai dari 0 (game1 = urutan ke 0)
              if (allGames[index]) {
                allGames[index].active = true;
              }
            }
          }
        }

        // --- FUNGSI UNTUK MASING-MASING TOMBOL ---
        ;

        _proto.klikPopuler = function klikPopuler() {
          console.log("Menampilkan Populer");
          // Sesuai permintaan Anda: Tampilkan game 1, 3, 5, 6
          this.showGamesByNumbers([1, 3, 5, 6]);
        };
        _proto.klikNew = function klikNew() {
          // Contoh: Tampilkan game 2, 4, 7 (Silakan ubah angkanya sesuai selera Anda)
          this.showGamesByNumbers([2, 4, 7]);
        };
        _proto.klikFavorite = function klikFavorite() {
          // Contoh: Tampilkan game 1, 2, 7
          this.showGamesByNumbers([1, 2, 7]);
        };
        _proto.klikKasino = function klikKasino() {
          // Contoh: Tampilkan game 3, 4
          this.showGamesByNumbers([3, 4]);
        };
        _proto.klikSlots = function klikSlots() {
          // Contoh: Tampilkan game 5, 6, 7
          this.showGamesByNumbers([5, 6, 7]);
        };
        _proto.klikDomino = function klikDomino() {
          // Contoh: Tampilkan game 1, 7
          this.showGamesByNumbers([1, 7]);
        }

        // Jaga-jaga jika tombol SEARCH/ALL ingin menampilkan semua game lagi
        ;

        _proto.tampilkanSemua = function tampilkanSemua() {
          if (this.gamelay) {
            for (var i = 0; i < this.gamelay.children.length; i++) {
              this.gamelay.children[i].active = true;
            }
          }
        };
        return GameCategoryMenu;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "gamelay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, log, sys, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      log = module.log;
      sys = module.sys;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "58caaH94CZJsZ/+v4u7dGSH", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec2 = property({
        type: Node,
        tooltip: 'Masukkan node modalevent di sini agar bisa dipanggil otomatis'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);
        function GameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventModal", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameManager.prototype;
        _proto.start = function start() {
          // Jika ada modalevent yang dimasukkan, nyalakan otomatis saat game pertama kali load
          if (this.eventModal) {
            this.eventModal.active = true;
          }
        }

        // Fungsi ini yang akan dipanggil saat tombol download diklik
        ;

        _proto.onDownloadClicked = function onDownloadClicked() {
          log("Hore! Tombol Download diklik!");
          // Contoh membuka URL download
          sys.openURL("https://play.google.com/store/apps/details?id=com.example.game");
        };
        return GameManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventModal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlowGenerator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Graphics, UITransform, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a9dc1HCEXBIdo9q7YCvR81V", "GlowGenerator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GlowGenerator = exports('GlowGenerator', (_dec = ccclass('GlowGenerator'), _dec2 = property(Color), _dec3 = property({
        tooltip: "Jari-jari total pancaran cahaya (pixel)"
      }), _dec4 = property({
        tooltip: "Banyaknya jumlah sinar runcing yang memancar (isi 0 jika hanya ingin bulat redup)"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlowGenerator, _Component);
        function GlowGenerator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "glowColor", _descriptor, _assertThisInitialized(_this));
          // Warna Kuning Emas/Orange terang
          _initializerDefineProperty(_this, "radius", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rays", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GlowGenerator.prototype;
        _proto.start = function start() {
          this.generateGlow();
        };
        _proto.generateGlow = function generateGlow() {
          // Otomatis mencari atau membuat komponen cc.Graphics untuk menggambar
          var g = this.getComponent(Graphics);
          if (!g) {
            g = this.addComponent(Graphics);
          }

          // Paskan ukuran area node agar efek cahaya tidak terpotong
          var uiTrans = this.getComponent(UITransform);
          if (uiTrans) {
            uiTrans.setContentSize(this.radius * 2, this.radius * 2);
          }
          g.clear();

          // 1. MENGGAMBAR EFEK PENDARAN TENGAH (Makin ke tengah makin terang)
          var segments = 30; // Kerapatan gradien lingkaran pinggiran
          for (var i = segments; i > 0; i--) {
            var r = i / segments * (this.radius * 0.55); // Ukuran pendaran tengah
            var alphaRatio = 1 - i / segments;
            var alpha = Math.floor(Math.pow(alphaRatio, 1.5) * 255); // Curve supaya memudar halus

            g.fillColor = new Color(this.glowColor.r, this.glowColor.g, this.glowColor.b, alpha);
            g.circle(0, 0, r);
            g.fill();
          }

          // 2. MENGGAMBAR SINAR BINTANG (Rays)
          if (this.rays > 0) {
            var angleStep = Math.PI * 2 / this.rays;
            for (var _i = 0; _i < this.rays; _i++) {
              var angle = _i * angleStep;

              // Variasi panjang sinar agar tidak rata (selang-seling panjang pendek)
              var length = _i % 2 === 0 ? this.radius : this.radius * 0.65;
              var x = Math.cos(angle) * length;
              var y = Math.sin(angle) * length;

              // Opacity sinar luar lebih tipis
              g.fillColor = new Color(this.glowColor.r, this.glowColor.g, this.glowColor.b, 60);

              // Gambar sinar berbentuk jarum panjang
              var thickness = 0.08; // Ketebalan pangkal sinar
              var innerRadius = this.radius * 0.15; // Pangkal dari mana sinar dimulai

              var p1x = Math.cos(angle - thickness) * innerRadius;
              var p1y = Math.sin(angle - thickness) * innerRadius;
              var p2x = Math.cos(angle + thickness) * innerRadius;
              var p2y = Math.sin(angle + thickness) * innerRadius;
              g.moveTo(p1x, p1y);
              g.lineTo(x, y); // Ujung sinar runcing
              g.lineTo(p2x, p2y);
              g.close();
              g.fill();
            }
          }
        };
        return GlowGenerator;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "glowColor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 200, 50, 255);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 250;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rays", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 18;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JiggleAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "d7bb48cP7tJtaAh3oUZHHJG", "JiggleAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JiggleAnimation = exports('JiggleAnimation', (_dec = ccclass('JiggleAnimation'), _dec2 = property({
        tooltip: "Jeda waktu tunggu antar goyangan dalam satuan detik"
      }), _dec3 = property({
        tooltip: "Seberapa miring sudut goyangan kiri/kanan (derajat)"
      }), _dec4 = property({
        tooltip: "Seberapa besar efek nge-per / scale naik saat goyang (misal 1.1 = Naik 10%)"
      }), _dec5 = property({
        tooltip: "Kecepatan 1 kali putaran goyang (makin kecil makin cepat)"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JiggleAnimation, _Component);
        function JiggleAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "interval", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotationAngle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor4, _assertThisInitialized(_this));
          _this._jiggleTween = null;
          _this._originalScale = new Vec3(1, 1, 1);
          _this._originalRotation = new Vec3(0, 0, 0);
          return _this;
        }
        var _proto = JiggleAnimation.prototype;
        _proto.onLoad = function onLoad() {
          // Simpan posisi, ukuran, dan rotasi asli agar bisa dikembalikan dengan sempurna
          this._originalScale = this.node.scale.clone();
          this._originalRotation = this.node.eulerAngles.clone();
        };
        _proto.onEnable = function onEnable() {
          this.startJiggleTimer();
        };
        _proto.onDisable = function onDisable() {
          if (this._jiggleTween) {
            this._jiggleTween.stop();
            this._jiggleTween = null;
          }

          // Kembalikan ke keadaan semula saat dimatikan
          this.node.scale = this._originalScale;
          this.node.eulerAngles = this._originalRotation;
        };
        _proto.startJiggleTimer = function startJiggleTimer() {
          // Hentikan tween yang sudah ada jika ada (mencegah tumpang tindih)
          if (this._jiggleTween) {
            this._jiggleTween.stop();
          }

          // Tween yang menunggu beberapa detik, goyang cepat, lalu diulang selamanya
          this._jiggleTween = tween(this.node)
          // Tunggu selama [interval] detik (Misal: 5 detik dari user)
          .delay(this.interval)

          // Effect Jiggle (Bergoyang & Sedikit Membesar) - Menggunakan Rotasi Z dan Scale
          .parallel(
          // Goyangan Kiri Kanan (Rotasi)
          tween(this.node).to(this.speed, {
            eulerAngles: new Vec3(0, 0, this.rotationAngle)
          }, {
            easing: 'sineOut'
          }).to(this.speed * 2, {
            eulerAngles: new Vec3(0, 0, -this.rotationAngle)
          }, {
            easing: 'sineInOut'
          }).to(this.speed * 1.5, {
            eulerAngles: new Vec3(0, 0, this.rotationAngle * 0.5)
          }, {
            easing: 'sineInOut'
          }).to(this.speed * 1.2, {
            eulerAngles: new Vec3(0, 0, -this.rotationAngle * 0.25)
          }, {
            easing: 'sineInOut'
          }).to(this.speed, {
            eulerAngles: this._originalRotation
          }, {
            easing: 'sineIn'
          }),
          // Efek Membal/Membesar (Scale)
          tween(this.node).to(this.speed * 2, {
            scale: new Vec3(this._originalScale.x * this.popScale, this._originalScale.y * this.popScale, 1)
          }, {
            easing: 'cubicOut'
          }).to(this.speed * 3, {
            scale: this._originalScale
          }, {
            easing: 'cubicIn'
          }))
          // Simpulkan jadi satu sequence abadi
          .union().repeatForever().start();
        };
        return JiggleAnimation;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5.0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotationAngle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.05;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.08;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameCategoryMenu.ts', './ProviderSearch.ts', './SceneChanger.ts', './AutoPopup.ts', './AutoSlider.ts', './BreathingLight.ts', './ButtonHover.ts', './CheckboxController.ts', './DraggableButton.ts', './DropdownToggle.ts', './GameManager.ts', './GlowGenerator.ts', './JiggleAnimation.ts', './MaskProbe.ts', './ModalManager.ts', './ServiceModal.ts', './VideoClipper2.ts', './border2.ts', './TouchPropagator.ts', './border.ts', './dropdown-search.ts', './videoclipper.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MaskProbe.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Mask, log, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Mask = module.Mask;
      log = module.log;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "47bf8rT0ftInqIFKuregXM5", "MaskProbe", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MaskProbe = exports('MaskProbe', (_dec = ccclass('MaskProbe'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MaskProbe, _Component);
        function MaskProbe() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = MaskProbe.prototype;
        _proto.start = function start() {
          var mask = this.getComponent(Mask);
          if (mask) {
            log("MASK KEYS: ", Object.keys(mask).join(', '));
            log("MASK PROTO: ", Object.keys(Object.getPrototypeOf(mask)).join(', '));
            if (mask.graphics) {
              log("HAS GRAPHICS: true");
            } else {
              log("HAS GRAPHICS: false");
            }
          }
        };
        return MaskProbe;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModalManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2a176nGyi1N6qbaqSAsaT3l", "ModalManager", undefined);
      var ccclass = _decorator.ccclass;
      var ModalManager = exports('ModalManager', (_dec = ccclass('ModalManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModalManager, _Component);
        function ModalManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._modal = null;
          return _this;
        }
        var _proto = ModalManager.prototype;
        _proto.start = function start() {};
        _proto.showModal = function showModal() {
          var _this2 = this;
          if (this._modal) return;
          this._modal = document.createElement('div');
          this._modal.style.cssText = "\n            position: fixed;\n            top: 0; left: 0;\n            width: 100%; height: 100%;\n            background: rgba(0,0,0,0.7);\n            z-index: 999999;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        ";
          this._modal.innerHTML = "\n            <div style=\"background:white; padding:30px; border-radius:12px; min-width:300px;\">\n                <h2>Judul Modal</h2>\n                <p>Ini isi modal saya!</p>\n                <button id=\"close-modal\">Tutup</button>\n            </div>\n        ";
          document.body.appendChild(this._modal);
          document.getElementById('close-modal').addEventListener('click', function () {
            return _this2.hideModal();
          });
        };
        _proto.hideModal = function hideModal() {
          if (!this._modal) return;
          this._modal.remove();
          this._modal = null;
        };
        return ModalManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProviderSearch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      EditBox = module.EditBox;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bec57pwypBIy44+UVYbbxRz", "ProviderSearch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProviderSearch = exports('ProviderSearch', (_dec = ccclass('ProviderSearch'), _dec2 = property(Node), _dec3 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProviderSearch, _Component);
        function ProviderSearch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentNode", _descriptor, _assertThisInitialized(_this));
          // Node 'content' yang berisi daftar provider
          _initializerDefineProperty(_this, "searchEditBox", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ProviderSearch.prototype;
        // Komponen EditBox tempat mengetik
        _proto.start = function start() {
          if (this.searchEditBox) {
            // Daftarkan event saat teks berubah
            this.searchEditBox.node.on('text-changed', this.onSearchChanged, this);
          }
        };
        _proto.onSearchChanged = function onSearchChanged(editBox) {
          var searchText = editBox.string.toLowerCase().trim();
          var providers = this.contentNode.children;
          providers.forEach(function (providerNode) {
            // Ambil nama provider dari nama Node atau isi Label di dalamnya
            // Di sini kita coba ambil dari nama Node (misal: 'pragmatic-play')
            var providerName = providerNode.name.toLowerCase();

            // Atau jika ingin lebih akurat, ambil dari teks Label di dalamnya:
            var labelComp = providerNode.getComponentInChildren(Label);
            var labelText = labelComp ? labelComp.string.toLowerCase() : "";

            // Jika teks pencarian kosong, tampilkan semua
            if (searchText === "") {
              providerNode.active = true;
            } else {
              // Cek apakah kata kunci ada di nama node atau teks label
              if (providerName.includes(searchText) || labelText.includes(searchText)) {
                providerNode.active = true;
              } else {
                providerNode.active = false;
              }
            }
          });

          // Paksa Layout untuk refresh posisi (agar tidak ada gap/kosong di tengah)
          // Ini otomatis jika Anda menggunakan komponen Layout pada 'content'
        };

        return ProviderSearch;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "searchEditBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneChanger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80c91ww8zxCALe/4PH7NLVi", "SceneChanger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneChanger = exports('SceneChanger', (_dec = ccclass('SceneChanger'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneChanger, _Component);
        function SceneChanger() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SceneChanger.prototype;
        // Fungsi ini yang akan dipanggil oleh Tombol
        _proto.pindahKeScene = function pindahKeScene(event, namaSceneTujuan) {
          // Menyuruh Cocos membuka nama scene yang diketikkan di editor
          director.loadScene(namaSceneTujuan);
        };
        return SceneChanger;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServiceModal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoPopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BlockInputEvents, UIOpacity, tween, Component, AutoPopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      BlockInputEvents = module.BlockInputEvents;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      AutoPopup = module.AutoPopup;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8d043jxDEBGAo9T6ODArgaM", "ServiceModal", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ServiceModal = exports('ServiceModal', (_dec = ccclass('ServiceModal'), _dec2 = property({
        type: Node,
        tooltip: 'Node latar belakang hitam transparan (opsional)'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Pilih Modal berikutnya yang ingin dimunculkan otomatis setelah modal ini ditutup (Dikosongkan jika tidak ada)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ServiceModal, _Component);
        function ServiceModal() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgOverlay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextModalToOpen", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ServiceModal.prototype;
        _proto.onLoad = function onLoad() {
          // Otomatis menahan klik agar elemen di belakang modal tidak bisa diklik
          if (!this.getComponent(BlockInputEvents)) {
            this.addComponent(BlockInputEvents);
          }
        };
        _proto.showModal = function showModal() {
          this.node.active = true;
          if (this.bgOverlay) {
            var opacity = this.bgOverlay.getComponent(UIOpacity);
            if (!opacity) opacity = this.bgOverlay.addComponent(UIOpacity);
            this.bgOverlay.active = true;
            opacity.opacity = 0;
            tween(opacity).to(0.2, {
              opacity: 180
            }).start(); // Fade in selama 0.2 detik ke nilai 180
          }
        };

        _proto.hideModal = function hideModal() {
          var _this2 = this;
          if (this.bgOverlay) {
            var opacity = this.bgOverlay.getComponent(UIOpacity);
            if (opacity) {
              tween(opacity).to(0.2, {
                opacity: 0
              }).call(function () {
                _this2.bgOverlay.active = false;
                _this2.node.active = false;
                _this2._triggerNextModal();
              }).start(); // Fade out selama 0.2 detik lalu matikan dan panggil modal berikutnya
              return;
            }
          }
          this.node.active = false;
          this._triggerNextModal();
        };
        _proto._triggerNextModal = function _triggerNextModal() {
          if (this.nextModalToOpen) {
            // Coba cek apakah modal berikutnya punya AutoPopup.
            var autoPopupComp = this.nextModalToOpen.getComponent(AutoPopup);
            if (autoPopupComp) {
              this.nextModalToOpen.active = true; // Biarkan AutoPopup yang urus fadenya
            } else {
              // Kalo gaada, urus fade-in manual untuk modal berikutnya
              var serviceModalComp = this.nextModalToOpen.getComponent(ServiceModal);
              if (serviceModalComp) {
                serviceModalComp.showModal(); // fade background gelap jalan
              } else {
                this.nextModalToOpen.active = true;
              }

              // Tambahkan animasi fade-in pada body kotaknya (modal keseluruhan)
              var nextOpacity = this.nextModalToOpen.getComponent(UIOpacity);
              if (!nextOpacity) nextOpacity = this.nextModalToOpen.addComponent(UIOpacity);
              nextOpacity.opacity = 0;
              tween(nextOpacity).delay(0.2).to(0.4, {
                opacity: 255
              }, {
                easing: 'quadOut'
              }).start();
            }
          }
        };
        return ServiceModal;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgOverlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextModalToOpen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchPropagator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "10177E/jspMvonYTuRnRrzu", "TouchPropagator", undefined);
      var _cc$_decorator = cc._decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var TouchPropagator = exports('default', ccclass(_class = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(TouchPropagator, _cc$Component);
        function TouchPropagator() {
          return _cc$Component.apply(this, arguments) || this;
        }
        var _proto = TouchPropagator.prototype;
        _proto.start = function start() {
          // HANYA matikan pointer-events video (agar scroll bisa jalan).
          // JANGAN ubah ukuran video! Biarkan VideoClipper yang atur.
          if (cc.sys.isBrowser) {
            this.scheduleOnce(function () {
              // Matikan SEMUA video di halaman
              var domVideos = document.getElementsByTagName('video');
              for (var i = 0; i < domVideos.length; i++) {
                domVideos[i].style.pointerEvents = 'none';
              }
            }, 1.0);
          }
          // Dengarkan sentuhan pada GAMELAY ini (untuk Play/Pause)
          this.node.on(cc.Node.EventType.TOUCH_END, this.onTap, this);
        };
        _proto.onTap = function onTap(event) {
          var _this = this;
          // Cek geser atau klik murni
          var start = event.getStartLocation();
          var end = event.getLocation();
          var dx = start.x - end.x;
          var dy = start.y - end.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          // Kalau geser lebih dari 10 pixel, abaikan (biar jadi scroll)
          if (dist > 10) return;
          // Cari Video mana yang diklik
          var uiTransform = this.node.getComponent(cc.UITransform);
          if (!uiTransform) return;
          var localTouch = uiTransform.convertToNodeSpaceAR(event.getUILocation());
          this.node.children.forEach(function (child) {
            var childTrans = child.getComponent(cc.UITransform);
            if (childTrans) {
              var box = childTrans.getBoundingBox();
              if (box.contains(localTouch)) {
                _this.toggleVideo(child);
              }
            }
          });
        };
        _proto.toggleVideo = function toggleVideo(node) {
          var videoPlayer = node.getComponent(cc.VideoPlayer);
          if (!videoPlayer) videoPlayer = node.getComponentInChildren(cc.VideoPlayer);
          if (videoPlayer) {
            if (videoPlayer.isPlaying()) videoPlayer.pause();else videoPlayer.play();
          }
        };
        return TouchPropagator;
      }(cc.Component)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/videoclipper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, VideoPlayer, UITransform, sys, tween, v3, game, Canvas, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      VideoPlayer = module.VideoPlayer;
      UITransform = module.UITransform;
      sys = module.sys;
      tween = module.tween;
      v3 = module.v3;
      game = module.game;
      Canvas = module.Canvas;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2665crw1btK8aA5f5BQfJES", "videoclipper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VideoClipper = exports('VideoClipper', (_dec = ccclass('VideoClipper'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VideoClipper, _Component);
        function VideoClipper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskView", _descriptor, _assertThisInitialized(_this));
          // Node 'view' (Kotak Masking)
          _this._videoPlayer = null;
          _this._domVideo = null;
          _this._viewTransform = null;
          _this._startClickPos = new Vec3();
          _this._isClickAttached = false;
          _this._originalScale = new Vec3(1, 1, 1);
          return _this;
        }
        var _proto = VideoClipper.prototype;
        _proto.start = function start() {
          this._videoPlayer = this.getComponent(VideoPlayer);
          this._originalScale.set(this.node.scale);
          if (this._videoPlayer) {
            this._videoPlayer.stayOnBottom = false;
          }
          if (this.maskView) {
            this._viewTransform = this.maskView.getComponent(UITransform);
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var _this2 = this;
          if (!sys.isBrowser || !this.maskView || !this._viewTransform || !this._videoPlayer) return;
          if (!this._domVideo) {
            var impl = this._videoPlayer._impl;
            if (impl && impl._video) {
              this._domVideo = impl._video;
            }
            return;
          }
          // --- SMART CLICK + BUTTON ANIMATION ---
          if (!this._isClickAttached && this._domVideo) {
            this._isClickAttached = true;
            this._domVideo.style.cursor = "pointer";
            this._domVideo.onpointerdown = function (e) {
              _this2._startClickPos.x = e.clientX;
              _this2._startClickPos.y = e.clientY;
              tween(_this2.node).to(0.1, {
                scale: v3(_this2._originalScale.x * 0.95, _this2._originalScale.y * 0.95, 1)
              }).start();
            };
            this._domVideo.onpointerup = function (e) {
              tween(_this2.node).to(0.1, {
                scale: _this2._originalScale
              }).start();
              var diffX = Math.abs(e.clientX - _this2._startClickPos.x);
              var diffY = Math.abs(e.clientY - _this2._startClickPos.y);
              if (diffX < 10 && diffY < 10) {
                _this2.node.emit(Node.EventType.TOUCH_END, e);
              }
            };
            this._domVideo.onpointerleave = function (e) {
              tween(_this2.node).to(0.1, {
                scale: _this2._originalScale
              }).start();
            };
          }
          if (!game.canvas) return;
          // --- STRATEGI FINAL: RASIO LAYAR (TIDAK PERDULI ZOOM) ---
          var rootCanvas = this.getCanvasNode();
          if (!rootCanvas) return;
          var canvasTrans = rootCanvas.getComponent(UITransform);
          if (!canvasTrans) return;
          var viewW = this._viewTransform.width;
          var viewAX = this._viewTransform.anchorX;
          var viewWorldPos = this.maskView.worldPosition;
          var viewWorldLeftX = viewWorldPos.x - viewW * viewAX;
          var leftPosInCanvas = v3();
          canvasTrans.convertToNodeSpaceAR(v3(viewWorldLeftX, viewWorldPos.y, 0), leftPosInCanvas);
          var canvasW = canvasTrans.width;
          var canvasAX = canvasTrans.anchorX;
          var ratioX = (leftPosInCanvas.x + canvasW * canvasAX) / canvasW;
          var domCanvasRect = game.canvas.getBoundingClientRect();
          var viewDomLeftX = domCanvasRect.left + domCanvasRect.width * ratioX;
          var videoRect = this._domVideo.getBoundingClientRect();
          var videoDomLeftX = videoRect.left;
          var clipLeftScreen = viewDomLeftX - videoDomLeftX;
          if (clipLeftScreen < 0) clipLeftScreen = 0;
          var currentScaleX = 1;
          if (this._domVideo.offsetWidth > 0) {
            currentScaleX = videoRect.width / this._domVideo.offsetWidth;
          }
          var finalClipLeft = clipLeftScreen / currentScaleX;
          var clipTop = 0;
          var clipRight = 0;
          var clipBottom = 0;
          this._domVideo.style.clipPath = "inset(" + clipTop + "px " + clipRight + "px " + clipBottom + "px " + finalClipLeft + "px)";
          this._domVideo.style.webkitClipPath = "inset(" + clipTop + "px " + clipRight + "px " + clipBottom + "px " + finalClipLeft + "px)";
        };
        _proto.getCanvasNode = function getCanvasNode() {
          var _getComponentInChildr;
          var current = this.node;
          while (current) {
            if (current.getComponent(Canvas)) return current;
            current = current.parent;
          }
          return (_getComponentInChildr = this.node.scene.getComponentInChildren(Canvas)) == null ? void 0 : _getComponentInChildr.node;
        };
        return VideoClipper;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VideoClipper2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, VideoPlayer, UITransform, sys, game, v3, Canvas, Component, Touch, EventTouch;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      VideoPlayer = module.VideoPlayer;
      UITransform = module.UITransform;
      sys = module.sys;
      game = module.game;
      v3 = module.v3;
      Canvas = module.Canvas;
      Component = module.Component;
      Touch = module.Touch;
      EventTouch = module.EventTouch;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5fef4aZex9PH5H9x6KqcRrS", "VideoClipper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VideoClipper = exports('VideoClipper', (_dec = ccclass('VideoClipper'), _dec2 = property({
        type: Node,
        tooltip: "Node 'view' (Kotak Masking)"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VideoClipper, _Component);
        function VideoClipper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskView", _descriptor, _assertThisInitialized(_this));
          _this._videoPlayer = null;
          _this._domVideo = null;
          _this._viewTransform = null;
          _this._isClickAttached = false;
          // Untuk melacak touch ID (penting buat multitouch/button state)
          _this._touchId = 0;
          return _this;
        }
        var _proto = VideoClipper.prototype;
        _proto.start = function start() {
          this._videoPlayer = this.getComponent(VideoPlayer);
          if (this._videoPlayer) {
            this._videoPlayer.stayOnBottom = false;
          }
          if (this.maskView) {
            this._viewTransform = this.maskView.getComponent(UITransform);
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var _this2 = this;
          if (!sys.isBrowser || !this.maskView || !this._viewTransform || !this._videoPlayer) return;
          if (!this._domVideo) {
            var impl = this._videoPlayer._impl;
            if (impl && impl._video) {
              this._domVideo = impl._video;
            }
            return;
          }

          // --- BRIDGE: MENERUSKAN EVENT DOM KE COCOS NODE ---
          if (!this._isClickAttached && this._domVideo) {
            this._isClickAttached = true;
            this._domVideo.style.cursor = "pointer";

            // Helper untuk kirim event ke node
            var emitTouch = function emitTouch(type, e) {
              // Kita buat fake Touch object biar button cocos seneng
              var touch = new Touch(e.clientX, e.clientY, _this2._touchId++);
              var event = new EventTouch([touch], true, type, [touch]);
              event.touch = touch;

              // Set lokasi UI agar button validasi area (penting!)
              event.uilocation = v3(e.clientX, e.clientY); // v3 sementara, ntar dikonversi otomatis kalo perlu
              // Atau biarkan kosong, Button biasanya cuma butuh event triggernya kalau direct emit

              _this2.node.emit(type, event);
            };
            this._domVideo.onpointerdown = function (e) {
              // Tangkap pointer agar event up/move tetap nyambung ke elemen ini meski kursor keluar
              _this2._domVideo.setPointerCapture(e.pointerId);
              emitTouch(Node.EventType.TOUCH_START, e);
            };
            this._domVideo.onpointerup = function (e) {
              _this2._domVideo.releasePointerCapture(e.pointerId);
              emitTouch(Node.EventType.TOUCH_END, e);
            };
            this._domVideo.onpointercancel = function (e) {
              _this2._domVideo.releasePointerCapture(e.pointerId);
              emitTouch(Node.EventType.TOUCH_CANCEL, e);
            };

            // Opsional: Kalo mouse keluar window/elemen (fallback)
            this._domVideo.onpointerleave = function (e) {
              // Jangan cancel kalau lagi di-drag (pointer capture aktif), 
              // tapi kalau cuma hover lewat, biarin.
              if (!_this2._domVideo.hasPointerCapture(e.pointerId)) {
                emitTouch(Node.EventType.TOUCH_CANCEL, e);
              }
            };
          }
          if (!game.canvas) return;

          // --- LOGIKA CLIPPING (JANGAN DIHAPUS) ---
          var rootCanvas = this.getCanvasNode();
          if (!rootCanvas) return;
          var canvasTrans = rootCanvas.getComponent(UITransform);
          if (!canvasTrans) return;
          var viewW = this._viewTransform.width;
          var viewAX = this._viewTransform.anchorX;
          var viewWorldPos = this.maskView.worldPosition;
          var viewWorldLeftX = viewWorldPos.x - viewW * viewAX;
          var leftPosInCanvas = v3();
          canvasTrans.convertToNodeSpaceAR(v3(viewWorldLeftX, viewWorldPos.y, 0), leftPosInCanvas);
          var canvasW = canvasTrans.width;
          var canvasAX = canvasTrans.anchorX;
          var ratioX = (leftPosInCanvas.x + canvasW * canvasAX) / canvasW;
          var domCanvasRect = game.canvas.getBoundingClientRect();
          var viewDomLeftX = domCanvasRect.left + domCanvasRect.width * ratioX;
          var videoRect = this._domVideo.getBoundingClientRect();
          var videoDomLeftX = videoRect.left;
          var clipLeftScreen = viewDomLeftX - videoDomLeftX;
          if (clipLeftScreen < 0) clipLeftScreen = 0;
          var currentScaleX = 1;
          if (this._domVideo.offsetWidth > 0) {
            currentScaleX = videoRect.width / this._domVideo.offsetWidth;
          }
          var finalClipLeft = clipLeftScreen / currentScaleX;
          this._domVideo.style.clipPath = "inset(0px 0px 0px " + finalClipLeft + "px)";
          this._domVideo.style.webkitClipPath = "inset(0px 0px 0px " + finalClipLeft + "px)";
        };
        _proto.getCanvasNode = function getCanvasNode() {
          var _getComponentInChildr;
          var current = this.node;
          while (current) {
            if (current.getComponent(Canvas)) return current;
            current = current.parent;
          }
          return (_getComponentInChildr = this.node.scene.getComponentInChildren(Canvas)) == null ? void 0 : _getComponentInChildr.node;
        };
        return VideoClipper;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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