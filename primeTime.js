let n=10;
while (true) {
    n++
    let isPrime = true; 
    if (n > 1 ) {
        
        for (let i = 2; i <= Math.sqrt(n); i++) //enough to check the number by dividing it by every number between 2 and its square root.
            {
        if (n % i ===0)
            {
                isPrime = false;
                break;
            }
            }
        } else {
            isPrime = false;

    }
    if(isPrime){
        console.log(n)
    break;
    }
}