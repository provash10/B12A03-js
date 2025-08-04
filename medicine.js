

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for( var i = 1; i <=lastDay; i++){
    if((i-3) % 3 === 0) {
        // console.log(i + " - medicine");
        console.log(i + " - " + "medicine" );
    }
    else{
        //  console.log(i + " - rest");
        console.log(i + " - " + "rest" );
    }
}