var result="";
var myData={

                "name":"mars",
                "age" : 15,
                "tail": 2,
                "bark":"bow-bow"
};

    
function switchAlterObj(val)
{
    if(myData.hasOwnProperty(val))
    {
    
        var result=myData[val];

    return result;
    }

    else
    {
        return 'not found';
    }
}

console.log(switchAlterObj("canteen"));