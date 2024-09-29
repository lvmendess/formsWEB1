function selectOnlyThis(id) {
    for (var i = 1;i <= 3; i++){
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function coffee(id){
    if(id==3){
        for (var i = 1;i <= 3; i++){
            document.getElementById("torra"+i).disabled = true;
        }
    }else{
        for (var i = 1;i <= 3; i++){
            document.getElementById("torra"+i).disabled = false;
        }
    }
}