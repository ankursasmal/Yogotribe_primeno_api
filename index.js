const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.json({"mess":"data come","success":true})
})
app.get('/prime/:no',async(req,res)=>{
     let num=req.params.no;
      
  try{
    // if i use regex then handel all char except 0 to 9 numbers 
     if((num[0]>='a' && num[0]<='z') || (num[0]>='A' && num[0]<='Z') ){
        throw new Error('enter no type');
     } 
    let ans=true;

    for(let i=2;i<=Math.floor(no/2);i++){
        if(no%i===0){
ans=false;
break;
        }
    }
    res.json({"mess":"data come","success":true,  "number": num,
  "isPrime": ans
});
}
catch(e){
    res.json({"mess":e.message,"success":false,"error":true});

}
})

app.listen(PORT,()=>{
    console.log('connection successsfull:',PORT);
})