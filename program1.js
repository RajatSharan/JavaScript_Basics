/*****To find the common multiple of 2 and 5 */

//From 1 to 10 give me common multiple of values of 2 and 5
let n =0
for(let k=1 ;k<=100;k++){

    if(k%2 ==0 && k%5==0){

    n++
    console.log(k)
    if(n==3){

        break

    }

    }
}