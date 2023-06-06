function bubleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubleSort([4, 1, 5, 10, 0, 1]))

function sortByChoose(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
            let temp = arr[j];
            arr[i] = arr[indexMin];
            arr[indexMin] = temp;
        }
    }
    return arr;
}


const fastSort = (arr) => {
    const pivotIndex = Math.round(arr.length / 2);
    let less = [];
    let greater = [];

    if (arr.length <= 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[pivotIndex]) {
            less.push(arr[i])
        } else if (arr[i] > arr[pivotIndex]) {
            greater.push(arr[i])
        }
    }
    const lessArr = fastSort(less);
    const greaterArr = fastSort(greater);

    return [...lessArr, arr[pivotIndex], ...greaterArr]
}

// console.log(fastSort([4, 1, 5, 10, 6, 115, 35, 2, -1]))


const queueTime = (customers, n) => {
    if (!customers.length) {
        return 0;
    }

    const queue = [...customers];
    const tills = Array(Math.min(customers.length, n)).fill(0);

    while (queue.length) {
        const customer = queue.shift();
        const tillMinId = tills.indexOf(Math.min(...tills));
        tills[tillMinId] += customer;
    }
    console.log(Math.max(...tills))
    return Math.max(...tills)
}
queueTime([1, 2, 3, 4], 1)//10
queueTime([2, 2, 3, 3, 4, 4], 2)//9
queueTime([1, 2, 3, 4, 5], 100) //5

const arrr1 = [5, 1, 2, 7, 3, 2];
const arrr2 = [1, 2, 3, 2, 0];

//result [1,2,2,3]

const commonIntegers = (arr1, arr2) => {
    const obj = {};
    const res = []
    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            obj[arr1[i]] += 1;
        } else {
            obj[arr1[i]] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const current = arr2[i];
        const count = obj[current]

        if (count && count > 0) {
            res.push(current);
            obj[current] -= 1;
        }

    }

    return res;
}
// console.log(commonIntegers(arrr1, arrr2))


const input1 = 'leetcode' //0
const input2 = 'loveleetcode' //2
const input3 = 'aabb'//-1

const unique = (str) => {
    if (str.length < 1) return -1;
    const obj = {}

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (obj[element]) {
            obj[element] += 1
        } else {
            obj[element] = 1
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return i;
        }
    }
    return -1
}
// console.log(unique(input1))
// console.log(unique(input2))

// console.log(unique(input3))
