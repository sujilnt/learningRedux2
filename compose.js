const {compose}=require("redux");

// starting to learn to use Compose .
const makeLoader= string=> string.toUpperCase();
const repeatthreetimes = string => string.repeat(3);
const embolder = string => string.bold();

const makeLouderAndReapeatthreeTimes= compose(embolder,makeLoader,repeatthreetimes);
console.log(makeLouderAndReapeatthreeTimes("hello!")); // <b>HELLO!HELLO!HELLO!</b>



