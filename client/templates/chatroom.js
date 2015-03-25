Template.chatroom.helpers({
  chatrooms: function() {
    return [
      { name: "Homies" },
      { name: "Riverside Peeps" },
      { name: "Maplestory Guild" }
    ]
  }
});

Template.chatroom.events({
  'click .science-btn': function() {
    alert("SCIENCE BITCH!");
  }
});