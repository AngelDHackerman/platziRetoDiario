let names = [
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  {
    name: 'Angel',
    lastName: 'Hackerman',
    age: 26
  }
];

const solution = (array) => {
  let array2 = [];
  array.forEach(element => {
    array2.push(element.name)
  });
  return array2;
}

console.log(solution(names));



      // ? Otra solucion

function solution2 (array){
  return array.map(item => item.name);
}; 

console.log(solution2(names));
