// Local Firebase server
var url ='https://tskedule.firebaseio.com/'
var dataRef = new Firebase(url);

// intial values
var name = "";
var dest = "";
var time = "00:00";
var freq = "";

// when the button is clicked function grabs all user info
$("#trainSubmit").on("click", function () {
    
//    Record all user input 
    var Name = $("#train-name").val().trim();
	var Dest = $("#train-dest").val().trim();
	var Time = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm");
	var Freq = $("#train-freq").val().trim();  
    
    
    
}
