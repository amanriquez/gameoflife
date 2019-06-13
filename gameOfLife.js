
const nextGeneration = function (matrix) {

  let result = []
  for (i = 0; i < matrix.length; i++){
    result.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;

      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
        
          let add;
          if (matrix[i + x] !== undefined && matrix[i + x][j + y] !== undefined){
            add = matrix[i + x][j + y]
          } else {
            add = 0;
          }
          count += add;
        }
      }
      count -= matrix[i][j];

      if (matrix[i][j] === 1) {
        if (count < 2 || count > 3) {
          result[i][j] = 0;
        } else {
          result[i][j] = 1;
        }
      } else if (matrix[i][j] === 0) {
        if (count === 3) {
          result[i][j] = 1;
        } else {
          result[i][j] = 0;
        }
      }

    }
  }

  return result;
}


let x = nextGeneration([
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
]);

console.log(x);



    // try {
    //   //top
    //   count += matrix[i-1][j];
    //   //top right
    //   count += matrix[i-1][j + 1];
    //   //right
    //   count += matrix[i][j+1];
    //   //bottom right
    //   count += matrix[i+1][j+1];
    //   //bottom
    //   count += matrix[i + 1][j];
    //   //bottom left
    //   count += matrix[i+1][j -1];
    //   //left
    //   count += matrix[i][j-1]
    //   //top left
    //   count += matrix[i - 1][j - 1];


    // } catch(error){
    //   console.log('oops');
    // }
