({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");
    if (DemoApp) {
      component.set("v.app", DemoApp);
      DemoApp.render();
    }
  },
})