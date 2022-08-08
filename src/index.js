const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// it("Medium line length test 6", function() {
//     const expr = "00001110101010101111000011101000000000101111111010000000001000000010110011101110";
//     const result = "d3de8eac";
//     expect(decode(expr)).to.equal(result);
// });

function decode(expr) {
   let arrayBinary = chunkSubstr(expr, 10)
   let arrayMorse = []
   let arrayMorseAll = []
   let result = ''


   console.log(arrayBinary, 'arrayBinary')

   for(let i = 0; i < arrayBinary.length; i++){
     arrayMorse.push(chunkSubstr(arrayBinary[i], 2))
   }

   for(let j = 0; j < arrayMorse.length; j++){

        arrayMorse[j] = arrayMorse[j].filter((n) => {return n != '00'})
    
        for(let k = 0; k < arrayMorse[j].length; k++){
            if(arrayMorse[j][k] == '10'){
                arrayMorse[j][k] = '.'            
            } else  if(arrayMorse[j][k] == '11'){
                arrayMorse[j][k] = '-'            
            } else arrayMorse[j][k] = ' '
        } 
        
        arrayMorseAll = arrayMorse.map(elem => elem.join(''))

    }


    for(let i = 0; i< arrayMorseAll.length; i++){

        for(let key in MORSE_TABLE){
            if(arrayMorseAll[i] == key){
                arrayMorseAll[i] = MORSE_TABLE[key]
            }
            if(arrayMorseAll[i] == '     '){
                arrayMorseAll[i] = ' '
            }
        }

    }

   console.log(arrayMorseAll, 'arrayMorse')
   result = arrayMorseAll.join('')
   console.log( result)
   return result
}


// делим строку на массив символов
function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
  
    return chunks
}


module.exports = {
    decode
}
