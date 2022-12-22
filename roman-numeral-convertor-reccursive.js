function convertToRoman(
  num, 
  map = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
  ){
    console.log(map);
    if (!map.length) return "";
    if(num>=map[0][1])
        return map[0][0]+convertToRoman(num-map[0][1],map);
    else return ""+convertToRoman(num,map.slice(1))
  };
