async function load_script(name){
    // window.location.href="./pl.html#pl="+name;
    
	window.msgs.innerHTML="正在 注入"+name;

    await sleep(1500);
	await run_PL(name);
	poc();
};
async function load_jb(){
    pl_ver=document.getElementById("oneclick").value;
	window.msgs.innerHTML="正在执行 漏洞利用.<br>成功后 如提示内存不足,请无视.";

    // window.location.href="./pl.html#pl="+pl_ver;
    await sleep(1500);
	await run_PL(pl_ver);
	poc();

};

function change_oneclick(idx,name,val){
    document.getElementById(idx).innerHTML=name;
    document.getElementById(idx).value=val;
    localStorage.setItem(idx+"Name", name);
    localStorage.setItem(idx+"VAL", val);
    return;
};

// var pl_name = getHashParams()['pl'];

async function getfile(path) {
    var file = await fetch("./pl/"+path+".bin");
    if(file.ok){
        data = await file.arrayBuffer();
        return data;
    }
    return ''
}


const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});

async function run_PL(pl_name){
    var payload = await getfile(pl_name);
    var pl_s = await new Response(payload).arrayBuffer();
    window.pl_buf = new Uint32Array(pl_s);
    if(pl_name=='fan-threshold'){
        let degree=window.degree.value;
        window.pl_buf[1860] = degree;
    }
}

