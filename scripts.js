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
names.forEach(name => console.log(name))
provinces.forEach(province => console.log(province))

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