let test=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let flag=Math.random()>0.5;
    console.log(flag);
    if(flag){
      resolve(flag);
    }else{
      reject(flag)
    }
  },1000)
}).then(data=>{},err=>{
  console.log('catch '+err);
  return err
}).then(data=>{
  console.log('ok '+data);

},err=>{
  console.log('catch '+err)
})
console.log(test)
setTimeout(()=>{
  console.log(test)
},2000)