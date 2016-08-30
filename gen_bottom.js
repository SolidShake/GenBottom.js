// Generation bottom with the function library
// Библиотека генерирующая дно с помощью функций

function Gen_bottom_func() {

  this.width = 100;
  this.height = 100;
  this.deep = 10;
  
  function matrixArray(rows, colomns) {
    var arr = [];
    for(var i = 0; i < colomns; i++) {
      arr[i] = [];
      for(var j = 0; j < rows; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  }

  //генерация плоского дна
  this.get_flat_bottom = function(x, y) {
  	var matrix_of_coordinates = matrixArray(this.width + 1, this.height + 1);

    for(var i = 0; i <= this.width; i++) {
      for(var j = 0; j <= this.height; j++) {
        matrix_of_coordinates[i][j] = this.deep;
      }
    }
    return matrix_of_coordinates[x][y]; 
  }
  
  //генерация наклонного дна
  this.get_inclined_bottom = function(x, y, alpha) {
  	var matrix_of_coordinates = matrixArray(this.width + 1, this.height + 1);
  	
  	for(var i = 0; i <= this.width; i++) {
      for(var j = 0; j <= this.height; j++) {
        matrix_of_coordinates[i][j] = this.deep + Math.tan(alpha * Math.PI / 180) * j;
      }
    }
    return matrix_of_coordinates[x][y];
  }
}

