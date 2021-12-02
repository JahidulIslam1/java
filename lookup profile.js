var contacts = [
    {
         "firstName" : "Jahidul",
         "lastName" : "Islam",
         "number" : "001210022",
         "likes" : ["burger","pizza","khichuri"]   
    },
    {
        "firstName" : "Muntasir",
        "lastName" : "Mahmud",
        "number" : "0017525",
        "likes" : ["coke","dew","chicken"]   
   },
   {
    "firstName" : "Farhan",
    "lastName" : "Shahariar",
    "number" : "001654264",
    "likes" : ["Rich","Khichuri","chicken"]   
}
];
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){

         return contacts[i][prop] || "No Such Property"
        }
    }
return "No Such Contact";
} 

var data = lookUpProfile("Jahidul","number");
console.log(data);