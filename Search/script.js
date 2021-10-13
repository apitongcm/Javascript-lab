
const employees = [
    {code:"the boyz official lightstick for concert", title:"The Boyz Official Lightstick for concert", price:1850 , image:'https://pbs.twimg.com/media/E_pjCmGVUAEAdYN?format=jpg&name=large', type:"lightstick" },
    {code:"txt shine x together fanlive dvd",title:"TXT  Shine X Together Fanlive DVD (Take all)", price:1100, image:'https://pbs.twimg.com/media/E-haYI6VkAIgBWB?format=jpg&name=large', type:"other"},
    {code:"nct 2020 resonance pt.2 md",title:"NCT 2020 RESONANCE PT. 2 MD", price:830, image:'https://pbs.twimg.com/media/E2Rfn6YVcAEJnnr?format=jpg&name=large', type:"photocard"},
    {code:"random nct renjun merch",title:"Random NCT Renjun Merch(Take all)",price:750,image:"https://pbs.twimg.com/media/Eyca5bSUUAIWnHM?format=jpg&name=large",type:"other"},
    {code:"nct renjun arrival and we boom we version",title:"RENJUN ARRIVAL + WE BOOM WE VER Photocard",price:760,image:"https://pbs.twimg.com/media/ExEcH7EU8Acvw6M?format=jpg&name=large",type:"photocard"},
    {code:"jisung clio photocard (mild version)",title:"Jisung Clio Photocard (Mild Version)",price:550,image:"https://pbs.twimg.com/media/Ezjsjc5VIAUQXKW?format=jpg&name=large",type:"photocard"},
    {code:"txt tomorrow by together freeze photocards", title:"TXT Tomorrow by Together FREEZE PHOTOCARDS(each)", price:250, image:'https://pbs.twimg.com/media/E8fYIskVUAEVJSj?format=jpg&name=large', type:"postcard"},
    {code:"sealed nct dream renjun back to school kit", title:"Sealed NCT DREAM Renjun BACK TO SCHOOL KIT", price:1350, image:'https://pbs.twimg.com/media/E2Ma3j_VIAA-MZE?format=jpg&name=large', type:"other"}
];

const container = document.getElementById("card");
const search = document.getElementById("search");


console.log(employees);
console.log(employees[0].image);


employees.forEach( person => {
    const mycard = document.createElement("div");
    mycard.classList.add("employees-card");
    mycard.setAttribute("id", person.firstName);
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

const employeesList = document.getElementsByClassName("employees-card");

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
            console.log(employees[i].firstName);
            employeesList[i].style.display="block";
        }
    }
    
});








