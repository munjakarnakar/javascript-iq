const obj = {
    value: 10,
    regularFunction: function() {
      console.log(this.value); // Works: 'this' refers to 'obj'
    },
    arrowFunction: () => {
      console.log(this.value); // Doesn't work as expected: 'this' is inherited from the surrounding context
    }
  };
  
  obj.regularFunction(); // Output: 10
  obj.arrowFunction(); // Output: undefined


  function regularFn(){
    console.log(arguments)
  }

  regularFn(1,2,3,4)