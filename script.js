// --------------------- Search Bar ---------------------
let search_form = document.getElementById("search-con");
let search_input = document.getElementById('search-bar');
let recentSearch = document.getElementById('recentSearch');
let recentArray = [];
let recentSearchHTML = ''
search_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    recentArray.unshift(search_input.value);
    console.log(recentArray);
    recentSearchHTML =`<div class="recentList"><i class="fa-regular fa-clock"></i>${search_input.value}</div>`+ recentSearchHTML;
    recentSearch.innerHTML=recentSearchHTML;
});
// --------------------- Slider ---------------------
const slide = document.getElementsByClassName('slide');
let slideCount=0;
let i;
function slideShow(val=1){
    slideCount+=val;
    if(slideCount<0)
        slideCount=5;
    else if(slideCount>5)
        slideCount=0;
    for(i=0;i<6;i++){
        slide[i].style.transform = `translateX(-${slideCount*100}%)`;
    }
    slideDilay= setTimeout(slideChange,3000, 1);
}
slideShow();
function slideChange(val){
    clearTimeout(slideDilay);
    if(val==-1)   
        slideShow(-1);
    else if(val==1)
        slideShow(1);
}

// ----------------------- mobile list scroll ---------------------

const mobile_list = document.getElementsByClassName("mobile-list");
mobile_right_btn = document.getElementById('mobile-scroll-btn-right')
mobile_left_btn = document.getElementById('mobile-scroll-btn-left')
function mobile_scroll(val=0){
    if(val==1)//right
    {
        mobile_list[0].style.transform = `translateX(-41%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        mobile_right_btn.style.display = 'none';
        mobile_left_btn.style.display = 'block';
    }
    else if(val==-1)//left
    {
        mobile_list[0].style.transform = `translateX(0%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        mobile_right_btn.style.display = 'block';
        mobile_left_btn.style.display = 'none';
    }
}

// ----------------------- product1 scroll ---------------------

const product_list1 = document.getElementsByClassName('product1-list');
product1_right = document.getElementById('product1-scroll-right');
product1_left = document.getElementById('product1-scroll-left');
function product1_scroll(val=0){
    if(val==1)//right
    {
        product_list1[0].style.transform = `translateX(-39%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        product1_right.style.display = 'none';
        product1_left.style.display = 'block';
    }
    else if(val==-1)//left
    {
        product_list1[0].style.transform = `translateX(0%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        product1_right.style.display = 'block';
        product1_left.style.display = 'none';
    }
}

// ----------------------- product2 scroll ---------------------

const product_list2 = document.getElementsByClassName('product2-list');
product2_right = document.getElementById('product2-scroll-right');
product2_left = document.getElementById('product2-scroll-left');
function product2_scroll(val=0){
    if(val==1)//right
    {
        product_list2[0].style.transform = `translateX(-39%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        product2_right.style.display = 'none';
        product2_left.style.display = 'block';
    }
    else if(val==-1)//left
    {
        product_list2[0].style.transform = `translateX(0%)`;//We use mobile_list[0]  instade of mobile_list because is class selector
        product2_right.style.display = 'block';
        product2_left.style.display = 'none';
    }
}

// ----------- banner 1 slider -----------
const banner1_List = document.getElementsByClassName('banner1-slide-list');
let banner1_right = document.getElementById('banner-slide1-btn-right');
let banner1_left = document.getElementById('banner-slide1-btn-left');
let banner1_count = 0;
function banner1_scroll(val=0){
    if(val == 1){
        banner1_count++;
        if( banner1_count>2){
            banner1_count=2
            banner1_List[0].style.transform = `translateX(-69%)`;
            banner1_right.style.display = 'none';

        }
        else{
            banner1_List[0].style.transform = `translateX(-${30*banner1_count}%)`;
            banner1_left.style.display = 'block';
        }
    }
    else if(val == -1){
        banner1_count--;
        x=30*banner1_count;
        if( banner1_count==0){
            banner1_List[0].style.transform = `translateX(0%)`;
            banner1_left.style.display = 'none';

        }
        else{
            banner1_List[0].style.transform = `translateX(-${x}%)`;
            banner1_right.style.display = 'block';
        }
    }
}