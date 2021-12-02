var collection = {
     "1" :{
        "artist" : "Maroon 5",
        "title" : "Beautiful mistakes",
        "release_year" : 2021,
        "formates" : ["cd","mp3","lp"]   
    },

    "2" :{
        "artist" : "Shunno",
        "title" : "Behula",
        "release_year" : 2021,
        "formates" : ["cd","mp3","lp"]   
    },

    "3" :{
        "artist" : "Jubin",
        "title" : "Dil galti",
        "release_year" : 2021,
        "formates" : []   
    },

    "4" :{
        "artist" : "Himesh",
        "title" : "Suroor",
        "release_year" : 2021,
        "formates" : ["cd","mp3","lp"]   
    },

    "5" :{
        "artist" : "Alan walker"
    }

    };
//keep a copy of the collection for tests
    var collectionCopy = JSON.parse(JSON.stringify(collection));

    function updateRecords(id,prop,value) {
        if (value === "") {
            delete collection[id][prop];
        }
        else if(prop === "formates") {
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        }
        else{
            collection[id][prop] = value;
        }
        return collection;
    }
    updateRecords(2,"artist","test")
console.log(updateRecords(1,"artist","aaba"));