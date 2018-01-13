({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");

    var app = Samples['react-welcome'];
    component.set("v.app", app);
    app.render(document.getElementById('root'));
  },
})