function isBalanced(string) {
  let result = []
  let chars = {'(': ')', '{': '}', '[': ']'}
  
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      result.push(string[i])
    } else if (chars[result.pop()] !== string[i]) {
      return false
    }
  }

  return result.length ? false : true
}
