function load_script(name){
    window.location.href="./pl.html#pl="+name;
};
function load_jb(){
    var pl_ver=document.getElementById("oneclick").value;
    window.location.href="./pl.html#pl="+pl_ver;
};

function change_oneclick(idx,name,val){
    document.getElementById(idx).innerHTML=name;
    document.getElementById(idx).value=val;
    localStorage.setItem(idx+"Name", name);
    localStorage.setItem(idx+"VAL", val);
    return;
};

