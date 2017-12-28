var currentImage = 1;
Template.indexGallery.onCreated(function(){
  return Session.set("image","02.jpg");
})
Template.indexGallery.helpers({
  'image': function(){
    return Session.get("image");
    },

});
Template.index.helpers({
  'displayNavbar': function(){
    return Session.get('displayNavbar');
  }
})
Meteor.setInterval((function(){
  switch (currentImage) {
      case 1:
      currentImage++;
        Session.set("image","11.jpg");
        break;
     case 2:
      currentImage++;
      Session.set("image","04.jpg");
       break;
       case 3:
        currentImage++;
        Session.set("image","10.jpg");
         break;
    default:
       currentImage = 1;
       Session.set("image","02.jpg");
       break;
    }
}), 5000);

Meteor.setInterval(function(){
  if($(window).scrollTop() > 760){Session.set("displayNavbar",true)}
  else{Session.set("displayNavbar",false)}
},10)
