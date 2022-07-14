let course_types=document.getElementsByClassName("course_types");
let course_type=document.getElementsByClassName("course_type");
let course_nav=document.getElementById("course_nav");

let course_nav_links=document.getElementById("course_nav_links");

for(i=0;i<Array.from(course_types).length;i++){
    course_types[i].addEventListener("mouseenter",func1);
    course_types[i].addEventListener("mouseleave",func2);
}

function func1(){
    course_nav_links.style.display = "block";
    course_nav.style.paddingTop = "9px";
}
function func2(){
    course_nav_links.style.display = "none";
    course_nav.style.paddingTop = "0px";

}

let course_types_dev=document.getElementById("course_types_dev");
let course_types_busi=document.getElementById("course_types_busi");
let course_types_finan=document.getElementById("course_types_finan");
let course_types_IT=document.getElementById("course_types_IT");
let course_types_off=document.getElementById("course_types_off");
let course_types_per=document.getElementById("course_types_per");
let course_types_des=document.getElementById("course_types_des");
let course_types_mar=document.getElementById("course_types_mar");
let course_types_health=document.getElementById("course_types_health");
let course_types_mus=document.getElementById("course_types_mus");

let course_dev=document.getElementById("course_dev");
let course_bus=document.getElementById("course_bus");
let course_fin=document.getElementById("course_fin");
let course_it=document.getElementById("course_it");
let course_office=document.getElementById("course_office");
let course_per=document.getElementById("course_per");
let course_des=document.getElementById("course_des");
let course_mar=document.getElementById("course_mar");
let course_health=document.getElementById("course_health");
let course_music=document.getElementById("course_music");

course_types_dev.addEventListener("mouseenter",func_1);
course_types_busi.addEventListener("mouseenter",func_2);
course_types_finan.addEventListener("mouseenter",func_3);
course_types_IT.addEventListener("mouseenter",func_4);
course_types_off.addEventListener("mouseenter",func_5);
course_types_per.addEventListener("mouseenter",func_6);
course_types_des.addEventListener("mouseenter",func_7);
course_types_mar.addEventListener("mouseenter",func_8);
course_types_health.addEventListener("mouseenter",func_9);
course_types_mus.addEventListener("mouseenter",func_10);

course_types_dev.addEventListener("mouseleave",func_11);
course_types_busi.addEventListener("mouseleave",func_12);
course_types_finan.addEventListener("mouseleave",func_13);
course_types_IT.addEventListener("mouseleave",func_14);
course_types_off.addEventListener("mouseleave",func_15);
course_types_per.addEventListener("mouseleave",func_16);
course_types_des.addEventListener("mouseleave",func_17);
course_types_mar.addEventListener("mouseleave",func_18);
course_types_health.addEventListener("mouseleave",func_19);
course_types_mus.addEventListener("mouseleave",func_20);

function func_1(){course_dev.style.display = "flex";};
function func_2(){course_bus.style.display = "flex";};
function func_3(){course_fin.style.display = "flex";};
function func_4(){course_it.style.display = "flex";};
function func_5(){course_office.style.display = "flex";};
function func_6(){course_per.style.display = "flex";};
function func_7(){course_des.style.display = "flex";};
function func_8(){course_mar.style.display = "flex";};
function func_9(){course_health.style.display = "flex";};
function func_10(){course_music.style.display = "flex";};

function func_11(){course_dev.style.display = "none";};
function func_12(){course_bus.style.display = "none";};
function func_13(){course_fin.style.display = "none";};
function func_14(){course_it.style.display = "none";};
function func_15(){course_office.style.display = "none";};
function func_16(){course_per.style.display = "none";};
function func_17(){course_des.style.display = "none";};
function func_18(){course_mar.style.display = "none";};
function func_19(){course_health.style.display = "none";};
function func_20(){course_music.style.display = "none";};


