export var debounce=(e,r)=>{var t;return(...a)=>(clearTimeout(t),t=setTimeout(()=>e(...a),r))}
