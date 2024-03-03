// Immediately Invoked Function Expressions (IIFE)


(function isConnected() {
    // isConnected is a named IIFE
    console.log("DB Connected")
})(); // semicolon ; is used here to end runtime this code for writing two function toegther

 // Below is a Unamed IIFE
((name) =>{
    console.log(`DB Connected to ${name}`);
})("Aman") // Prameter passed here