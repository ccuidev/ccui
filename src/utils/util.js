import Vue from 'vue';
import { isObject, isString } from '../utils/types';
import Cookies from 'js-cookie';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function noop() {
}

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}

export function toObject(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

export const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}

export const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
export const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

export const arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
export const coerceTruthyValueToArray = function(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

export const isIE = function() {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
};

export const isEdge = function() {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};
export const isFirefox = function() {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

export const autoprefixer = function(style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

export const kebabCase = function(str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};

export const capitalize = function(str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const looseEqual = function(a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

export const arrayEquals = function(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

export const isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

export const isEmpty = function(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

export function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

export const isShowErrorMessage = function(code) {
  let codeList = [
    '2',
    '3',
    '4',
    '5',
    '7',
    '104',
    '106',
    '107',
    '109',
    '110',
    '112',
    '122',
    '201',
    '210',
    '211',
    '403',
    '500',
    '800',
    '801',
    '802',
    '803',
    '804',
    '805',
    '999'
  ];
  return codeList.indexOf(code) === -1;
};

// 仅支持IE10及以上 下载方法
export const createObjectURL = function(code) {
  function createObjectURL(object) {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }

  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  xhr.open('get', code.url);
  xhr.setRequestHeader('Authorization', Cookies.get('access_token'));
  xhr.responseType = 'blob';
  xhr.onload = function(e) {
    if (this.status === 200) {
      let blob = this.response;
      let filename = code.filename;
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let a = document.createElement('a');
        let url = createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }

    }
  };
  xhr.send(formData);
};

export const getBoundingClientRect = element => {
  const rect = element.getBoundingClientRect();

  // whether the IE version is lower than 11
  const isIE = navigator.userAgent.indexOf('MSIE') !== -1;

  // fix ie document bounding top always 0 bug
  const rectTop =
    isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop
  };
};

// 金额添加千分位
export const comdify = function(n) {
  if (!n) return n;
  let str = n.split('.');
  let re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = str[0].replace(re, '$&,');
  return str.length > 1 && str[1] ? `${n1}.${str[1]}` : `${n1}.00`;
};
// 去除千分位中的‘，’
export const delcommafy = function(num) {
  if (!num) return num;
  num = num.toString();
  num = num.replace(/,/gi, '');
  return num;
};

export const valdateFn = function(rule, val, cb) {
  setTimeout(() => {
    if (val) {
      let inputVal = delcommafy(val);
      if (rule.test(inputVal)) {
        cb(comdify(inputVal), 0);
      } else {
        cb('只能是数字金额,最多两位小数', 1);
      }
    }
  });
};
// 验证金额数字可以为负数
export const moneyValid = function(val, cb) {
  valdateFn(/((^-?[1-9]\d*)|^-?0)(\.\d{0,2}){0,1}$/, val, cb);
};
// 验证金额数字不可以为负数
export const moneyNValid = function(val, cb) {
  valdateFn(/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/, val, cb);
};

// 获取输入框的值
export const getInputValue = function(el) {
  let inputVal = el.target.value || '';
  return comdify(delcommafy(inputVal));
};
export const textareaTo = (str) => {
  let reg = new RegExp('\n', 'g');
  let regSpace = new RegExp(' ', 'g');

  str = str.replace(reg, '<br>');
  str = str.replace(regSpace, '&nbsp;');

  return str;
};
export const toTextarea = (str) => {
  let reg = new RegExp('<br>', 'g');
  let regSpace = new RegExp('&nbsp;', 'g');

  str = str.replace(reg, '\n');
  str = str.replace(regSpace, ' ');

  return str;
};
