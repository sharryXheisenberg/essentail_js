let someArray  = ["Mike" , "Shawn","mendes","eli"];

let notFound = true;
let i=0;
while(notFound && someArray.length>0){
    if(someArray[0]=="eli"){
        
        console.log(`Found her at index ${i}`);
        notFound = false;
        
    }else{
        someArray.shift();

    }
}