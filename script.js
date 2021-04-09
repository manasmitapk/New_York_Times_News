let container = document.body;

let div_1 = document.createElement("div");
div_1.setAttribute("style","width: 100%; height:auto;");
div_1.setAttribute("class","container");
container.appendChild(div_1);

let headerDiv = document.createElement("div")
headerDiv.setAttribute("class","container")
headerDiv.setAttribute("style","text-align:center;")
div_1.appendChild(headerDiv);

let header = document.createElement("h1");
header.setAttribute("class","h1");
header.setAttribute("style","fort-size: 50px");
header.innerText = "THE PERTINENT TIMES ";
headerDiv.appendChild(header);


/*------------Nav Bar---------------*/

let navigationBar = document.createElement("nav");
navigationBar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light");
navigationBar.setAttribute("style","border-top:1px solid black;border-bottom:1px solid black;");
div_1.appendChild(navigationBar);


let navbar_button = document.createElement("button");
navbar_button.setAttribute("class","navbar-toggler");
navbar_button.setAttribute("type","button");
navbar_button.setAttribute("data-toggle","collapse");
navbar_button.setAttribute("data-target","#navbar");
navbar_button.setAttribute("aria-controls","navbar");
navigationBar.appendChild(navbar_button);

let navbar_button_span1 = document.createElement("span");
navbar_button_span1.setAttribute("class","navbar-toggler-icon");
navbar_button.appendChild(navbar_button_span1);

let nav_bar_div = document.createElement("div");
nav_bar_div.setAttribute("class","collapse navbar-collapse justify-content-center");
nav_bar_div.setAttribute("id","navbar");
navigationBar.appendChild(nav_bar_div);

let navList = document.createElement("ul");
navList.setAttribute("class","navbar-nav");
nav_bar_div.appendChild(navList);

let list1 = document.createElement("li");
list1.setAttribute("class","nav-item");
let homeBtn = document.createElement("a");
homeBtn.setAttribute("class", "nav-link btn");
homeBtn.setAttribute("style", "color: Black");
homeBtn.setAttribute("id", "home");
homeBtn.innerText="HOME";
homeBtn.addEventListener("click",function(){
    processData("home")
});
list1.appendChild(homeBtn);
navList.appendChild(list1); 

let list2 = document.createElement("li");
list2.setAttribute("class","nav-item");
let worldBtn = document.createElement("a");
worldBtn.setAttribute("class", "nav-link btn");
worldBtn.setAttribute("style", "color: Black");
worldBtn.setAttribute("id", "world");
worldBtn.innerText="WORLD";
worldBtn.addEventListener("click",function(){
    processData("world")
});
list2.appendChild(worldBtn);
navList.appendChild(list2);

let list3 = document.createElement("li");
list3.setAttribute("class","nav-item");
let politicsBtn = document.createElement("a");
politicsBtn.setAttribute("class", "nav-link btn");
politicsBtn.setAttribute("style", " color: Black");
politicsBtn.setAttribute("id", "politics");
politicsBtn.innerText="POLITICS";
politicsBtn.addEventListener("click",function(){
    processData("politics")
});
list3.appendChild(politicsBtn);
navList.appendChild(list3); 

let list4 = document.createElement("li");
list4.setAttribute("class","nav-item");
let magazineBtn = document.createElement("a");
magazineBtn.setAttribute("class", "nav-link btn");
magazineBtn.setAttribute("style", " color: Black");
magazineBtn.setAttribute("id", "magazine");
magazineBtn.innerText="MAGAZINE";
magazineBtn.addEventListener("click",function(){
    processData("magazine")
});
list4.appendChild(magazineBtn);   
navList.appendChild(list4);

let list5 = document.createElement("li");
list5.setAttribute("class","nav-item");
let technologyBtn = document.createElement("a");
technologyBtn.setAttribute("class", "nav-link btn");
technologyBtn.setAttribute("style", " color: Black");
technologyBtn.setAttribute("id", "technology");
technologyBtn.innerText="TECHNOLOGY";
technologyBtn.addEventListener("click",function(){
    processData("technology")
});
list5.appendChild(technologyBtn);
navList.appendChild(list5);  

let list6 = document.createElement("li");
list6.setAttribute("class","nav-item");
let scienceBtn = document.createElement("a");
scienceBtn.setAttribute("class", "nav-link btn");
scienceBtn.setAttribute("style", " color: Black");
scienceBtn.setAttribute("id", "science");
scienceBtn.innerText="SCIENCE";
scienceBtn.addEventListener("click",function(){
    processData("science")
});
list6.appendChild(scienceBtn); 
navList.appendChild(list6);  

let list7 = document.createElement("li");
list7.setAttribute("class","nav-item");
let healthBtn = document.createElement("a");
healthBtn.setAttribute("class", "nav-link btn");
healthBtn.setAttribute("style", "color: Black");
healthBtn.setAttribute("id", "health");
healthBtn.innerText="HEALTH";
healthBtn.addEventListener("click",function(){
    processData("health")
});
list7.appendChild(healthBtn); 
navList.appendChild(list7);

let list8 = document.createElement("li");
list8.setAttribute("class","nav-item");
let sportsBtn = document.createElement("a");
sportsBtn.setAttribute("class", "nav-link btn");
sportsBtn.setAttribute("style", " color: Black");
sportsBtn.setAttribute("id", "sports");
sportsBtn.innerText="SPORTS";
sportsBtn.addEventListener("click",function(){
    processData("sports")
});
list8.appendChild(sportsBtn); 
navList.appendChild(list8);

let list9 = document.createElement("li");
list9.setAttribute("class","nav-item");
let artsBtn = document.createElement("a");
artsBtn.setAttribute("class", "nav-link btn");
artsBtn.setAttribute("style", "color: Black");
artsBtn.setAttribute("id", "arts");
artsBtn.innerText="ARTS";
artsBtn.addEventListener("click",function(){
    processData("arts")
});
list9.appendChild(artsBtn); 
navList.appendChild(list9);

let list10 = document.createElement("li");
list10.setAttribute("class","nav-item");
let fashionBtn = document.createElement("a");
fashionBtn.setAttribute("class", "nav-link btn");
fashionBtn.setAttribute("style", "color: Black");
fashionBtn.setAttribute("id", "fashion");
fashionBtn.innerText="FASHION";
fashionBtn.addEventListener("click",function(){
    processData("fashion")
});
list10.appendChild(fashionBtn); 
navList.appendChild(list10);

let list11 = document.createElement("li");
list11.setAttribute("class","nav-item");
let foodBtn = document.createElement("a");
foodBtn.setAttribute("class", "nav-link btn");
foodBtn.setAttribute("style", " color: Black");
foodBtn.setAttribute("id", "food");
foodBtn.innerText="FOOD";
foodBtn.addEventListener("click",function(){
    processData("food")
});
list11.appendChild(foodBtn); 
navList.appendChild(list11);

let list12 = document.createElement("li");
list12.setAttribute("class","nav-item");
let travelBtn = document.createElement("a");
travelBtn.setAttribute("class", "nav-link btn");
travelBtn.setAttribute("style", " color: Black");
travelBtn.setAttribute("id", "travel");
travelBtn.innerText="TRAVEL";
travelBtn.addEventListener("click",function(){
    processData("travel")
});
list12.appendChild(travelBtn);
navList.appendChild(list12);

let main_div = document.createElement("div")
main_div.setAttribute("class","container")

container.appendChild(main_div);

/*------------- News Portion -------------*/
let apiKey = "mD6esAQe0R46Y92PMvuiIlOTeuGeTfXu"

async function getData(url){
    let data = await fetch(url);
    let arr = await data.json();
    return arr;
}

async function processData(section){
    main_div.innerHTML=""
    let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
    data = arr["results"]
    for(i of data){
let div_2 = document.createElement("div");
div_2.setAttribute("style","margin-top:30px;width:100%;");
div_2.setAttribute("class","container");
div_1.appendChild(div_2);
main_div.append(div_2);

var row = document.createElement("div");
row.setAttribute("class","row");
div_2.append(row);

let cardDiv = document.createElement("div");
cardDiv.setAttribute("class","card");
cardDiv.setAttribute("style","width:100%;");
row.append(cardDiv);

let dataRow = document.createElement("div");
dataRow.setAttribute("class", "row card-body");
cardDiv.append(dataRow);

let leftData = document.createElement("div");
leftData.setAttribute("class","col-md-8");
dataRow.append(leftData);

let rightData = document.createElement("div");
rightData.setAttribute("class","col-md-4");
rightData.setAttribute("style","text-align:right");
dataRow.append(rightData);

let secCard = document.createElement("div");
secCard.setAttribute("class","sectioncard");
secCard.innerHTML = section.toUpperCase();
leftData.append(secCard);

let titleCard = document.createElement("div");
titleCard.setAttribute("class","titlecard");
titleCard.innerHTML = i["title"];
leftData.append(titleCard);

let dateCard = document.createElement("div");
dateCard.setAttribute("class","datecard");
dateCard.innerHTML = i["published_date"];
leftData.append(dateCard);

let abstractCard = document.createElement("div");
abstractCard.setAttribute("class","abstractcard");
abstractCard.innerHTML = i["abstract"];
leftData.append(abstractCard);

let contReading = document.createElement("a");
contReading.setAttribute("class","continueReading");
contReading.setAttribute("href",`${i["url"]}`);
contReading.innerHTML = "Continue reading";
leftData.append(contReading);

let newsImg = document.createElement("img");
newsImg.setAttribute("class","img-thumbnail");
newsImg.setAttribute("src",`${i["multimedia"][1]["url"]}`);
newsImg.setAttribute("style"," width:250px;height:150px;");
rightData.appendChild(newsImg);
    }

}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("home").click()
   });
