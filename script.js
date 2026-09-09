// ================= ELEMENTS =================

const loader = document.getElementById("loader");

const startBtn = document.getElementById("startBtn");

const birthdaySection = document.getElementById("birthdaySection");

const poem = document.getElementById("poem");

const secretBtn = document.getElementById("secretBtn");

const secret = document.getElementById("secret");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const hearts = document.getElementById("hearts");


// ================= LOADER =================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});


// ================= POEM =================

const poemText =
`ره میخانه و مسجد کدام است
که هر دو بر منِ مسکین حرام است`;


// ================= START =================

startBtn.addEventListener(
    "click",
    () => {

        birthdaySection.classList.remove(
            "hidden"
        );

        startBtn.style.display =
            "none";

        birthdaySection.scrollIntoView({
            behavior: "smooth"
        });

        typePoem();

        createHearts();

        launchConfetti();

        tryMusic();

    }
);


// ================= TYPE EFFECT =================

function typePoem() {

    poem.textContent = "";

    let index = 0;

    const typing =
        setInterval(() => {

            poem.textContent +=
                poemText[index];

            index++;

            if (
                index >=
                poemText.length
            ) {

                clearInterval(typing);

            }

        }, 55);

}


// ================= SECRET =================

secretBtn.addEventListener(
    "click",
    () => {

        secret.classList.remove(
            "hidden"
        );

        secret.scrollIntoView({
            behavior: "smooth"
        });

    }
);


// ================= MUSIC =================

musicBtn.addEventListener(
    "click",
    () => {

        if (
            music.paused
        ) {

            music.play();

            musicBtn.textContent =
                "🔊";

        } else {

            music.pause();

            musicBtn.textContent =
                "🔇";

        }

    }
);


// ================= AUTO MUSIC =================

function tryMusic() {

    music.play()
        .then(() => {

            musicBtn.textContent =
                "🔊";

        })
        .catch(() => {

            musicBtn.textContent =
                "🔇";

        });

}


// ================= HEARTS =================

function createHeart() {

    const heart =
        document.createElement("span");

    heart.className =
        "heart";

    heart.textContent =
        ["❤️", "💜", "💗", "✨", "💕"]
        [
            Math.floor(
                Math.random() * 5
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        15 +
        Math.random() * 20 +
        "px";

    heart.style.animationDuration =
        4 +
        Math.random() * 5 +
        "s";

    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


function createHearts() {

    setInterval(
        createHeart,
        700
    );

}


// ================= CONFETTI =================

function launchConfetti() {

    const symbols =
        ["🎉", "🎊", "✨", "🎂", "💜", "❤️"];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const confetti =
            document.createElement(
                "span"
            );

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 +
            "%";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            15 +
            Math.random() * 20 +
            "px";

        confetti.style.zIndex =
            "999";

        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            2 +
            Math.random() * 3;


        confetti.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(720deg)`,
                    opacity: 0
                }

            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

          }
