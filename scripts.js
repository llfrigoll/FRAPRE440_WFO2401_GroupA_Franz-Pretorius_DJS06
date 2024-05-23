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
names.forEach((name, index) => {
  let string = `${name} (${provinces[index]})`
  console.log(string)
})


const upperProvinces = provinces.map(province => province.toUpperCase())
console.log(upperProvinces)


const lengthNames = names.map(name => name.length)
console.log(lengthNames)


console.log(provinces.sort())


const noCapeProvinces = provinces.filter(province => {
  if(!province.includes('Cape')) {
    return province
  }
})
console.log(noCapeProvinces.length)


let indexOfS = -1
while(names.some((name, index) => {
  if(name.includes('S') || name.includes('s')){
    indexOfS = index
    return name
  }
})) {
  names[indexOfS] = ''
}

const namesWithS = names.map(name => {
  if(name === '') {
    return true
  }else{
    return false
  }
})
console.log(namesWithS)


//ADVANCED EXERCISES
console.log(products.map(item => item.product))


console.log(products.filter(item => item.product.length <= 5))


console.log(products.filter(item => item.price > 0).map(item => Number(item.price)).reduce((total, num) => total + num))


console.log(products.reduce((string, item) => string + ' ' + item.product, ''))


console.log('Highest: ' + Math.max(...products.filter(item => item.price > 0).map(item => Number(item.price))) + '. Lowest: ' + Math.min(...products.filter(item => item.price > 0).map(item => Number(item.price))))


console.log(products.map((item) => {return item = {name: item.product, cost: item.price}}))