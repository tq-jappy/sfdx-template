({
  scriptsLoaded: function (component, event, helper) {
    var app = window.Samples['react-lightning-demo'];
    app.init(component);
  },

  handleEvent: function (component, event, helper) {
    var app = window.Samples['react-lightning-demo'];
    app.handleEvent(component, event);
  }
})