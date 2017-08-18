//$(".text_box").text(1);
//$(".text_box").click(myClickHandler);

// function myClickHandler(eventData) {

//   // set the storage variable equal to itself or if it doesn't exist, then set equal to 1
//   eventData.target.elementClickCount = eventData.target.elementClickCount || 1;

//   // just assign to a local variable instead of blahblahblha.blahblah.blahblahblah every time
//   var localCount = eventData.target.elementClickCount;

//   if (localCount < 10) {
//     localCount += 1;
//   } else {
//     localCount = 0;
//   }
//   $(eventData.target).text(localCount);

//   // now we store the updated value back into the element
//   eventData.target.elementClickCount = localCount;
// }


// ------ ACTUAL CODE STARTS ---------- 


// keeping track of player's coins (money) in a styled div
var player_coins = 0;
$("#coin_counter").text(player_coins);

//array of objects
  //the array represents the player's backpack
  //each obj represents an item in the backpack
  //"value" represents the item's coin value
  //to access a particular piece of an object: backpack[index value here].name;
var backpack = [
  { id: 1,
    name: "pants",
    value: 25, }, 
  { id: 2,
    name: "banana",
    value: 1, },
  { id: 3,
    name: "crochet hook",
    value: 5, },
  { id: 4,
    name: "cow",
    value: 100, },
]

function sell_item(eventObject) {
  for (var i = 0; i < backpack.length; i++) {
    if (backpack[i].id == eventObject.data) {
      //console.log(backpack[i].id);
      //console.log(backpack[i]);
      player_coins += backpack[i].value;
      $("#coin_counter").text(player_coins);
      backpack.splice(i, 1);
      update_backpack();
      break;
    }
  }
}

$("#backpack_contents").hide();
$(".drop_down_button").click(function() {
  $("#backpack_contents").slideToggle(500);
})


//empty's the backpack contents html element THEN:
  //creates a div for each obj from backpack array
  //creates a stylized div for the obj's value
  //creates a button for selling (removing) the obj from the array
function update_backpack() {
  $("#backpack_contents").empty();

  for (var i = 0; i < backpack.length; i++) {
    $("#backpack_contents").append(
      $("<div/>")
        .addClass("backpack_item")
        .text(backpack[i].name)
        .append(
          $("<div/>")
            .addClass("item_value")
            .text(backpack[i].value)
        )
        .append(
          $("<button/>", {
            text: "Sell",
            class: "sell_button",
          }).click(backpack[i].id, sell_item)
        )
    )
  }
}



update_backpack();

 // function clicked() {
 //  var button = $("#show_hide_button");

 //  $("#contents").toggle();
 //  if (button.text() == "Show") {
 //    button.text("Hide");
 //  } else {
 //    button.text("Show");
 //  }
 // }




