function cart()
{
    window.location.href="cart.html"
}

var dish =[{ name : "Momo",price : 80 , url : "https://b.zmtcdn.com/data/pictures/3/18354613/2918e797290cddf58d64d9ae69622977_o2_featured_v2.jpg?output-format=webp"},
            { name :"Pocket Meal", price: 99 , url : "https://b.zmtcdn.com/data/pictures/chains/8/19494148/2a2af3c175e62e7b7a4226deef62eeac_o2_featured_v2.jpg?output-format=webp"},
            { name :"Pizza", price: 150 , url : "https://b.zmtcdn.com/data/pictures/chains/7/20407/ba50a5176f9b3abf84a4b734543474a2_o2_featured_v2.jpg?output-format=webp"}]

dish.map(function(elem){
    var d = document.createElement("div");
    var im = document.createElement("img");
    var ds = document.createElement("p");
    var pr = document.createElement("p");
    var ad = document.createElement("button")
    ad.innerHTML="Add to cart";

    im.src = elem.url;
    ds.innerHTML = elem.name;
    pr.innerHTML = "Rs-"+ elem.price;

    d.append(im,ds,pr,ad)

    var box = document.querySelector("#men");

    box.append(d);



})



