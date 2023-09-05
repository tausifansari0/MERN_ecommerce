const express = require('express');
const mongoose = require('mongoose');
const PORT=8080
const { Schema }=mongoose;
const app = express();
const cors =require('cors');
const json=require('body-parser').json;
app.use(cors())
app.use(express.json());

const productSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    color: { type: String, enum: ['red', 'green', 'black'], required: true },
    size: { type: String, enum: ['S', 'M', 'L'], required: true },
    details: Object,
    image: { type: String, required: true },
    images: { type: [String], required: true }
}, { timestamps: true });

const cartSchema = new Schema({
    items: { type: [Object], required: true ,default:[]},
    userId: {type:String,default:1}
}, { timestamps: true });

const userSchema = new Schema({
    name :String,
    email : String,
    addresses : [Object],
    orders: [Object],
}, { timestamps: true });

const Product =new mongoose.model('Product',productSchema)
const Cart=new mongoose.model('Cart',cartSchema)
const User=new mongoose.model('User',userSchema)

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/');
    console.log('Server Connected');
}


// app.get('/createProduct',(req,res)=>
// {
//     let product=new Product({
//         name :'Apple iPhone 11',
//           price: 799.75,
//           category: 'Mobile',
//           rating:4,
//           color:'black',
//           size : 'M',
//           details : {
//               product :"",
//               warranty : "",
//               merchant:""
//           },
//           image:'product-3-square',
//           images :['product-3','product-3-2','product-3-3']
//     })
//     product.save().then((success)=>{
//         res.send(success)
//     }).catch(err=>{
//         res.send(err)
//     })
    
// })

// app.get('/createUser',(req,res)=>{
//     let user=new User({
//         name: 'John',
//         email:'demo@example.com',
//         orders:[],
//         addresses:[]
//     });
//     user.save().then(usr=>{
//         res.send(usr);
//     })
// }); 

app.get('/user',(req,res)=>{
    User.findOne({}).then(result=>{
        res.send(result);
    })
});

app.get('/product',(req,res)=>
{
    Product.find({}).then(result=>{
        res.send(result);
    })
    
})

app.post('/cart',(req,res)=>
{
    const userId="64f633f2c0b9d51297cb0b82";
    const item=req.body.item;
    if(!item.quantity){
        item.quantity=1;
    }
    Cart.findOne({userId:userId}).then(result=>{
        if(result){
            const itemIndex=result.items.findIndex(it=>it._id===item._id);
            if(itemIndex>=0){
                result.items.splice(itemIndex,1,item);
            }
            else{
                result.items.push(item);
            }
            result.save().then(cart=>{
                res.send(cart);
            })
        } else{
            let cart=new Cart();
            cart.userId=userId;
            cart.items=[item];
            cart.save().then(cart=>{
                res.send(cart);
            })
        }
        
        
        
    })
    
})

app.get('/cart',(req,res)=>
{
    const userId="64f633f2c0b9d51297cb0b82";
   
    Cart.findOne({userId:userId}).then(result=>{
        if(result){
            res.send(result)
        }
        else{
            res.send({userId:"64f633f2c0b9d51297cb0b82",item:[]})
        }
    })
    
})

app.post('/removeItem',(req,res)=>
{
    const userId="64f633f2c0b9d51297cb0b82";
    const item =req.body.item;
    Cart.findOne({userId:userId}).then(result=>{
        const itemIndex=result.items.findIndex(it=>it._id===item._id);
        result.items.splice(itemIndex,1);
        result.save().then(cart=>{
            res.send(cart);
        })
    })
    
})

app.post('/emptyCart',(req,res)=>
{
    const userId="64f633f2c0b9d51297cb0b82";
    Cart.findOne({userId:userId}).then(result=>{
        result.items=[];
        result.save().then(cart=>{
            res.send(cart);
        })
    })
    
})

app.post('/updateUserAddress',(req,res)=>{
    const userId="64f633f2c0b9d51297cb0b82";
    const address=req.body.address;
    User.findOne({_id:userId}).then((user)=>{
        user.addresses.push(address);
        user.save().then(user=>{
            res.send(address);
        })
    })
})

app.post('/order',(req,res)=>{
    const userId="64f633f2c0b9d51297cb0b82";
    const order=req.body.order;
    User.findOne({_id:userId}).then((user)=>{
        user.orders.push(order);
        user.save().then(user=>{
            res.send(order);
        })
    })
})


app.listen(PORT,()=>{
    console.log('listen on PORT:',PORT)
    main().catch(err => console.log(err));
})