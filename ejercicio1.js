var assert = require('assert');
function EjerciciosArray()
{
  this.ejercicio1 = function(_arr, _num)
  {
      var res = 0;
      if(Array.isArray(_arr))
      {
        res = _arr.reduce(function(_total, _actual){
          return _total * _actual;
        });
      }else{
        if(!isNaN(_arr)){
          res = _arr;
        }
      }

     if(!isNaN(_num)){
       res = res * _num;
     }

     return res;
  }

  var ejercicios = new EjerciciosArray();
