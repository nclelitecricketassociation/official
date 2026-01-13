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