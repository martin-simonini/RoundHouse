FlowRouter.route('/', {
  name: 'index',
  action(){
    BlazeLayout.render("index");
  }
});

FlowRouter.route('/Habitaciones',{
  name:'Habitaciones',
  action(){
    BlazeLayout.render('layout',{main: "Habitaciones"})
  }
});

FlowRouter.route('/Gallery',{
  name:'Gallery',
  action(){
    BlazeLayout.render('layout',{main: "gallery"})
  }
});

FlowRouter.route('/Contact',{
  name:'Contact',
  action(){
    BlazeLayout.render('layout',{main: "contact"})
  }
});

FlowRouter.route('/activities',{
  name:'Activities',
  action(){
    BlazeLayout.render('layout',{main: "activities"})
  }
});

FlowRouter.route("/admin",{
  name:"admin",
  action(){
    if(!Meteor.userId()){
        BlazeLayout.render("login");
    }else {
      BlazeLayout.render("dashboard");
    }
  }
});

FlowRouter.route("/dashboard",{
  name:"dashboard",
  action(){
    if(Meteor.userId()){
      BlazeLayout.render("dashboard");
    }else{
      BlazeLayout.render("login");
    }
  }
});


//I only want one accont, only uncomment if you delete account
// FlowRouter.route("/reg",{
//   name:"reg",
//   action(){
//     BlazeLayout.render("register");
//   }
// });
