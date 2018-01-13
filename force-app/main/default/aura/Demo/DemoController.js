({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");
    if (MyApp) {
      component.set("v.app", MyApp);
      MyApp.render(document.getElementById('root'));
    }
  },
})