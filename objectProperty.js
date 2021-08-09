
const Name=[];
const students = [
    
     {id :21,name : 'John '  }, 
     {id :22,name : 'micale '  }, 
     {id :23,name : 'warner '  }, 
     {id :24,name : 'bond '  }, 
     {id :25,name : 'jony'  },   

]

//for (i =0; i<students.length; i++) {

   // const  element = students[i];
    // Name.push(element.name); 
//}

//console.log(Name); 

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
console.log (names,ids);








