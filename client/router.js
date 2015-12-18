Tracker.autorun(function() {
  var routeName = FlowRouter.getRouteName();
  if (routeName === 'postsDefault') {
      $('.header').addClass('nav-home');
  } else {
      $('.header').removeClass('nav-home');
  }
});
