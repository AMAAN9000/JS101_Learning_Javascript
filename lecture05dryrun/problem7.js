let sum = 0;
let count = 0;

for (let i = 1 ; i<=100; i++){
  if(i%2==0){
    sum = sum +i;
    count++;
  }
}
    console.log(sum/count);