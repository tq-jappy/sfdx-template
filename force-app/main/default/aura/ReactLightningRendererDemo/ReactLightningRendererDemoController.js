({
  scriptsLoaded: function (component, event, helper) {
    var app = window.Samples['react-lightning-renderer-demo'];
    app.init(component);
  },

  handleEvent: function (component, event, helper) {
    var app = window.Samples['react-lightning-renderer-demo'];
    app.handleEvent(component, event);
  }
})