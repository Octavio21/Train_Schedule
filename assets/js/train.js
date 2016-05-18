// Local Firebase server
var url ='https://tskedule.firebaseio.com/'
var dataRef = new Firebase(url);

// function to add and define time properly
function addTime(time, freq){
	var hour = parseInt(time.split(':')[0]);
	var minutes = parseInt(time.split(':')[1]);

	var freqMinutes = parseInt(freq);

	hour = hour + Math.floor((minutes+freqMinutes)/60);
	minutes = (minutes + freqMinutes)%60;

	return hour.toString() + ":" + minutes.toString();
}


// function to do logic for arrival time and minutes away
function diffTime(time){
	var hour = parseInt(time.split(':')[0]);
	var minutes = parseInt(time.split(':')[1]);

	console.log(time);
	console.log(hour);
	console.log(minutes);
	var date = new Date();	
	var currHour = date.getHours();
	var currMinutes = date.getMinutes();

	console.log(currHour);
	console.log(currMinutes);

	if(hour > currHour){
		var difference = hour*60 + minutes - currHour*60 - currMinutes;
		return difference.toString();
	} else{
		var difference = 24*60 + hour*60 + minutes - currHour*60 - currMinutes;
		return difference.toString();
	}
}

// when the button is clicked function grabs all user info
$("#trainSubmit").on("click", function () {
    
//    Record all user input 
    var Name = $("#train-name").val().trim();
	var Dest = $("#train-dest").val().trim();
	var Time = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm");
	var Freq = $("#train-freq").val().trim();  
    
    
	// Code for the push
	dataRef.push({
		name: Name,
		dest: Dest,
		time: Time,
		freq: Freq,
		timeAdded: Firebase.ServerValue.TIMESTAMP
        
    });

   
    // clears all input fields
	$("#train-name").val("");
	$("#train-dest").val("");
	$("#train-time").val("");
	$("#train-freq").val("");
	
// alerst train has been added
alert("Your Train has been added");


	return false;
    
});


dataRef.on("child_added", function (childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var Name = childSnapshot.val().name;
	var Dest = childSnapshot.val().dest;
	var Time = childSnapshot.val().time;
	var Freq = childSnapshot.val().freq;

	// Console log the above
	console.log(Name);
	console.log(Dest);
	console.log(Time);
	console.log(Freq);

	var nextArr = addTime(Time, Freq);
	var minAway = diffTime(nextArr);
	

	$("#trainInfo > tbody").append("<tr><td>" + Name + "</td><td>" + Dest + "</td><td>" + Freq + "</td><td>" + nextArr + "</td><td>" + minAway + "</td><tr>");


});
