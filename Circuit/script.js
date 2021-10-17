const resistorColor = [
    {color:"black", value:'0', multiplier:1, tolerance:20 },
    {color:"brown", value:'1', multiplier:10, tolerance:1},
    {color:"red", value:'2', multiplier:100, tolerance:2},
    {color:"orange", value:'3', multiplier:1000, tolerance:3},
    {color:"yellow", value:'4', multiplier:10000, tolerance:100},
    {color:"green", value:'5', multiplier:100000, tolerance:0.5},
    {color:"blue", value:'6', multiplier:1000000, tolerance:0.25},
    {color:"violet", value:'7', multiplier:10000000, tolerance:0.1},
    {color:"gray", value:'8', multiplier:100000000, tolerance:0.05},
    {color:'white', value:'9', multiplier:1000000000, tolerance:10},
    {color:'gold', value:null, multiplier:null, tolerance:5},
    {color:'silver', value:null, multiplier:null, tolerance:10},
];

console.log(resistorColor[0].color);
console.log(resistorColor[3].multiplier);  
const priColor =resistorColor[2].value;
const secColor =resistorColor[5].value;
const resistVal = priColor + secColor;
const finalResistance = parseInt(resistVal) * resistorColor[3].multiplier;
console.log(finalResistance);
