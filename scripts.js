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
//console.log(backpack[0].name);

$("#backpack_contents").hide();
$(".drop_down_button").click(function() {
  $("#backpack_contents").slideToggle(500);
})

// function item_details(francis) {
//   var item_value = francis.data.value;
//   var $new_div = $("<div></div>");

//   $new_div.addClass("item_details");
//   $new_div.text(item_value);
//   $(francis.target).append($new_div);
// }

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
    )

  // give new backpack item "click" ability
  //$new_div.click(backpack[i], item_details);
}


var player_coins = 0;
$("#coin_counter").text(player_coins);
