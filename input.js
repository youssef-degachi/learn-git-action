
/* 
  filterName function
  [1] if no name it  given it will show "Unknown"
  [2] if name start or end with " " it will be trimmed
*/

function filterName(name) {
  if (name === undefined){
    return "Unknown"
  };
  if( name.startsWith(" ") || name.endsWith(" ") ) {
    name = name.trim();  // trim leading and trailing spaces
  }
  if (name.length >10 ){
    name = name.substring(0,10);
  };
  if (name[0] =='_') {
    name = name.substring(1);
  }
  return name;
}


module.exports = filterName; 