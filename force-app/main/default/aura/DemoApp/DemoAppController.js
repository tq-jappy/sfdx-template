({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");
    component.set("v.app", DemoApp);
  },
})