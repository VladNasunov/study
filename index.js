// const string = 'hello world dsdfdaf'

// function reverse(str){
//     const rev = str.split(' ')
//     let res = []
//     for (let i = rev.length - 1; i >= 0; i--){
//         res.push(rev[i])
//     }
//     return res.join(' ')
// }
// console.log(reverse(string))


// function getAverage(marks){
//     //TODO : calculate the downwar rounded average of the marks array
//     const numberOfItems = marks.length;
//     let plus = 0;
//     let res;
//     for(let i = 0; i < marks.length; i++){
//       plus += marks[i]
//       res = plus / numberOfItems
//     }
//     return Math.round(res)
// }
// function getAverage(marks){
//      return Math.floor(marks.reduce((sum, i) => sum + i / marks.length) )
// }
// console.log(getAverage([1,2,3,4,5,]))
// console.log(getAverage([1,1,1,1,1,1,1,2]))

// function removeChar(str){
//     //You got this!
//      const res = str.slice(1, str.length - 1)
//      return res
//    };
//    console.log(removeChar('slice'))

// function highAndLow(numbers){
//   const arr = numbers.split(' ')
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     newArr.push(Number(arr[i]))
//   }
//   const res1 = newArr.reduce((acc, el)=> acc < el? acc : el)
//   const res2 = newArr.reduce((acc, el)=> acc < el? el : acc)
//   let res = String(res1) + ' ' + String(res2)
//   return res

//   // numbers = numbers.split(' ').map(Number);
//   // return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
// console.log(highAndLow("1 2 3 4 5"))

// class Song {
//   constructor(title, artist){
//     this.title = title;
//     this.artist = artist;
//   }
//   howMany(array){
//     const arr = Array.from(array)
//     return array.length
//   }
// }

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'

// console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']))
// console.log(mountMoose.title)
// console.log(mountMoose.artist)

// class Song{
//   constructor(title, artist){
//     this.title = title;
//     this.artist = artist;
//     this.listener = new Set()
//   };
//   howMany(people){
//     let oldSize = this.listener.size;
//     people.map(p => this.listener.add(p.toLowerCase()));
//     return this.listener.size - oldSize;
//   }
// }


function DNAStrand(dna){
  //your code here
  const dnaString = dna.split('')
  console.log(dnaString)
  let res = ''
   const result = dnaString.map((i, index)=>{
     if(i === 'A'){
       res = 'T'
     } else if(i === 'T'){
      res = 'A'
     } else if(i === 'C'){
      res = 'G'
     } else {
      res = 'C'
     }
     return res
   })
   return result.join('')
}
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
console.log(DNAStrand("TATGC"))

function lastSurvivor(letters, coords) {
  let res = letters
  for(let i = 0; i < coords.length; i++){
  res = letters.slice(coords[i], letters.length - 1)
  }
  return res
}

console.log(lastSurvivor('kbc', [0, 1]))  
console.log(lastSurvivor('zbk', [2, 1]))  

function isPrime(n) {
  // show me the code!
  if(n > 1){
    for(let i = 2; i < n; i++){
      if(n % i == 0){
        return false
      }
    }
    return true
}
return false
}
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(11))
console.log(isPrime(12))
console.log(isPrime(61))
console.log(isPrime(571))
console.log(isPrime(571))
console.log(isPrime(573))
console.log(isPrime(25))
// assert.strictEqual(isPrime(0), false)
//     assert.strictEqual(isPrime(1), false)
//     assert.strictEqual(isPrime(2), true)
//     assert.strictEqual(isPrime(11), true)
//     assert.strictEqual(isPrime(12), false)
//     assert.strictEqual(isPrime(61), true)
//     assert.strictEqual(isPrime(571), true)
//     assert.strictEqual(isPrime(573), false)
//     assert.strictEqual(isPrime(25), false)