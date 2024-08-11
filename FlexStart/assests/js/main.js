// document.querySelector('btn').onclick=function(){
//     document.querySelector('head link : last-of-type')
//     .setAttribute('href',assest/css/dark_mode.css)
// }
// window.onscroll=function(){
//     if(window.scrollY < 600){
//         document.querySelector('.btn-top').style.opacity=0

//     }else{
//         document.querySelector('.btn-top').style.opacity=1
//     }
// }
// document.querySelector('.btn-top').onclick=function(){
//     window.scrollTo({top:0})

// }

// let colors = document.querySelector('.modes li');
// for (color of colors){
    
//     color.onclick=function(){
//         let color_type =event.target.getAttribute(color)
//         document.querySelector('head link :last-of-type').setAttribute('href','assests/css'+color_type+'.css')
//     }
// }
window.onscroll =function()
{
    if(window.scrollY>200){
        document.querySelector('.top-btn').style.opacity=1;
    }else{
        document.querySelector('.top-btn').style.opacity=0;
    }
}
document.querySelector('.top-btn').onclick=function(){
    window.scrollTo({top:0})
}
document.querySelector('.faq-toggle').onclick=function(){
    document.querySelector('.section_8 .faq-container .faq-item .faq-content').style.cssText='visibility : visible; opacity :1 ' 
    // document.querySelector('.faq-toggle').classList.toggle('<i class="ri-arrow-down-s-line"></i>')


}


let lis =document.querySelectorAll('li')
for(let li of lis){
    li.onclick=function(){
        let type =event.target.innerHTML;
       
        let related_imges=document.querySelectorAll('.layout .galary .container .row .'+type)
       
        let all_imges= document.querySelectorAll('.galary .row > div')
        for(let imge of all_imges){
            imge.style.display='none'
        }
       
            for(let image of related_imges)
        image.style.display='block'
            
      
}}