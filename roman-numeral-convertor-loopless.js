function convertToRoman(num) {
  if(num>=1000) return "M".concat(convertToRoman(num-1000))
  if(num>=900) return "CM".concat(convertToRoman(num-900))
  if(num>=500) return "D".concat(convertToRoman(num-500))
  if(num>=400) return "CD".concat(convertToRoman(num-400))
  if(num>=100) return "C".concat(convertToRoman(num-100))
  if(num>=90) return "XC".concat(convertToRoman(num-90))
  if(num>=50) return "L".concat(convertToRoman(num-50))
  if(num>=40) return "XL".concat(convertToRoman(num-40))
  if(num>=10) return "X".concat(convertToRoman(num-10))
  if(num>=9) return "IX".concat(convertToRoman(num-9))
  if(num>=5) return "V".concat(convertToRoman(num-5))
  if(num>=4) return "IV".concat(convertToRoman(num-4))
  if(num>=1) return "I".concat(convertToRoman(num-1))
  return ''
}
