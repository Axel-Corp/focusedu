// Liste des sites à bloquer
const blockedSites = [
  "tiktok.com",
  "youtube.com",
  "instagram.com",
  "facebook.com",
  "twitter.com"
];

// Écoute les mises à jour des onglets
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    try {
      const url = new URL(changeInfo.url);
      const hostname = url.hostname;

      // Redirige vers attention.html si le site est bloqué
      if (blockedSites.some(site => hostname.includes(site))) {
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL("attention.html") });
        console.log(`Redirection vers attention.html pour ${hostname}`);
      }
    } catch (error) {
      console.warn("URL non valide ou autre erreur :", error);
    }
  }
});
