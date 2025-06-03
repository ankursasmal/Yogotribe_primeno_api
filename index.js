const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.json({"mess":"data come","success":true})
})
app.get('/prime/:no',async(req,res)=>{
     let {no}=req.params;
    console.log("no",no)
  try{
        let ans=true;

    for(let i=2;i<=Math.floor(no/2);i++){
        if(no%i===0){
ans=false;
break;
        }
    }
    res.json({"mess":"data come","success":true,  "number": no,
  "isPrime": ans
});
}
catch(e){
    res.json({"mess":"data not come","success":false,"error":true});

}
})

app.listen(PORT,()=>{
    console.log('connection successsfull:',PORT);
})