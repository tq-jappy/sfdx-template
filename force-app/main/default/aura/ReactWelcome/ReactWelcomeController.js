({
  scriptsLoaded: function (component, event, helper) {
    console.log("scriptsLoaded");

    if (Samples) {
      var app = Samples['react-welcome'];
      app.render(document.getElementById('root'));
    } else {
      console.log('[WARN]', 'library loaded but not exists');
    }
  },
})