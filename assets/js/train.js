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
		dateAdded: Firebase.ServerValue.TIMESTAMP
        
    });

   
    
// check if inputs working
console.log(name);
console.log(dest);
console.log(time);
console.log(freq);

	// Don't refresh the page!
	return false;
    
});
