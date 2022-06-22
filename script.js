function task2() {
    let inputString = document.getElementById('namelist').value;
    let inputArray = [];
    inputArray = StringNamesToArray(inputString);
    console.log('input array=' + inputArray);
    let outputArray = [];
    outputArray = GetArrayWithotDuplicates(inputArray);
    console.log('output array='+outputArray);
    let resString = arrayToString(outputArray);
    console.log('resString='+resString);
    document.getElementById('resultlist').value = resString;
}

 function StringNamesToArray(str1) {
    let curName='';
    let ar=[];
    let indAr = 0;
    if (str1.length != 0)
    {
        for (let i=0; i < str1.length; i++){
            if (str1[i] != ' ')
            {
                curName = curName + str1[i];
                if (i == str1.length -1)
                {
                    ar[indAr] = curName;
                    break;
                }
            }
            else
            {
                ar[indAr] = curName;
                curName = '';
                indAr++;
            }
    }
    return ar;
    }
 }

function isSuchLetter(ar, c1)
{
    res = false;
    for (let k=0; k < ar.length; k++)
    {
        if (ar[k][0] == c1)
        {
            res = true;
            break;
        }
    }
    return res;
}   

function GetArrayWithotDuplicates(inputArray)
{
    let arRez = [];
    if (inputArray.length > 0)
    {
        arRez[0] = inputArray[0];
        let r = 1;
        for (let i=1; i < inputArray.length; i++)
        {
            if (!isSuchLetter(arRez, inputArray[i][0]))
            {
                arRez[r] = inputArray[i];
                r++;
            }
        } 
    }
    return arRez;
}

function arrayToString(ar)
{
    let strRez = '';
    for (let k=0; k < ar.length; k++)
    {
        strRez = strRez + ar[k]+' ';
    }
    return strRez;
}
