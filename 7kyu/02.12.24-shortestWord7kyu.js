function findShort(s){
    let words = s.split(' ')
    let minLength = Infinity;
    
    for(const word of words) {
      minLength = Math.min(minLength, word.length);
    }
    
    return minLength;
  }