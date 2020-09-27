function switchExam(val)
{
        var answer="";

        switch(val)
        {
            case 1:
                return 'this is just a sample'
                break;

            case 2:
                return 'this is the first one '
                break;

            case 3:
                return 'this is the second one'
                break;
            
            case 4:
                return 'this is the last one'
                break;
                
        }

        return answer;
}

console.log(switchExam(4));