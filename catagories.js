let Entrepreneur_sub_list=["Business Fundamentals","Entrepreneurship Fundamentals","Freelancing","Business Strategy","Startup","Business Plan","Online Business","Blogging","Leadership"];
let Entrepreneur=document.getElementById("Entrepreneur");
let Entrepreneur_sub_items=Entrepreneur.innerHTML;
Entrepreneur_sub_items+=`<ul id="Entrepreneur_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Entrepreneur_sub_list.length;i++){
    Entrepreneur_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Entrepreneur_sub_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
Entrepreneur_sub_items+=`</ul>`;
Entrepreneur.innerHTML=Entrepreneur_sub_items;

let communication_sub_list=["Communication Skills","Presentation Skills","Public Speaking","Writing","MEdia Training","Marketing Strategy","Fiction Writing","StoryTelling","Business Writing"]
let communicator=document.getElementById("Communication");
let communicator_sub_items=communicator.innerHTML;
communicator_sub_items+=`<ul id="communication_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<communication_sub_list.length;i++){
    communicator_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+communication_sub_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
communicator_sub_items+=`</ul>`;
communicator.innerHTML=communicator_sub_items;

let Management=["Product Management","Management Skills","Leadership","Time Management","ISO 9001","Manager Training","Project Management","Business Strategy","Supply Chain"];
let manager=document.getElementById("Management");
let manager_sub_items=manager.innerHTML;
manager_sub_items+=`<ul id="management_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Management.length;i++){
    manager_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Management[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
manager_sub_items+=`</ul>`;
manager.innerHTML=manager_sub_items;

let Sales=["Product Management","Management Skills","Leadership","Time Management","ISO 9001","Manager Training","Project Management","Business Strategy","Supply Chain"];
let sale=document.getElementById("Sales");
let sale_sub_items=sale.innerHTML;
sale_sub_items+=`<ul id="sales_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Sales.length;i++){
    sale_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Sales[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
sale_sub_items+=`</ul>`;
sale.innerHTML=sale_sub_items;

let Business_strategy=["Digital Marketing","Management Consultant","TOGAF9 Foundation","TOGAF9 Certified","Digital Transformation","Design Thinking","Business Model","Innovation"];
let busStrategy=document.getElementById("busStrategy");
let busStrategy_sub_items=busStrategy.innerHTML;
busStrategy_sub_items+=`<ul id="busStrategy_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Business_strategy.length;i++){
    busStrategy_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Business_strategy[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
busStrategy_sub_items+=`</ul>`;
busStrategy.innerHTML=busStrategy_sub_items;

let Operations=["Six Sigma","Six Sigma Green Belt","Quality Management","Supply Chain","Six Sigma Yellow Belt","Six Sigma Black Belt","Logistics Management","Virtual Assistant","Risk Management"];
let Operator=document.getElementById("Operations");
let Operations_sub_items=Operator.innerHTML;
Operations_sub_items+=`<ul id="operations_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Operations.length;i++){
    Operations_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Operations[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
Operations_sub_items+=`</ul>`;
Operator.innerHTML=Operations_sub_items;

let project_management=["PMP","PMI PMBOK","Scrum","Agile","CAPM Certified Associate in Project Management","Professional Scrum Master (PSM)","PMI-ACP","Product Owner"];
let projManage=document.getElementById("projManage");
let projManage_sub_items=projManage.innerHTML;
projManage_sub_items+=`<ul id="projManage_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<project_management.length;i++){
    projManage_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+project_management[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
projManage_sub_items+=`</ul>`;
projManage.innerHTML=projManage_sub_items;

let Business_law=["Law","GDPR","Contract Law","Contract Management","Data Protection","Heaalthcare IT","Medical Device Development","Goods and Services Tax"];
let Busi_law=document.getElementById("Busi_law");
let Busi_law_sub_items=Busi_law.innerHTML;
Busi_law_sub_items+=`<ul id="Busi_law_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Business_law.length;i++){
    Busi_law_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Business_law[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
Busi_law_sub_items+=`</ul>`;
Busi_law.innerHTML=Busi_law_sub_items;

let businessAnalytics=["Microsoft Power BI","SQL","Tableau","Data Modelling","Business Analytics","Business Intelligence","MySQL","Qlik Sense","Data Analysis"];
let Busi_analytics=document.getElementById("Busi_analytics");
let Busi_analytics_sub_items=Busi_analytics.innerHTML;
Busi_analytics_sub_items+=`<ul id="Busi_analytics_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<businessAnalytics.length;i++){
    Busi_analytics_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+businessAnalytics[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
Busi_analytics_sub_items+=`</ul>`;
Busi_analytics.innerHTML=Busi_analytics_sub_items;

let Human_Resource=["Recruiting","Hiring","HR Analytics","Instructional Design","Corporate Learning & Development (L&D)","Diversity & Inclusion","Employment Law","SHRM Certified Professional (SHRM-CP)"];
let humanResource=document.getElementById("humanResource");
let humanResource_sub_items=humanResource.innerHTML;
humanResource_sub_items+=`<ul id="humanResource_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Human_Resource.length;i++){
    humanResource_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Human_Resource[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
humanResource_sub_items+=`</ul>`;
humanResource.innerHTML=humanResource_sub_items;

let Industry_list=["Piping","Trucking","Oil & Gas Industry","Solar Energy","EPLAN Electric P8","Chemical Engineering","Life Coach Training","Salesforce","Freight Broker"];
let Industry=document.getElementById("Industry");
let Industry_sub_items=Industry.innerHTML;
Industry_sub_items+=`<ul id="Industry_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<Industry_list.length;i++){
    Industry_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+Industry_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
Industry_sub_items+=`</ul>`;
Industry.innerHTML=Industry_sub_items;

let commerce_list=["Amazon FBA","Dropshipping","Shopify","Shopify Dropshipping","Selling on Amazon","Etsy","Online Business","Passive Income"];
let commerce=document.getElementById("e-commerce");
let commerce_sub_items=commerce.innerHTML;
commerce_sub_items+=`<ul id="e-commerce_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<commerce_list.length;i++){
    commerce_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+commerce_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
commerce_sub_items+=`</ul>`;
commerce.innerHTML=commerce_sub_items;

let media_list=["Audiobook Creation","Amazon Kindle Direct Publishing (KDP)","YouTube Audience Growth","Writing","Journalism","ScreenWriting","Podcasting","Scrivener","After Effects"];
let media=document.getElementById("media");
let media_sub_items=media.innerHTML;
media_sub_items+=`<ul id="media_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<media_list.length;i++){
    media_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+media_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
media_sub_items+=`</ul>`;
media.innerHTML=media_sub_items;

let realEstate_list=["Real Estate Investing","Airbnb Hosting","Mortgage","Notary Business","Financial Modeling","Construction","Real Estate Marketing","Property Management"];
let realEstate=document.getElementById("realEstate");
let realEstate_sub_items=realEstate.innerHTML;
realEstate_sub_items+=`<ul id="realEstate_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<realEstate_list.length;i++){
    realEstate_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+realEstate_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
realEstate_sub_items+=`</ul>`;
realEstate.innerHTML=realEstate_sub_items;

let othBusiness_list=["QuickBooks Online","Grant Writing","Transcription","Data Entry Skills","Freelance Writing","Sports Betting","Fundraising","Non-Profit Startup","Medical Device Development"];
let othBusiness=document.getElementById("othBusiness");
let othBusiness_sub_items=othBusiness.innerHTML;
othBusiness_sub_items+=`<ul id="othBusiness_list" class="sub_Business_list">\n
<li class="sub_business_items"><div class="submenu-3_text">Popular Topics</div></li>\n`;
for(i=0;i<othBusiness_list.length;i++){
    othBusiness_sub_items+=`<li class="sub_business_items"><div class="submenu-3_text">`+othBusiness_list[i]+`<i class="fa fa-angle-right"></i></div></li>\n`;
}
othBusiness_sub_items+=`</ul>`;
othBusiness.innerHTML=othBusiness_sub_items;

let catagories=document.getElementById("catagories");
let catagory_course_list=document.getElementById("catagory_course_list");
let catagory_sub_list=document.getElementsByClassName("catagory_sub_list");
let submenu_1_text=document.getElementsByClassName("submenu-1_text");
let submenu_2_text=document.getElementsByClassName("submenu-2_text");

// catagories.addEventListener("mouseenter",func1);
// catagories.addEventListener("mouseleave",func2);
// function func1(){
//     catagory_course_list.style.display = "flex";
//     catagory_course_list.style.width = "498px";
// }
// function func2(){
//     catagory_course_list.style.display = "none";
// }

// Array.from(submenu_2_text)
// for(i=0;i<Array.from(submenu_2_text).length;i++){
//     submenu_2_text[i].addEventListener("mo",func5);
//     submenu_2_text[i].addEventListener("mouseleave",func6);
//     console.log(submenu_2_text);
// }
// function func5(){
//     catagory_course_list.style.width = "710px";
// }
// function func6(){
//     catagory_course_list.style.width = "498px";
// }
