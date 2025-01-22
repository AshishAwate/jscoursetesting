let count = 0; // Initialize count to 0

function increaseCount(){
    count++; //Increment count by 1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
    //Display count in HTML
}

function checkCountValue(){
    if (count === 10){
        alert("Your instagram post gained 10 followers! congratulations!");
    } else if (count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
