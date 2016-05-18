// Local Firebase server
var url ='https://recentusernames.firebaseio.com/'
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
		name: name,
		email: email,
		age: age,
		comment: comment,
		dateAdded: Firebase.ServerValue.TIMESTAMP
        
    });

   
    
// check if inputs working
console.log(name);
console.log(dest);
console.log(time);
console.log(nfreq);

	// Don't refresh the page!
	return false;
    
});
