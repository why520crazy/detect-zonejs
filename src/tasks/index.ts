// const promise = new Promise(function(resolve, reject) {
//   resolve(`Hello`);
// });

// setTimeout(function() {
//   console.log("setTimeout");
//   promise.then(function(value) {
//     console.log("promise in setTimeout");
//   });
// }, 0);

// promise.then(function(value) {
//   console.log("promise");
// });

// setTimeout(function() {
//   console.log("setTimeout next");
// }, 0);

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("promise setTimeout");
    Promise.resolve().then(()=>{
        console.log("promise setTimeout resolve then");
    });
    resolve(1);
  }, 0);
});

setTimeout(function() {
  console.log("setTimeout");
}, 0);

setTimeout(function() {
  console.log("setTimeout Next");
}, 0);

promise.then(function(value) {
  console.log("promise then");
});
