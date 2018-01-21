/*var BGPage = chrome.extension.getBackgroundPage();

var data = BGPage.popupView

switch (data.status){
    case 'off':
        document.getElementById('offStatus').style.display = 'block';
        document.getElementById("tips").textContent=data.warming;
        break;
    case 'on':
        document.getElementById('onStatus').style.display = 'block';
        document.getElementById("tips").textContent=data.warming;
        if(data.speed == -1){
            document.getElementById("speedNum").innerHTML='<i class="weak">信号差</i>';
        }else if(data.speed == 0){
            document.getElementById("speedNum").innerHTML='<i class="weak">检测中</i>';
        }else{
            document.getElementById("speedNum").innerHTML=data.speed + '<i class="weak">&nbsp;KB/S</i>';
        }
        var useTime = Date.now() - data.startTime,
            useHour = Math.floor(useTime/3600000),
            useMint = Math.floor((useTime-useHour*3600000)/60000);
        if(useHour<10) useHour = '0'+useHour;
        if(useMint<10) useMint = '0'+useMint;
        document.getElementById("useTime").textContent=useHour+':'+useMint;
        break;
    default :
        console.error('这错误不可能');
}*/

var BGPage = chrome.extension.getBackgroundPage();

var data = BGPage.popupView;
console.log(data.status);
switch (data.status){
    case 'off':
        document.getElementById('offStatus').style.display = 'block';
        document.getElementById("tips").innerHTML=data.warming;
        break;
    case 'on':
        document.getElementById('onStatus').style.display = 'block';
        break;
    default :
        console.error('这错误不可能');
}

document.getElementById('versionNumber').innerText = chrome.runtime.getManifest().version;
document.getElementById('openMainWebsite').innerHTML = data.tips;
document.getElementById('settings').addEventListener('click', function(event){
    chrome.tabs.create({url:'/options.html'});
})