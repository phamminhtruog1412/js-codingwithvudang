var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    getName: function(){
      return this.firstName;
    },
    listGirl:["Lan","Thanh","Nga"],
    setAge : function(age){
      return this.age=age;
    }
  }
 
console.log(person.firstName)