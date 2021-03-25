var photos = [
    {
        name: 'Photo1',
        imgsrc: 'img/1.png'

    },
    {
        name: 'Photo2',
        imgsrc: 'img/2.png'
    }
    // {
    //     name:'Photo3',
    //     imgsrc:'img/3.png'               //Fotoğraf Eklemek İstediğinizde Buraya İsmini ve Yolunu Ekleyin.
    // }
];                                              
duration = '200';           //Hızını Ayarlayın

var slaytCount = photos.length;
index=0;
function set(i){
    index=i;
    if(index>=slaytCount){index=0;}
    document.querySelector('.img-thumbnail').setAttribute('src',photos[index].imgsrc);
}
setInterval(function(){
    set(index);index++;
    
},duration)

