let arr=["seven","eight","nine","del","four","five","six","plus","one","two","three","minus","dot","zero","frontslah","multiply","reset","equal"]
let number=[7,8,9,"DEL",4,5,6,"+",1,2,3,"-",".",0,"/","*","RESET",'=']
let value =document.querySelector(`.calculator .number `)
let screen=document.querySelector(`.screen`)
const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;



const div =(a,arr,number)=>{
    let value="";
    for(let i=0;i<a;i++)
    {
        value +=`<div class="${arr[i]}"><h1></h1></div>`
    }
    return value; 
}






value.innerHTML=div(arr.length,arr,number);
let h1=document.querySelectorAll(`.calculator .number div `)
for(let i=0;i<h1.length;i++)
{
    h1[i].textContent=number[i];
}
let divi=document.querySelectorAll(`.calculator .number div`)
console.log(divi);
function print(i) {
  //  for(let i=0;i<divi.length;i++)
   // {
        console.log(divi[i].textContent);
   // }
}
function test(s) {
    return re.test(s);
}
  
let str=" ";
for(let i=0;i<divi.length;i++)
{
    divi[i].addEventListener(`click`,(e)=>{
        
        
        
        if(e.target.innerHTML==='=')
        {
            // str=str.substring(0,str.length()-1)
            if (test(str)==true) {
                screen.textContent=`${eval(str)}`;

            }
            else{
                screen.textContent="Error in input";

            }
            

        }
        else if(e.target.innerHTML=="RESET")
        {
            screen.textContent="";
            str="";
        }
        else if(e.target.innerHTML=="DEL")
        {
            str=str.substring(0,str.length-1)
            screen.textContent=str;
        }

        else{
            str=str+e.target.innerHTML;
            screen.textContent=`${str}`
        }
    })
}

