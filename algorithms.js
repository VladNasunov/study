// Basic operations: sort, map, filter, reduce
// Algorithms complexity basics (O(1), O(N), ...)
// Data structures: array, stack, queue, linked-list, tree, hash table (map), set

// const arr = [-3, 0, 1, 3, 10]; // 3
// function binarySearch(arr, item) {
//   let start = 0;
//   let end = arr.lenght;
//   let flag = false;
//   let position;
//   let middle;

//   while (flag === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (arr[middle] === item) {
//       flag = true;
//       position = middle;
//       return position;
//     }
//     if(arr[middle] < item){
//         start = middle + 1
//     } else {
//         end = middle - 1
//     }
//   }
//   return position
// }
// console.log(binarySearch(arr, 3))

//Graphs поиск в ширину
// const graph = {};
// graph.a = ["b", "c"];
// graph.b = ["f"];
// graph.c = ["d", "e"];
// graph.d = ["f"];
// graph.e = ["f"];
// graph.f = ["g"];
//Данная функция кладет стартовую позицию в массив, затем берет первый элемент массива и проверяет есть ли в объекте под данным ключом конечная точка. Если нет то мы кладем то что осталось в массиве и новый массив из свойства объекта под данным ключом
// Операция повторяется пока мы не найдем конечную точку либо вернет false

// const breadthSearch = (graph, start, end) => {
//   let queue = [];
//   queue.push(start);
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (!graph[current]) {
//       graph[current] = [];
//     }
//     if (graph[current].includes(end)) {
//       return true;
//     } else {
//       queue = [...queue, ...graph[current]];
//     }
//   }
//   return false;
// };
// console.log(breadthSearch(graph, "a", "g"));

//Алгоритм Дейкстры поиск кратчайшего пути

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  const costs = {};
  const prosessed = [];
  let neigbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1000000000;
    }
  });
  let node = findNodeLowestCost(costs, prosessed);
  while(node){
      const cost = costs[node];
      neigbors = graph[node];
      Object.keys(neigbors).forEach(neigbor =>{
          let newCost = cost + neigbors[neigbor];
          if(newCost < costs[neigbor]){
              costs[neigbor] = newCost
          }
      })
      prosessed.push(node);
      node = findNodeLowestCost(costs, prosessed)
  }
  return costs;
}
function findNodeLowestCost(costs, prosessed){
    let lowestCost = 1000000000;
    let lowestNode;
    Object.keys(costs).forEach(node =>{
        let cost = costs[node];
        if(cost < lowestCost && !prosessed.includes(node)){
            lowestCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode
}
console.log(shortPath(graph, "a", "g"))
