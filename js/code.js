window.addEventListener('load',bindEvent)
function bindEvent(){
    document.querySelector("#bt").addEventListener('click',doAjax2);
    document.querySelector("#record").addEventListener('click',speech)
}
function printImage(obj){
    var div=document.querySelector("#result");
    div.innerHTML='';
    var arr=obj.data;
    arr.forEach(ele=>
        div.appendChild(createImage(ele.images.original.url)));
}
function createImage(url){
    var image=document.createElement('img');
    image.src=url;
    image.className='size'
    return image;
    

}
function doAjax2(){
    var txt=document.querySelector("#txt").value;
    var url=`http://api.giphy.com/v1/gifs/search?api_key=477KU4aQNgo78dawcv7IQkuFsMRUilol&q=${txt}&limit=8`;
    if(window.fetch){
        var promise =fetch(url);
        promise.then(response=>{
            response.json().then(data=>{
                printImage(data);
            }).catch(err=>{
                console.log("Invalid Json",err);
            }).catch(e=>{
                console.log("server call error",e);
            }).finaliy(()=>{
                console.log("server time data fetching error")
            })
        })
    }else{
        console.log("fetch not supported in ur browser");
    }
}       
// function doAjax(){
//     var url=`http://api.giphy.com/v1/gifs/search?api_key=477KU4aQNgo78dawcv7IQkuFsMRUilol&q=${txt}&limit=8`;
    
//     console.log("Url is",url);

//     var http=new XMLHttpRequest();
//     //bind readySate init
//     http.onreadystatechange=function(){
//         console.log("state is ready",http.readyState,"status is",http.status);
//         if(http.readyState==4 && http.status==200){
//             var obj=JSON.parse(http.responseText);
//             console.log("Object is",obj);
//             printImage(obj)
//         }
//     }
//    http.open('GET',url);
//    http.send();
// }
// function speech(){
//     window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    
//     const recognitaion=new SpeechRecognition();
//     recognitaion.lang="en-GB";
//     recognitaion.onresult=(event)=>{
//         console.log("event is working",event);
//         document.querySelector('speechRecord').Value=event.results[0][0].transcript;
//     }
//     recognitaion.start();
// }

