// Add wkts and econ to the list of inputs
function openPlayerStats(name, role, matches, avg, sr, wkts, econ) {
    document.getElementById("mName").innerText = name;
    document.getElementById("mRole").innerText = "ROLE: " + role;
    document.getElementById("mMatches").innerText = matches;
    document.getElementById("mAvg").innerText = avg;
    document.getElementById("mSR").innerText = sr;
    
    // New Bowling Stats
    document.getElementById("mWkts").innerText = wkts;
    document.getElementById("mEcon").innerText = econ;
    
    document.getElementById("playerModal").style.display = "block";
}
async function shareImg(imgUrl, titleText) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'NCL Elite Cricket',
                text: titleText,
                url: window.location.href // Shares your website link with the image
            });
            console.log('Shared successfully');
        } catch (err) {
            console.log('Share cancelled or failed:', err);
        }
    } else {
        // Fallback for Desktop browsers
        alert("Native sharing is only supported on mobile devices. Please copy the link manually!");
    }
}