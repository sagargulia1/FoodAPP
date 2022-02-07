var database = [
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/urtpqw1487341253.jpg",
        name:"Baingan Bharta", 
        Price:"190$",
        id:"1",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/wyxwsp1486979827.jpg",
        name:"Chicken Handi", 
        Price:"260$",
        id:"2",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/wuxrtu1483564410.jpg",
        name:"Dal fry", 
        Price:"420$",
        id:"3",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/sywrsu1511463066.jpg",
        name:"Kidney Bean Curry", 
        Price:"300$",
        id:"4",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/xrttsx1487339558.jpg",
        name:"Lamb Biryani", 
        Price:"260$",
        id:"5",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/vvstvq1487342592.jpg",
        name:"Lamb Rogan josh", 
        Price:"310$",
        id:"6",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/xxpqsy1511452222.jpg",
        name:"Matar Paneer", 
        Price:"450$",
        id:"7",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/yxsurp1511304301.jpg",
        name:"Nutty Chicken Curry", 
        Price:"310$",
        id:"8",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/uwxusv1487344500.jpg",
        name:"Recheado Masala Fish", 
        Price:"410$",
        id:"9",
        button:"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/1550441275.jpg",
        name:"Smoked Haddock Kedgeree", 
        Price:"280$",
        id:"10",
        button :"Add to Cart",
    },
    {
        image:"https:\/\/www.themealdb.com\/images\/media\/meals\/qptpvt1487339892.jpg",
        name:"Tandoori chicken", 
        Price:"490$",
        button:"Add to Cart",
    },
]
let img= JSON.parse(localStorage.getItem("image"));

localStorage.setItem("menu",JSON.stringify(database))

JSON.parse(localStorage.getItem("menu"))

displayData(database);

function displayData(database){
        document.querySelector("#menu").innerHTML="";
      database.map(function(ele){
         
       
    //    var parent=document.createElement("div");
    //    parent.setAttribute("id",parent)
        var child = document.createElement("div");
        child.setAttribute("id","child");
    
        var item = document.createElement("div");
        item.setAttribute("id","item");
    
        var avatar = document.createElement("img");
        avatar.setAttribute("src",ele.image);
        avatar.setAttribute("id","avatar");
    
        var h6=document.createElement("h4");
        h6.setAttribute("class","name");
        h6.textContent=ele.name;
        
        var p=document.createElement("p");
       p.setAttribute("class","price");
       p.textContent=ele.Price
    
        var p1= document.createElement("p");
        p1.textContent=ele.id;

        var p2= document.createElement("p");
        p1.textContent=ele.button;
    
      item.append(h6,p1,p)
        child.append(avatar,item)
    
        // parent.append(child,item)
    
        document.querySelector("#menu").append(child)
    //   document.querySelector("#menu").append(parent)
      }) 
    
    }