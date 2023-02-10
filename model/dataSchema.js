// productschema of products
const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  
    productname: {
        type: String

    },
    description:
    {
        type: String

    },
    category:
    {
        type: String

    },
    price:
    {
        type: Number

    },
    imageurl:
    {
        type: String

    },

    active: Boolean,

    date:
    {
        type: Date,
        default: Date.now

    }


});



const Data = new mongoose.model("Products", dataSchema);


// insert records
const insertDocument = async () => {
    const result = await Data.insertMany([
        {
            "pid": "1",
            "productname":"RED VELVET COFFEE" ,
            "description": "The trendy and delicious dalgona coffee in a hot new avatar",
            "category": "coffee",
            "price": "200",
            "imageurl": "https://www.shutterstock.com/image-photo/beautiful-red-velvet-caffe-latte-260nw-717771181.jpg",
          
        },
        {
            "pid": "2",
            "productname":"CAFE MOCHA" ,
            "description": "Warm your heart with an espresso layered with chocolate sauce ",
            "category": "coffee",
            "price": "220",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSmcPrPTTnzQUUQePmb6BUUTG32lCFSLNQg&usqp=CAU",
          
        },
        {
            "pid": "3",
            "productname":"CAPPUCCINO" ,
            "description": "Get things done with a dark espresso in thick milk foam",
            "category": "coffee",
            "price": "230",
            "imageurl": "https://www.aimeemars.com/wp-content/uploads/2020/03/IMG_9717.jpg",
          
        },
       
        {
            "pid": "4",
            "productname":"CAFE LATTE" ,
            "description": "Brewing happy moments with rich espresso and steamed milk",
            "category": "coffee",
            "price": "240",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8fiORFbexuNSdZOLy6i80PbyrqZaeWlXvQ&usqp=CAU",
          
        },
        {
            "pid": "5",
            "productname":"ESPRESSO" ,
            "description": "Power up your day with our all-time favourite black coffee ",
            "category": "coffee",
            "price": "260",
            "imageurl": "https://m.media-amazon.com/images/I/819PIaNAZcL.jpg",
          
        },
        {
            "pid": "6",
            "productname":"VANILLA LATTE" ,
            "description": "The usual latte goes unusual with a touch of rich vanilla flavour ",
            "category": "coffee",
            "price": "250",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_6pW8jf5TJEXWhoTZIucs1TGmK5i7KbHsA&usqp=CAU",
          
        },
        {
            "pid": "7",
            "productname":"CHOCOLATE MUFFIN" ,
            "description": "The best choice when you want food but chocolate is the mood",
            "category": "food",
            "price": "100",
            "imageurl": "https://marshasbakingaddiction.com/wp-content/uploads/2016/01/nutella-stuffed-double-chocolate-muffins-7-735x1103.jpg",
          
        },
        {
            "pid": "8",
            "productname":"CLASSIC GARLIC BREAD" ,
            "description": "A dish so classic ,its a perfect for every drink ",
            "category": "food",
            "price": "120",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLEpIW_mE2KUCY1vMO4qIWOvBs6UGRVYhg&usqp=CAU",
          
        },
        {
            "pid": "9",
            "productname":"CHILLI CHEESE TOAST" ,
            "description": "The toast to raise when your hunger's ablaze",
            "category": "food",
            "price": "130",
            "imageurl": "https://i1.wp.com/polkapuffs.in/wp-content/uploads/2018/06/chilly-cheese-grill-1-.jpeg.jpg",
          
        },
        {
            "pid": "10",
            "productname":"CORN'N'CHEESE SANDWICH" ,
            "description": "DElightful duo of corn n cheese sandwiched ",
            "category": "food",
            "price": "140",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa5Yw34UrrFWnoCoStUA08o4vyVHKAbiPNA&usqp=CAU",
          
        },
        {
            "pid": "11",
            "productname":"TANDOORI PANEER BUN" ,
            "description": "Spice it up with masala paneer in an soft bun",
            "category": "food",
            "price": "120",
            "imageurl": "https://images.slurrp.com/prod/recipe_images/better-butter/jumbo-tandoori-paneer-sago-patty-burger_DVB88RY8FSMDU2OREJ5O.webp",
          
        },
        {
            "pid": "12",
            "productname":"CHEESE TOMATO CROISSANT " ,
            "description": "Bright mornings,tomato N cheese stuffed in croissant",
            "category": "food",
            "price": "150",
            "imageurl": "https://i.pinimg.com/736x/10/08/d8/1008d80534a5da07058cc2f545466b10.jpg",
          
        },
       
    ]);
}

// insertDocument();



module.exports = Data;