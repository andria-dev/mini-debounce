exports.debounce=function(e,n){var r;return function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];return clearTimeout(r),r=setTimeout(function(){return e.apply(void 0,t)},n)}};
