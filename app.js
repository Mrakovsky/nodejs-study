'use strict';
const num = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= num; i++) {
    sum = sum + i;
}
console.log(sum);