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
const statsData = {
    udit: {
        name: "UDIT GOSWAMI (C)",
        role: "Right Arm Offspinner",
        batting: [
            { format: "ODI", mat: 61, inn: 41, runs: 3350, avg: 42.1, sr: 92.4, best: 98},
            { format: "Test", mat: 79, inn: 139, runs: 6155, avg: 38.6, sr: 55.2, best: 210}
        ],
        bowling: [
            { format: "T20", mat: 52, inn: 52, wkts: 68, eco: 6.80, bbi: "4/12" },
            { format: "ODI", mat: 61, inn: 61, wkts: 84, eco: 4.50, bbi: "5/28" },
            { format: "Test", mat: 79, inn: 158, wkts: 498, eco: 2.90, bbi: "7/45" }
        ]
    },
    anurag: {
        name: "ANURAG SHARMA (VC)",
        role: "Top Order Batsman",
        batting: [
            { format: "T20", mat: 53, inn: 51, runs: 2680, avg: 39.5, sr: 145.2, best:156},
            { format: "ODI", mat: 65, inn: 65, runs: 5459, avg: 48.2, sr: 88.6, best: 212},
            { format: "Test", mat: 66, inn: 132, runs: 6201, avg: 45.8, sr: 52.1, best: 178 }
        ],
        bowling: [
            { format: "T20", mat: 53, wkts: "N/A", eco: "N/A" },
            { format: "ODI", mat: 65, wkts: "N/A", eco: "N/A" }
        ]
    }
};

function openStats(playerKey) {
    const player = statsData[playerKey];
    const modal = document.getElementById("statsModal");
    const body = document.getElementById("modalBody");

    let battingHtml = player.batting.map(s => `
        <tr><td>${s.format}</td><td>${s.mat}</td><td>${s.inn}</td><td>${s.runs}</td><td>${s.avg}</td><td>${s.sr}</td></tr>
    `).join('');

    let bowlingHtml = player.bowling.map(s => `
        <tr><td>${s.format}</td><td>${s.mat}</td><td>${s.wkts}</td><td>${s.eco}</td><td>${s.bbi || '-'}</td></tr>
    `).join('');

    body.innerHTML = `
        <div class="modal-header">
            <h2>${player.name}</h2>
            <p>${player.role}</p>
        </div>
        <h3>BATTING STATS</h3>
        <table class="stats-table">
            <tr><th>Format</th><th>Mat</th><th>Inn</th><th>Runs</th><th>Avg</th><th>SR</th></tr>
            ${battingHtml}
        </table>
        <h3 style="margin-top:20px">BOWLING STATS</h3>
        <table class="stats-table">
            <tr><th>Format</th><th>Mat</th><th>Wkts</th><th>Eco</th><th>BBI</th></tr>
            ${bowlingHtml}
        </table>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("statsModal").style.display = "none";
}

// Close if clicked outside
window.onclick = function(event) {
    if (event.target == document.getElementById("statsModal")) {
        closeModal();
    }
}