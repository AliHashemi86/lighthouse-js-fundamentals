var facebookProfile = {
  name: "Ali",
  friends: 10,
  messages: ["Guys,","see you soon!"]
};
  postMessage: function(message) {
    facebookProfile.messages.push(message)
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1)
  },
  addFriend: function() {
    facebookProfile.friends = facebookProfile.friends + 1;
  }
  removeFriend: function() {
    facebookProfile.friends = facebookProfile.friends - 1;
  }
}