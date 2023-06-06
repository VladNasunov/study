const arr = [1, 2, 3, 4, 5, 6, 14, 31, 55, 100]

function binarySearch(arr, item) {
    let flag = false;
    let start = 0;
    let end = arr.length;
    let position;
    let middle;
    while (flag === false && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            flag = true;
            position = middle;
            return position;
        }
        if (arr[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return position;
}


