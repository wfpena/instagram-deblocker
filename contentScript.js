var body = document.getElementsByTagName('body')[0];
var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    try {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        mutation.addedNodes[0].remove();
      } else if(mutation.type === 'attributes') {
        body.style.overflow = 'scroll';
      }
    } catch(err) {
      console.log('Error in Extension Insta Deblocker ', err);
    }
  });
});

observer.observe(body, {
  attributes: true,
  childList: true
});
