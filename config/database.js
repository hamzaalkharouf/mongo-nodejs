const mongoose =require ('mongoose')
let db =mongoose.connect('mongodb://localhost:27017/Zajel', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{

    if (err){
        console.log(err)
    }else{
        console.log('connnected to db succesfuly ..!')
    }

});

