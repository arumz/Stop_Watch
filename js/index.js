//init
var createClockIndex = 1;
var index = 1;
var allStartButtons = document.getElementsByClassName("start");
var allPauseButtons = document.getElementsByClassName("pause");
var allResetButtons = document.getElementsByClassName("reset");
var addButton = document.getElementById("add");

var secondHands = document.getElementsByClassName('second');
var minuteHands = document.getElementsByClassName('minute');


//first clock
// function addListenerFirstClock() {
//     var index = 0;

//     start.addEventListener('click', function(){
//         startClock(index);
//     });

// }


//Add event listener for the add button.
addButton.addEventListener("click", function(){
    
    createClockIndex = addWatch(createClockIndex);
})


 
// function loopAndAddListener() {
//     // Loop through all START buttons and add event listeners to all of them
//     for (var i = 0; i<allStartButtons.length; i++) {
//         allStartButtons[i].addEventListener("click",function(){
//             //Reset array index to be the true index and not length of array
//             // let arrayIndex = i - 1;
         
//                 // startClock(arrayIndex);

            
//         });
//     }

//     // Loop through all PAUSE buttons and add event listeners to all of them
//     for (var i = 1; i<allPauseButtons.length; i++) {
//         allPauseButtons[i].addEventListener("click",function(){
//             //Reset array index to be the true index and not length of array
//             // let arrayIndex = i - 1;
            
//         });
//     }

//     // Loop through all RESET buttons and add event listeners to all of them
//     for (var i = 1; i<allResetButtons.length; i++) {
//         allResetButtons[i].addEventListener("click",function(){
//            return
           
//         });
//     }
// }




function startClock(c) {
    
    console.log(c);
    // Grab the specific minute and second hands for the clock that had the start button pressed
    var secondHand = secondHands[c];
    var minuteHand = minuteHands[c];

    console.log(minuteHand)
    //add animation 
    secondHand.style.animation = 'rotate 60s infinite steps(60)';
    minuteHand.style.animation = 'rotate 1200s infinite steps(3600)';

    //Change play state of those hands to running a.k.a STARTING the stopwatch
    secondHand.style.animationPlayState = 'running';
    minuteHand.style.animationPlayState = 'running';

}

function pauseClock(c) {    
    console.log(c);
    // Grab the specific minute and second hands for the clock that had the paused button pressed
    var secondHand = secondHands[c];
    var minuteHand = minuteHands[c];

    //Change play state of those hands to paused a.k.a PAUSING the stopwatch
    secondHand.style.animationPlayState = 'paused';
    minuteHand.style.animationPlayState = 'paused';
}

function resetClock(c) {    
    console.log(c);
    // Grab the specific minute and second hands for the clock that had the reset button pressed
    var secondHand = secondHands[c];
    var minuteHand = minuteHands[c];

     //First change animation to reset-watch 
     secondHand.style.animation = "reset-watch";
     minuteHand.style.animation = "reset-watch";

    //Then change play state of those hands to paused
    secondHand.style.animationPlayState = 'paused';
    minuteHand.style.animationPlayState = 'paused';

}

function addWatch (cci) { 
    // Object instantiation 
    console.log(index);

    var clockContainer = document.createElement("div");
    clockContainer.className = "clock-container";

    var clock = document.createElement("div");
    clock.className = "clock";

    var clockCenter = document.createElement("div");
    clockCenter.className = "clock-center";

    var secondContainer = document.createElement("div");
    secondContainer.className = "second-container";

    var second = document.createElement("div");
    second.className = "second";

    var smallCenterClock = document.createElement("div");
    smallCenterClock.className = "small-center-clock";

    var minuteContainer = document.createElement("div");
    minuteContainer.className = "minute-container";

    var minute = document.createElement("div");
    minute.className = "minute";
    
    var buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    var startButtonContainer = document.createElement("div");
    startButtonContainer.className = "start-button-container";

    var start = document.createElement("button");
    start.innerHTML = "Start";
    start.className = "start";
    start.addEventListener('click', function(){
  
        if(index === 2) {
            startClock(index);
            index--
        }
        else if (index === 1) {
            startClock(index)
            index++
        }
     
    });

    var otherButtonContainer = document.createElement("div");
    otherButtonContainer.className = "other-button-container";

    var pause = document.createElement("button");
    pause.innerHTML = "pause";
    pause.className = "pause";
    pause.addEventListener('click', function(){
        if(index === 2) {
            pauseClock(index);
            index--
        }
        else if (index === 1) {
            pauseClock(index)
            index++
        }
    });

    var reset = document.createElement("button");
    reset.innerHTML = "reset";
    reset.className = "reset";
    reset.addEventListener('click', function(){
        if(index === 2) {
            resetClock(index);
            index--
        }
        else if (index === 1) {
            resetClock(index)
            index++
        }
    });

    // Reorder elements to proper containment
    var allClocksContainer = document.getElementById('all-clocks-container');

    // //Top 
    allClocksContainer.appendChild(clockContainer);
    allClocksContainer.appendChild(buttonsContainer);

    //2nd level
    clockContainer.appendChild(clock);
    clockContainer.appendChild(buttonsContainer);
   

    //3rd level
    clock.appendChild(clockCenter);
    clock.appendChild(secondContainer);
    clock.appendChild(smallCenterClock);

    buttonsContainer.appendChild(startButtonContainer);
    buttonsContainer.appendChild(otherButtonContainer);

   

    //4th level
    secondContainer.appendChild(second);
    smallCenterClock.appendChild(minuteContainer);

    startButtonContainer.appendChild(start);
    otherButtonContainer.appendChild(pause);
    otherButtonContainer.appendChild(reset);

    //5th level
    minuteContainer.appendChild(minute);

    //plus one to index
    cci++

    //add a listener

    return cci;




}