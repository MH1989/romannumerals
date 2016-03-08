//app that takes a number ideally between 0 and 3000 and turns it into a roman numeral//
//1 = I//
//5 = V//
//10 = X//
//20 = XX//
//3999 = MMMCMXCIX//
//etc...//
function romanize(num) {
  var romanNumeral = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in romanNumeral ) {
    while ( num >= romanNumeral[i] ) {
      roman += i;
      num -= romanNumeral[i];
    }
  }
  return roman;
}
