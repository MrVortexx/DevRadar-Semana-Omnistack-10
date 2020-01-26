module.exports = 
    function parseStringAsArrey (array) {
      return  array.split(',').map(arrayItem => 
            arrayItem.trim()
        )
           
    }
