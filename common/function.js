async function load_script(name){
    // window.location.href="./pl.html#pl="+name;
    
	window.msgs.innerHTML="正在 注入"+name;

	await run_PL(name);
	await sleep(1000);
	poc();
};
async function load_jb(){
    pl_ver=document.getElementById("oneclick").value;
	window.msgs.innerHTML="正在执行 漏洞利用";

    // window.location.href="./pl.html#pl="+pl_ver;
	await run_PL(pl_ver);
	await sleep(1000);
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
// function getHashParams()
// {
//     var ans = {};
//     var p = document.location.hash.substr(1).split("&");
//     for(var i = 0; i < p.length; i++)
//     {
//         var kv = p[i].split('=');
//         var k = kv.shift();
//         ans[k] = decodeURIComponent(kv.join('='));
//     }
//     return ans;
// }

const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});

async function run_PL(pl_name){
    var payload = await getfile(pl_name);
    pl_pass = await new Response(payload).arrayBuffer();
    var tmp = new Uint8Array(pl_pass.byteLength);
    tmp.set(new Uint8Array(payload), 0);
    window.pl_pass = new Uint32Array(tmp);
}

// once=async function(){
// await sleep(1000);
// poc();
// }
