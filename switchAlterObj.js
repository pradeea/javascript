var result="";
var myData={

                "name":"mars",
                "age" : 15,
                "tail": 2,
                "bark":"bow-bow"
};

    
function switchAlterObj(val)
{
    var result=myData[val];

    return result;

}

console.log(switchAlterObj("name"));