/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if(fileName[0] === '#' || fileName.includes('.pdf') || fileName.includes('.docx')){
    console.log(fileName + ' Store')
}

else{
    console.log(fileName + ' Delete');
}
// ====================

// if(fileName.includes("pdf") || fileName.includes("docx") ||fileName.includes("#")){
//     console.log("Store");
// }
// else{
//     console.log("Delete");
// }

// =================

// var fileName = "docx.txt";
// for (var i = 0; i < fileName.length; i++) {
//     var fileName = fileName[i];

//     if (fileName[0] === '#' || fileName.includes('.pdf') || fileName.includes('.docx')) {
//         console.log(fileName + ' Store');
//     }
//     else {
//         console.log('fileName [i]' + ' Delete');
//     }
// } 