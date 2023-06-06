// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

const mergeTwoArrays = (arr1, arr2) => {
    const res = [...arr1, ...arr2];
    return res.sort();
}
const promise1 = new Promise((res, res) => [
    // setTimeout(() => {
    //     console.log(‘calc list1’')
    //     let list1 = [1,2,4]
    //  }, 500)
])
const promise2 = new Promise((res, res) => [
    // setTimeout(() => {
    //    console.log(‘calc list2’')
    //    let list1 =  [1,3,4]
    // }, 300)
])

const res = Promise.all([promise1, promise2]);
res.then((data)=> {
// setTimeout(() => {
//   console.log(‘ output’')
//   // calculation
// },100)
})


