const map = {};
const __ = n => n == 0 ? '+[]' : Array.from({length: n}, () => '+!![]').join(' + ');
const _ = s => s.split('').map(x => !(x in map) ? `([]+[])[${map.constructor}][${map.fromCharCode}](${__(x.charCodeAt(0))})`: map[x]).join('+');
const compile = code => `(()=>{})[${map.constructor}](${_(code)})()`;
map.a = `(+{}+[])[${__(1)}]`;
map.b = `({}+[])[${__(2)}]`;
map.o = `({}+[])[${__(1)}]`;
map.e = `({}+[])[${__(4)}]`;
map.c = `({}+[])[${__(5)}]`;
map.t = `({}+[])[${__(6)}]`;
map[' '] = `({}+[])[${__(7)}]`;
map.f = `(![]+[])[${__(0)}]`;
map.l = `(![]+[])[${__(2)}]`
map.s = `(![]+[])[${__(3)}]`;
map.r = `(!![]+[])[${__(1)}]`;
map.u = `(!![]+[])[${__(2)}]`;
map.i = `((+!![]/+[])+[])[${__(3)}]`;
map.n = `((+!![]/+[])+[])[${__(4)}]`;
map.constructor = _('constructor')
map.S = `([]+([]+[])[${map.constructor}])[${__(9)}]`;
map.g = `([]+([]+[])[${map.constructor}])[${__(14)}]`;
map.p = `([]+(/-/)[${map.constructor}])[${__(14)}]`;
map['\\'] = `(/\\\\/+[])[${__(1)}]`;
map.d = `(${__(13)})[${_('toString')}](${__(14)})`;
map.h = `(${__(17)})[${_('toString')}](${__(18)})`;
map.m = `(${__(22)})[${_('toString')}](${__(23)})`;
map.C = `((()=>{})[${map.constructor}](${_('return escape')})()(${map['\\']}))[${__(2)}]`;
map.fromCharCode = _('fromCharCode')
export default compile