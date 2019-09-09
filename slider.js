let slider=document.getElementById('slider');
let image = slider.childNodes[3];

let arr_img=['s_1.JPG', 's_2.JPG', 's_3.JPG', 's_4.JPG'];

image.src='img/' + arr_img[0];
let k=0;

slider.addEventListener('click', nextimg, false);

function nextimg(event){
    let target = event.target;
    if(target.classList.contains('right_a')){
        if(k+1 > 3) k=0;
        image.src='img/' + arr_img[k+1];
        k++;
    }
    
    if(target.classList.contains('left_a')){
        if(k-1 < 0) k=3;
        image.src='img/' + arr_img[k-1];
        k--;
    }
}