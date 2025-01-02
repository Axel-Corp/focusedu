const blockedSites = [
    "tiktok.com",
    "youtube.com",
    "instagram.com",
    "facebook.com",
    "twitter.com"
  ];
  
  const allowedSites = [
    "ecoledirecte.com",
    "index-education.net",
    "quizlet.com",
    "ecole-directe.plus"
  ];
  
  chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    const url = new URL(details.url);
    const hostname = url.hostname;
  
    if (blockedSites.includes(hostname)) {
      chrome.tabs.update(details.tabId, { url: "about:blank" });
    }
  
    if (!allowedSites.some(site => hostname.includes(site))) {
      chrome.tabs.update(details.tabId, { url: "about:blank" });
    }
  });
  