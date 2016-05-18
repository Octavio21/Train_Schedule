// Local Firebase server
var url ='https://tskedule.firebaseio.com/'
var dataRef = new Firebase(url);


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
		Freq: Freq,
		timeAdded: Firebase.ServerValue.TIMESTAMP
        
    });

   
    
// check if inputs working
console.log(dataRef.Name);
console.log(dataRef.Dest);
console.log(dataRef.Time);
console.log(dataRef.Freq);

	// Don't refresh the page!
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

	
	

	$("#trainInfo > tbody").append("<tr><td>" + Name + "</td><td>" + Dest + "</td><td>" + Freq + "</td><td>" + nextArr + "</td><td>" + minAway + "</td><tr>");


});
