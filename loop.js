for (let num =1; num <= 100; num++) {
    if (num %3 ==0 ) {console.log (num + ' Fizz') }
    if (num %5 ==0) {console.log (num + ' Buzz')}
    if (num %3 ==0 && num %5 ==0 ) {console.log ( num + ' Fizz Buzz')} 
    if (num %3 !==0 && num %5 !==0 ) {console.log (num)}
}