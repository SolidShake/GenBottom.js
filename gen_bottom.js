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
  
  //генерация гладкого дна
  this.get_plain_bottom = function(x, y, period, amplitude) {
   	var matrix_of_coordinates = matrixArray(this.width + 1, this.height + 1);

  	for(var i = 0; i <= this.width; i++) {
      for(var j = 0; j <= this.height; j++) {
        matrix_of_coordinates[i][j] = this.deep + (amplitude * Math.sin((2 * Math.PI / period * i)) * Math.sin((2 * Math.PI / period * j)));
      }
    }
    return matrix_of_coordinates[x][y];
  }
}

// Generation bottom with using income data
// Библиотека генерирующая дно, использющая входящие данные 

function Gen_bottom_inter() {

  this.width = 100;
  this.height = 100;

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

  //интерполирующая функция (билинейная интерполяция)
  this.interpolate = function(_x, _y, dataArray) {
    var matrix_of_coordinates = matrixArray(this.width + 1, this.height + 1);

    var x1_ind = 0;
    var x2_ind = 1;
    var y1_ind = 0;
    var y2_ind = 1;

    var x1=0, x2=0, y1=0, y2=0;

    for(var x = 0; x <= this.width; x++){
      if(x >= x2 && x2 !== 0 && x2 !== this.width) {
        x1_ind++;
        x2_ind++;
      }
      for(var y = 0; y <= this.height; y++) {
        if(y >= y2 && y2 !== 0 && y2 !== this.height) {
          y1_ind++;
          y2_ind++;
        }

        x1 = dataArray[x1_ind][0][0];
        x2 = dataArray[x2_ind][0][0];
        y1 = dataArray[0][y1_ind][1];
        y2 = dataArray[0][y2_ind][1];

        var f_q11 = dataArray[x1_ind][y1_ind][2], f_q12 = dataArray[x1_ind][y2_ind][2],
        f_q21 = dataArray[x2_ind][y1_ind][2], f_q22 = dataArray[x2_ind][y2_ind][2];

                matrix_of_coordinates[x][y] = f_q11*(x2-x)*(y2-y)/((x2-x1)*(y2-y1)) + f_q21*(x-x1)*(y2-y)/((x2-x1)*(y2-y1)) + f_q12*(x2-x)*(y-y1)/((x2-x1)*(y2-y1)) + f_q22*(x-x1)*(y-y1)/((x2-x1)*(y2-y1));
      }
    }
    return matrix_of_coordinates[_x][_y];
  }
}