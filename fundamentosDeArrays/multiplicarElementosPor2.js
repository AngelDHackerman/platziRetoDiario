// This must multiply 2 times each element. The parameter must be a numbers array.

const solution = (array) => { 
  let arrayTwoTimes = [];

  if (Array.isArray(array)) {
    array.map(function(x) {
      arrayTwoTimes.push(x * 2);
    });
  } else {
    console.log('Lo que ingresaste no es un array');
  }

  console.log(arrayTwoTimes);
};

let numeros = [2, 3, 5, 6, 10];
solution(numeros);

    // ? Otra solucion: 

const solution2 = (array) => { 
  return array.map(item => item * 2);
} 

console.log(solution2([1, 2, 3, 4, 5, 6, 7, 8, 9]));