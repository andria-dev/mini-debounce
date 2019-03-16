var r=function(r,t){var n;return function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return clearTimeout(n),n=setTimeout(function(){return r.apply(void 0,e)},t)}};export{r as debounce};
