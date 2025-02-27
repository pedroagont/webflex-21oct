const myCar = {
    name: 'ferrari',
    color: 'red'
}

// const otherCar = myCar
const otherCar = { ...myCar }

otherCar.color = 'blue';

console.log('myCar', myCar)
console.log('otherCar', otherCar)