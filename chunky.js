function chunkArrayInGroups(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i += size) {
      var chunk = arr.slice(i, i + size);
      
      result.push(chunk);
    }
  
    return result;
  }
  
  var resultArray = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(resultArray); 