/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function(input) {
    let index = input.match(/[a-z]/i).index;
    let n = input.substring(0,index);
    let x = n.match(/[/]/g);
    if(n == null || n == '')
      return 1;
    if(x != null)
      if(x.length > 1)
        return false;
    if(isNaN(n) && x == null)
      return false; 
    return eval(n);
  };
  
  this.getUnit = function(input) {
    let index = input.match(/[a-z]/i).index;
    let result = input.substring(index,input.length);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = false;
        break;
    }  
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = false;
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum*galToL;
        break;
      case 'l':
        result = initNum/galToL;
        break;
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      case 'kg':
        result = initNum/lbsToKg;
        break;
      case 'mi':
        result = initNum*miToKm;
        break;
      case 'km':
        result = initNum/miToKm;
        break;
      default:
        result = false;
        break;
    }
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum +' '+ this.spellOutUnit(initUnit) + ' converts to '+ returnNum +' '+ this.spellOutUnit(returnUnit); 
    return result;
  }; 
}

module.exports = ConvertHandler;
