Behavior            Input Example               Output Example

single symbol
number values            1,5,10                    I,V,X
                        50,100,500                 L,C,D
                        1000                       M


number has an
additive Roman
numeral value           2,66,101                   II,LXVI,CI

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
