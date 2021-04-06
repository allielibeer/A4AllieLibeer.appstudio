
image.hidden = true

favBabyNames.onshow=function(){
    drpFavBaby.clear()
    for (i = 0; i < favNames.length; i++)
        drpFavBaby.addItem(favNames[i])
}

drpFavBaby.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else   
        drpStates.value = s
        lblFav.textContent = `Your favorite name is ${s}!`
        image.hidden = false
}