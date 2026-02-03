/* (async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();*/
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Good catch! But are you sure?",
    "Again? Really sure??",
    "Can't catch me",
    "Okay I stop..",
    "Just kidding, say yes please! ❤️",
    "I will be very sad...",
    "Very very very sad..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Move away after click too
    moveNoButton();
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

let canMove = true;

function moveNoButton(force = false) {
    if (!force && !canMove) return;
  canMove = false;

  const noButton = document.querySelector(".no-button");
  const rect = noButton.getBoundingClientRect();

  const dx = (Math.random() * 300) - 150;
  const dy = (Math.random() * 300) - 150;

  let newX = rect.left + dx;
  let newY = rect.top + dy;

  newX = Math.max(10, Math.min(newX, window.innerWidth - rect.width - 10));
  newY = Math.max(10, Math.min(newY, window.innerHeight - rect.height - 10));

  noButton.style.position = "absolute";
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;

  setTimeout(() => (canMove = true), 500); // 400ms cooldown
}

document.querySelector(".no-button").addEventListener("mouseover", moveNoButton);
