// Rooms = new Mongo.Collection('rooms');
//
// Rooms.allow({
//   insert: function(userId, doc){
//     return !!userId;
//   },
//   update: function(uerId,doc){
//     return true;
//   }
// });
//
// RoomsSchema = new SimpleSchema({
//   roomName:{
//     type: String,
//     label: "Nombre de Habitacion",
//   },
//   numPeople: {
//     type: Number,
//     label: "Numero De Personas",
//     min: 1
//   },
//   price: [Number], //[1p,2p,3p,4p,ect.]
//   otherInfo: [String],
//   createdAt: {
//     type: Date,
//     label: "Created At",
//     autoValue: function(){
//       return new Date();
//     },
//     },
// });
//
// Rooms.attachSchema(RoomsSchema);
