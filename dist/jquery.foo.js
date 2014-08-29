/*! Foo - v0.1.0 - 2014-08-29
* https://github.com/dvdrtrgn/foo
* Copyright (c) 2014 dvdrtrgn; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.foo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.foo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.foo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.foo.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].foo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
