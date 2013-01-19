// Generated by CoffeeScript 1.4.0
(function() {
  var fontResize;

  fontResize = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.fontResizer.defaults, options);
    if (this.options.startResize) {
      this.resize();
    }
    return this.listen();
  };

  fontResize.prototype = {
    listen: function() {
      return this.$element.on('resize', $.proxy(this.resize, this));
    },
    resize: function() {
      var coefficient;
      coefficient = this.obtain();
      return $.each(this.options.elements, function(i, v) {
        return $(v.elem).css({
          'font-size': v.size * coefficient
        });
      });
    },
    obtain: function() {
      var val;
      return val = this.$element.width() / (this.options.baseWidth / 100) / 100;
    }
  };

  $.fn.fontResizer = function(options) {
    var data;
    return data = new fontResize(this, options);
  };

  $.fn.fontResizer.defaults = {
    baseWidth: 640,
    baseHeight: 480,
    startResize: false
  };

}).call(this);
