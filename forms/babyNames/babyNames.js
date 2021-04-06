let favNames = []

btnSubmit2.onclick=function(){
    if (selNames2.text.length > 5)
        NSB.MsgBox("only the first 5 will save")
    
    for (i = 0; i < 5; i++)
        favNames.push(selNames2.text[i])
    
    ChangeForm(favBabyNames)
}