module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;
  let typestr = String(str);
  while (typestr.length > 0) {
      let isConfig = false;
      for (let j = 0; j < bracketsConfig.length; j++) {
          let config = bracketsConfig[j];
          let n = String(config[0]) + String(config[1]);
          let p = typestr.indexOf(n);
          if (p !== -1) {
              typestr = typestr.replace(n, '');
              isConfig = true;
          }

      }
      if (!isConfig) return isConfig;
  }
  return typestr.length === 0;
}