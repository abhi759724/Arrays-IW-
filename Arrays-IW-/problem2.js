let name1="abhishek";
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newName='';
for(let i=0;i<name1.length;i++) {
  for(let j=0;j<upper.length;j++) {
    if(name1[i]==lower[j]) {
      newName+=upper[j];
    
    }
  }
}
console.log(newName);