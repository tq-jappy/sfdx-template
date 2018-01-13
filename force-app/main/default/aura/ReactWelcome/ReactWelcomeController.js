({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");

    var app = Samples['react-welcome'];
    app.render(document.getElementById('root'));
  },
})