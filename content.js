
const blockedKeywords = ["porn", "sex", "adult", "xxx", "nsfw", "erotic", "xxn", "porno"];


function blockImages() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        const altText = image.alt.toLowerCase();
        const src = image.src.toLowerCase();
        blockedKeywords.forEach(keyword => {
            if (altText.includes(keyword) || src.includes(keyword)) {
                image.style.display = "none";
            }
        });
    });
}


function blockVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const title = video.title.toLowerCase();
        
        
        blockedKeywords.forEach(keyword => {
            if (title.includes(keyword)) {
                video.style.display = "none";
            }
        });
    });
}


function blockAds() {
    const adSelectors = [
        'div[id*="ad"]',
        'iframe[src*="ads"]',
        'div[class*="ad"]',
        'div[class*="banner"]',
        'ins[class*="adsbygoogle"]'
    ];

    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.style.display = "none");
    });
}

window.onload = function() {
    blockImages();
    blockVideos();
    blockAds();
};
