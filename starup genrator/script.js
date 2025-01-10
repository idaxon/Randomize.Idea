let ideasDatabase = [];

fetch('ideasDatabase.json')
    .then(response => response.json())
    .then(data => {
        ideasDatabase = data;
    })
    .catch(error => console.error('Error loading the ideas database:', error));

function generateRandomIdea() {
    const resultDiv = document.getElementById("result");
    const randomIdea = ideasDatabase[Math.floor(Math.random() * ideasDatabase.length)];
    resultDiv.textContent = `Mystery Idea: ${randomIdea.idea}`;
}

function generateCompanyName() {
    const companyNames = [
        "Innovify", "TechBlaze", "EcoFutures", "BrilliantBytes", "DreamInnovators",
        "CodeForge", "VisionaryVibes", "QuantumQuest", "SparkX", "FusionTech",
        "FunkyFuture", "NeonLogic", "QuantumWhiz", "ByteMe", "TechieTornado",
        "WiredWonder", "PixelPioneers", "CyberGenius", "CodeCrush", "ViralVisions",
        "EpicEdge", "TheCodeBros", "InnovationNation", "PixelStorm", "ByteMeTech",
        "StartupSizzle", "AlgoZilla", "TechTornado", "PixelPirates", "ByteBros",
        "InnoMinds", "BrainStormers", "NeuroNinja", "RoboRaptors", "HackHustlers",
        "SparkleTech", "VibeVision", "FutureFly", "CodeCult", "CyberSparks",
        "TechSavvySquad", "NextGenNerds", "ByteBeats", "NeuroNinjas", "CodeMonsters"
    ];

    const randomName = companyNames[Math.floor(Math.random() * companyNames.length)];
    
    // Savage replies
    const savageReplies = [
        "You need an AI to give your company a name? I mean, we all know you're not great at brainstorming, but wow.",
        "Congrats on choosing a name, but does it even sound like something you’d want to take seriously? 😂",
        "Your company name just screams 'I Googled 'startup name' and picked the first one'.",
        "A random name generator knows you better than you do. Embarrassing, right?",
        "You're really relying on an AI for creativity? Yikes, but hey, it's better than nothing, I guess.",
        "The only thing more random than your startup idea is the name you just got. Good luck with that.",
        "You’ve got an AI telling you what to call your company. Let’s just hope it’s better at business than you.",
        "Is this your company name or a Wi-Fi password? Either way, good luck. 😏"
    ];

    const randomReply = savageReplies[Math.floor(Math.random() * savageReplies.length)];

    document.getElementById("companyNameResult").textContent = `Your Company Name: ${randomName}`;
    document.getElementById("companyNameResult").innerHTML += `<br><span style="color: red; font-style: italic;">${randomReply}</span>`;
}


// Add event listener for the moving image
document.addEventListener("mousemove", (e) => {
    const movingImage = document.getElementById("movingImage");
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    movingImage.style.transform = `translate3d(${x * 50}px, ${y * 50}px, 0)`;
});


window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});




