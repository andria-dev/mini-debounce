!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.miniDebounce={})}(this,function(e){e.debounce=((e,n)=>{var o;return(...t)=>(clearTimeout(o),o=setTimeout(()=>e(...t),n))})});
