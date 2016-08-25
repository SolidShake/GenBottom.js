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
  }

  //генерация плоского дна
  function flat_bottom() {
  	var matrix_of_coordinates = matrixArray(this.width, this.height);

    for(var i = 0; i <= this.width; i++) {
      for(var j = 0; j <= this.height; j++) {
        matrix_of_coordinates[i][j] = this.deep;
      }
    }
  }

  this.get_flat_bottom = function(x, y) {
  	flat_bottom();
    return matrix_of_coordinates[i][j];
  }
}
