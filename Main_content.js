console.log("Welcome to Main_content.js");

let video_details = [
    {
        image: "assignment_FILL0_wght400_GRAD0_opsz48.png",
        course: "Learn to code with python",
        topicNumber: "16.",
        topicName: "Lists: Methods Section Reveiw",
        topicType: "Assignment.",
        topicTime: "20min"
    },
    {
        image: "videocard-2.jpg",
        course: "The Web Developer Bootcamp 2022",
        topicNumber: "1.",
        topicName: "Welcome to the Course!",
        topicType: "Lecture.",
        topicTime: "3min left"
    }
]

let video_Card_area = document.getElementById("My_learning_cards_area");




for (i = 0; i < video_details.length; i++) {
    let video_card = document.createElement("div");
    video_card.className = "My_learning_video_card";

    let video = document.createElement("div");
    video.className = "My_learning_video";

    let My_learning_video_desc = document.createElement("div");
    My_learning_video_desc.className = "My_learning_video_desc";

    let my_learning_course_name = document.createElement("div");
    my_learning_course_name.className = "my_learning_course_name";

    let mylearning_topic = document.createElement("div");
    mylearning_topic.className = "mylearning_topic";

    let topic_number = document.createElement("span");
    topic_number.className = "topic_number";

    let topic_name = document.createElement("span");
    topic_name.className = "topic_name";

    let topic_type_time = document.createElement("div");
    topic_type_time.className = "topic_type_time";

    let topic_type = document.createElement("span");
    topic_type.className = "topic_type";

    let topic_time = document.createElement("span");
    topic_time.className = "topic_time";

    let topic_covered_range = document.createElement("div");
    topic_covered_range.className = "topic_covered_range";

    video_card.appendChild(video);
    video_card.appendChild(My_learning_video_desc);
    My_learning_video_desc.appendChild(my_learning_course_name);
    My_learning_video_desc.appendChild(mylearning_topic);
    mylearning_topic.appendChild(topic_number);
    mylearning_topic.appendChild(topic_name);
    My_learning_video_desc.appendChild(topic_type_time);
    topic_type_time.appendChild(topic_type);
    topic_type_time.appendChild(topic_time);
    My_learning_video_desc.appendChild(topic_covered_range);

    my_learning_course_name.innerText = video_details[i].course;
    topic_number.innerText = video_details[i].topicNumber;
    topic_name.innerText = video_details[i].topicName;
    topic_type.innerText = video_details[i].topicType;
    topic_time.innerText = video_details[i].topicTime;
    video.style.backgroundImage = `url(${video_details[i].image})`;
    video_card.id = `video_card-${i + 1}`;
    video_Card_area.appendChild(video_card);
}
// console.log(video_Card_area);

// recomendation area

let recomendedCardsArea = document.getElementById("recomendedCardsArea");

let recomendationDetails = [
    {
        image: "recomendedCards-1.jpg",
        title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
        author: "Dr. Angela Yu",
        ratePoints: 4.7,
        ratings: 119004,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-2.jpg",
        title: "The Complete JavaScript Course 2022: From Zero to Expert!",
        author: "Jonas Schmedtmann",
        ratePoints: 4.8,
        ratings: 143764,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-3.jpg",
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        author: "Kyle Pew, Office Newb",
        ratePoints: 4.7,
        ratings: 314700,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-4.jpg",
        title: "The Complete SQL Bootcamp 2022: Go from Zero to Hero",
        author: "Jose Portilla",
        ratePoints: 4.7,
        ratings: 138761,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-5.jpg",
        title: "The Complete Digital Marketing Course - 12 Courses in 1",
        author: "Jose Rob Percival, Daragh Walsh, Codestars by Rob Percival",
        ratePoints: 4.5,
        ratings: 151627,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-6.jpg",
        title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        author: "Colt Steele, Ian Schoonover",
        ratePoints: 4.6,
        ratings: 70219,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-7.jpg",
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        author: "Jonas Schmedtmann",
        ratePoints: 4.8,
        ratings: 36861,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-8.jpg",
        title: "Complete Python Developer in 2022: Zero to Mastery",
        author: "Andrei Neagoie, Zero To Mastery",
        ratePoints: 4.6,
        ratings: 38004,
        price: 3499,
        bestsellor: "no"
    },
    {
        image: "recomendedCards-9.jpg",
        title: "Java Programming Masterclass covering Java 11 & Java 17",
        author: "Tim Buchalka, Tim Buchalka's Learn Programming Academy",
        ratePoints: 4.6,
        ratings: 164472,
        price: 3499,
        bestsellor: "yes"
    },
    {
        image: "recomendedCards-10.jpg",
        title: "JavaScript - The Complete Guide 2022 (Beginner + Advanced)",
        author: "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
        ratePoints: 4.6,
        ratings: 21448,
        price: 3499,
        bestsellor: "no"
    },
    {
        image: "recomendedCards-11.jpg",
        title: "The Complete Python Course | Learn Python by Doing in 2022",
        author: "Codestars by Rob Percival, Jose Salvatierra, Rob Percival, Teclado by Jose Salvatierra",
        ratePoints: 4.6,
        ratings: 17359,
        price: 3499,
        bestsellor: "no"
    },
    {
        image: "recomendedCards-12.jpg",
        title: "Microsoft Excel - Advanced Excel Formulas & Functions",
        author: "Maven Analytics, Chris Dutton",
        ratePoints: 4.7,
        ratings: 65850,
        price: 3499,
        bestsellor: "yes"
    }
];
let html = "";
let recomendedCards;
for (i = 0; i < recomendationDetails.length; i++) {
    html +=
        `<div class="recomendedCards" id="recomendedCard-${i + 1}">
            <div class="recomendedCardsPic"><img src="${recomendationDetails[i].image}" ></div>
            <div class="recomendedCardsDesc">
                <div class="recomendedCardsName">${recomendationDetails[i].title}</div>
                <div class="recomendedCardsAuthor">${recomendationDetails[i].author}</div>
                <div class="recomendedCardsRate">
                    <span class="recomendedCardsRateValue">${recomendationDetails[i].ratePoints}</span>
                    <span class="recomendedCardsRateStars"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></span>
                    <span class="recomendedCardsRatings">(${recomendationDetails[i].ratings})</span>
                </div>
                <div class="recomendedCardsPrice"><i class="fa fa-inr">${recomendationDetails[i].price}</i></div>
            </div>
        </div>`
        recomendedCardsArea.innerHTML = html;
}
for(i=0;i<recomendationDetails.length;i++){
    if(recomendationDetails[i].bestsellor == "yes"){
        recomendedCardsDesc = document.getElementsByClassName("recomendedCardsDesc");
        let recomendedCardsBestseller = document.createElement("div");
        recomendedCardsBestseller.className  = "recomendedCardsBestseller";
        recomendedCardsBestseller.innerText = "BestSeller";
        recomendedCardsDesc[i].appendChild(recomendedCardsBestseller);
    }
}

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let recomended_carausel = document.getElementById("recomendedCardsArea");
let x=0;
leftArrow.addEventListener("click",function(e){
    x+=1100
    recomended_carausel.style.transform = `translateX(${x}px)`;
    recomended_carausel.style.transition = "1s ease-in-out";
    console.log(x);
    console.log(leftArrow.style.display);
    if(x == 0){
        leftArrow.style.display = "none";
        rightArrow.style.display = "block";  
    }
    else{
        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
    }
    

})
rightArrow.addEventListener("click",function(e){
    x-=1100
    recomended_carausel.style.transform = `translateX(${x}px)`;
    recomended_carausel.style.transition = "1s ease-in-out";
    console.log(x);
    console.log(rightArrow.style.display);
    if(x == -2200){
        rightArrow.style.display = "none";
        leftArrow.style.display = "block";
    }
    else{
        rightArrow.style.display = "block";
        leftArrow.style.display = "block";
    }
    
})


