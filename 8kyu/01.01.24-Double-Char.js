function doubleChar(str) {
    let string1 = ""
    for (let i=0; i < str.length; i++) {
      string1 += str[i] + str[i]
    }
    return string1
  }
  
  
  //loop through each string
  //at each index, I want to repeat the character at the given index
  //return new string with repeated characters