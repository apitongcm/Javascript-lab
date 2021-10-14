
const employees = [
    {serial:"theboyzLS",code:"the boyz official lightstick for concert", title:"The Boyz Official Lightstick for concert", price:1850 , image:'https://pbs.twimg.com/media/E_pjCmGVUAEAdYN?format=jpg&name=large', type:"lightstick" },
    {serial:"TXTfanlive",code:"txt shine x together fanlive dvd",title:"TXT  Shine X Together Fanlive DVD (Take all)", price:1100, image:'https://pbs.twimg.com/media/E-haYI6VkAIgBWB?format=jpg&name=large', type:"other"},
    {serial:"NCTResPT2",code:"nct 2020 resonance pt.2 md",title:"NCT 2020 RESONANCE PT. 2 MD", price:830, image:'https://pbs.twimg.com/media/E2Rfn6YVcAEJnnr?format=jpg&name=large', type:"photocard"},
    {serial:"RanNCTRnjn",code:"random nct renjun merch",title:"Random NCT Renjun Merch(Take all)",price:750,image:"https://pbs.twimg.com/media/Eyca5bSUUAIWnHM?format=jpg&name=large",type:"other"},
    {serial:"NCTRnjnPC",code:"nct renjun arrival and we boom we version",title:"RENJUN ARRIVAL + WE BOOM WE VER Photocard",price:760,image:"https://pbs.twimg.com/media/ExEcH7EU8Acvw6M?format=jpg&name=large",type:"photocard"},
    {serial:"JsngPC",code:"jisung clio photocard (mild version)",title:"Jisung Clio Photocard (Mild Version)",price:550,image:"https://pbs.twimg.com/media/Ezjsjc5VIAUQXKW?format=jpg&name=large",type:"photocard"},
    {serial:"ThynBmgyFz",code:"taehyun/ beomgyu freeze weverse pob",title:"Taehyun / Beomgyu Freeze Weverse POB(each)",price:220,image:"https://pbs.twimg.com/media/E9X2pQeUUAUfSgL?format=jpg&name=large",type:"photocard"},
    {serial:"TXTtomFRZ",code:"txt tomorrow by together freeze photocards", title:"TXT Tomorrow by Together FREEZE PHOTOCARDS(each)", price:250, image:'https://pbs.twimg.com/media/E8fYIskVUAEVJSj?format=jpg&name=large', type:"postcard"},
    {serial:"NCTrnjnBCK",code:"sealed nct dream renjun back to school kit", title:"Sealed NCT DREAM Renjun BACK TO SCHOOL KIT", price:1350, image:'https://pbs.twimg.com/media/E2Ma3j_VIAA-MZE?format=jpg&name=large', type:"other"}
];


const employeesList = document.getElementsByClassName("employees-card");
const checkAll = document.getElementById("all");
const checkLight = document.getElementById("lightstick");
const checkPC = document.getElementById("photocards");
const checkOther = document.getElementById("others");
const container = document.getElementById("card");
const search = document.getElementById("search");


console.log(employees);
console.log(employees[0].image);


employees.forEach( person => {
    const mycard = document.createElement("div");
    mycard.classList.add("employees-card");
    mycard.setAttribute("id", person.serial);
    container.appendChild(mycard);

    const myimage = document.createElement("img");
    myimage.src = person.image;
    myimage.classList.add("employees-image");
    mycard.appendChild(myimage);
     
    const myItem = document.createElement("h5");
    myItem.innerText = person.title;
    mycard.appendChild(myItem);

    const myprice = document.createElement("h4");
    myprice.innerText = `₱ ${person.price}`;
    mycard.appendChild(myprice);

})



checkPC.addEventListener("click", (e) => {
    for(let i = 0; i < employees.length; i++)
    {
        if(employees[i].type != "photocard")
        {
            employeesList[i].style.display="none";
        }
        else
        {
            employeesList[i].style.display="block";
        }
    }
});

checkLight.addEventListener("click", (e) => {
    for(let i = 0; i < employees.length; i++)
    {
        if(employees[i].type != "lightstick")
        {
            employeesList[i].style.display="none";
        }
        else
        {
            employeesList[i].style.display="block";
        }
    }
});

checkOther.addEventListener("click", (e) => {
    for(let i = 0; i < employees.length; i++)
    {
        if(employees[i].type != "other")
        {
            employeesList[i].style.display="none";
        }
        else
        {
            employeesList[i].style.display="block";
        }
    }
});

checkAll.addEventListener("click", (e) => {
    for(let i = 0; i < employees.length; i++)
    {
            employeesList[i].style.display="block";
    }
});


search.addEventListener( "keyup", (event) =>{
    let searchQueue = event.target.value.toLowerCase();

    for(let i = 0; i < employees.length; i++)
    {
        if(!employees[i].code.includes(searchQueue))
        {
            employeesList[i].style.display="none";
           
        }
        else
        {
            employeesList[i].style.display="block";
        }
    }
    
});








