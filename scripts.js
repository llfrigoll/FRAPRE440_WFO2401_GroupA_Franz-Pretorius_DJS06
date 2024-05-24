// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//EXERCISES
//console.logs all names with a corresponding province
names.forEach((name, index) => {
  let string = `${name} (${provinces[index]})`
  console.log(string)
})


//console logs the provinces in uppercase
const upperProvinces = provinces.map(province => province.toUpperCase())
console.log(upperProvinces)


//console logs the length of the names in the array
const lengthNames = names.map(name => name.length)
console.log(lengthNames)


//console logs the provinces sorted alphabetically
console.log(provinces.sort())


//filters out the provinces containing 'Cape' and console logs the length of the array
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'))
console.log(noCapeProvinces.length)


//uses some to check if there is a value containing an s and if so the while loop will run and blank out the name
let indexOfS = -1
while(names.some((name, index) => {
  if(name.includes('S') || name.includes('s')){
    indexOfS = index
    return name
  }
})) {
  names[indexOfS] = ''
}

//uses map to set any blank values to true and any other names to false and console logs the array
const namesWithS = names.map(name => {
  if(name === '') {
    return true
  }else{
    return false
  }
})
console.log(namesWithS)


//ADVANCED EXERCISES
//console logs the product array's products
console.log(products.map(item => item.product))


//filters out the product names that are longer than 5 and console logs it
console.log(products.filter(item => item.product.length <= 5))


//filters out products with blank prices, then converts and string to a number and then uses reduce to add those numbers and console logs it
console.log(products.filter(item => item.price > 0).map(item => Number(item.price)).reduce((total, num) => total + num))


//console logs all the product names in a single line
console.log(products.reduce((string, item) => string + ' ' + item.product, ''))


//uses max and min to get the highest and lowest number in the array and console logs it
console.log('Highest: ' + Math.max(...products.filter(item => item.price > 0).map(item => Number(item.price))) + '. Lowest: ' + Math.min(...products.filter(item => item.price > 0).map(item => Number(item.price))))


//uses map to restructure the item object with new keys and console logs it
console.log(products.map((item) => {return item = {name: item.product, cost: item.price}}))