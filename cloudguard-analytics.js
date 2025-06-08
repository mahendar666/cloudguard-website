// CloudGuardX Analytics Tracker v1.0
(function() {
  if (window.CloudGuardAnalytics) return; // Prevent double-inject
  window.CloudGuardAnalytics = true;

  function getSessionId() {
    let sid = localStorage.getItem('cgx_sid');
    if (!sid) {
      sid = Math.random().toString(36).substr(2) + Date.now();
      localStorage.setItem('cgx_sid', sid);
    }
    return sid;
  }

  function sendAnalytics(data) {
    try {
      navigator.sendBeacon(
        window.CLOUDGUARD_ANALYTICS_ENDPOINT || '/api/analytics',
        JSON.stringify(data)
      );
    } catch (e) {}
  }

  // --- Metrics ---
  var startTime = Date.now();
  var sessionId = getSessionId();
  var pageViews = parseInt(sessionStorage.getItem('cgx_pv') || '0') + 1;
  sessionStorage.setItem('cgx_pv', pageViews);
  var scrollDepth = 0;
  var converted = false;

  // Page speed
  function getPageSpeed() {
    try {
      var perf = window.performance.timing;
      return perf.loadEventEnd > 0 ? perf.loadEventEnd - perf.navigationStart : null;
    } catch (e) { return null; }
  }

  // Scroll depth
  window.addEventListener('scroll', function() {
    var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    var winHeight = window.innerHeight;
    var scrolled = window.scrollY + winHeight;
    var percent = Math.min(100, Math.round((scrolled / docHeight) * 100));
    if (percent > scrollDepth) scrollDepth = percent;
  });

  // Conversion tracking (example: any element with data-cgx-convert)
  document.addEventListener('click', function(e) {
    var el = e.target.closest('[data-cgx-convert]');
    if (el && !converted) {
      converted = true;
      sendAnalytics({
        type: 'conversion',
        ts: Date.now(),
        sessionId,
        url: location.href,
        websiteId: window.CLOUDGUARD_WEBSITE_ID || '',
        event: el.getAttribute('data-cgx-convert') || 'conversion'
      });
    }
  });

  // On unload, send session data
  window.addEventListener('beforeunload', function() {
    var data = {
      type: 'session',
      ts: Date.now(),
      sessionId,
      url: location.href,
      websiteId: window.CLOUDGUARD_WEBSITE_ID || '',
      pageSpeed: getPageSpeed(),
      bounce: pageViews === 1 && !converted ? 1 : 0,
      conversion: converted ? 1 : 0,
      scrollDepth,
      pageViews,
      sessionDuration: Math.round((Date.now() - startTime) / 1000)
    };
    sendAnalytics(data);
  });

  // First page view
  sendAnalytics({
    type: 'pageview',
    ts: Date.now(),
    sessionId,
    url: location.href,
    websiteId: window.CLOUDGUARD_WEBSITE_ID || ''
  });
  // Heartbeat: send every 30 seconds while user is on the page
  setInterval(function() {
    sendAnalytics({
      type: 'heartbeat',
      ts: Date.now(),
      sessionId,
      websiteId: window.CLOUDGUARD_WEBSITE_ID || ''
    });
  }, 30000);

})();
