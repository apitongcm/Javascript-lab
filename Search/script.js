
const employees = [
    {firstName:"meeve", image:"person1.jfif" },
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"howard", image:"person2.jfif"},
    {firstName:"hansel", image:"person3.jfif"}
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
    myimage.src = `./src/${person.image}`;
    myimage.classList.add("employees-image");
    mycard.appendChild(myimage);
     
    const mytext = document.createElement("p");
    mytext.innerText = person.firstName;
    mycard.appendChild(mytext);

})

const employeesList = document.getElementsByClassName("employees-card");

search.addEventListener( "keyup", (event) =>{
    let searchQueue = event.target.value.toLowerCase();

    for(let i = 0; i < employees.length; i++)
    {
        if(!employees[i].firstName.includes(searchQueue))
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








