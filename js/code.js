window.addEventListener('load',bindEvent)
function bindEvent(){
    document.querySelector("#bt").addEventListener('click',doAjax);
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
function doAjax(){
    var txt=document.querySelector("#txt").value;
    var url=`https://api.giphy.com/v1/gifs/search?api_key=477KU4aQNgo78dawcv7IQkuFsMRUilol&q=${txt}&limit=8`;
    if(window.fetch){
        var promise =fetch(url);
        promise.then(response=>{
            response.json().then(data=>{
                printImage(data);
            })
        }).catch(err=>{
            console.log("Error is comming")
        })
    }
};       
