var Butterflies = [{
    "Image" : "http://127.0.0.1:5501/PeakcockPansy.png",
    "Price" : "100",
    "Name" : "PeakcockPansy"
},
{
    "Image" : "http://127.0.0.1:5501/Mourning_Cloak.png",
    "Price" : "200",
    "Name"  : "Mourning_Cloak"
},

{
    "Image" : "http://127.0.0.1:5501/cloudless_sulphur.png",
    "Price" : "150",
    "Name"  : "cloudless_sulphur"
},
{
    "Image" : "http://127.0.0.1:5501/colias_croceus.png",
    "Price" : "100",
    "Name"  : "colias_croceus"
},
{
    "Image" : "http://127.0.0.1:5501/blue_morpho.png",
    "Price" : "110",
    "Name"  : "blue_morpho"
},
{
    "Image" : "http://127.0.0.1:5501/zebra_butterfly.png",
    "Price" : "130",
    "Name"  : "zebra_butterfly"
},
{
    "Image" : "http://127.0.0.1:5501/birdwing.png",
    "Price" : "160",
    "Name"  : "birdwing"
},
{
    "Image" : "http://127.0.0.1:5501/skipper.png",
    "Price" : "230",
    "Name"  : "skipper"
}
]

Butterflies.map((ele)=>{
    // console.log(ele)


    var MyButterflies = `<div class="card">
            <div class="image-section">
                <img src=${ele.Image}>

            </div>

            <div class="content-section">
                <div class="price-section">Price : ${ele.Price} </div>
                <div class="brand-section">Name: ${ele.Name} </div>

            </div>
        </div>`
    
    console.log(MyButterflies)

    let ButterfliesView = document.getElementsByClassName("card-container")[0];
    ButterfliesView.innerHTML += MyButterflies;
})