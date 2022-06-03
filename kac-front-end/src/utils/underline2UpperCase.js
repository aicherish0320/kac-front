export const underline2UpperCase = (str) => {
  var arr = str.split('-')
  var len = arr.length
  for (var i = 0; i < len; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  str = arr.join('')
  return str
}
