// Immediately invoked function Expression (IIFE)
// IIFE used for avoiding polution of global scope & immediately exucation.

(function chai() {
    // name IIFE
    console.log(`DB Connect`);
    
})();

((name) =>  {
    console.log(`DB Connect 2 ${name}`);
    
})('jaydeep')