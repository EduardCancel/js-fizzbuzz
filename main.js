/* Scrivi un programma che stampi numeri da 1 a 100, ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FrizzBuzz" */


let output;
for (let i = 1; i <=100; i++){
    
    if ( i % 5 === 0 && i % 3 === 0){

        output = "FizzBuzz";

    } else if (i % 3 === 0){

        output = "Fizz";

    } else if (i % 5 === 0){

        output = "Buzz";

    } else {
        output = i;
    }

    console.log(`The number is ${output}`);
}