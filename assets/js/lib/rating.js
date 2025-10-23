/* Initialize and display the Thank you for notation */

function showThankYou(parent, level) {
    const div = document.createElement('div');
    div.classList.add("rating-thank-frame");

    const divlogo = document.createElement('div');
    divlogo.classList.add('rating-logo');
    const imglogo = document.createElement('img');
    imglogo.src = "./assets/img/illustration-thank-you.svg";
    divlogo.append(imglogo);
    div.append(divlogo);

    const p = document.createElement('p');
    p.classList.add('rating-notation');
    p.innerText = "You selected " + level.toString() + " out of 5";
    div.append(p);

    const h2 = document.createElement('h2');
    h2.classList.add('rating-title');
    h2.innerText = "Thank you!";
    div.append(h2);

    const p2 = document.createElement('p');
    p2.classList.add('rating-thank-text');
    p2.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    div.append(p2);

    parent.append(div);
}

/* Initialize and display the request for notation  */

function showRequestForNotation(parent) {
    let selectedLevel = 0;

    const div = document.createElement('div');
    div.classList.add("rating-frame");

    const divstar = document.createElement('div');
    divstar.classList.add('rating-star');
    const imgstar = document.createElement('img');
    imgstar.src = "./assets/img/icon-star.svg";
    divstar.append(imgstar);
    div.append(divstar);

    const h2 = document.createElement('h2');
    h2.classList.add('rating-title');
    h2.innerText = "How did we do?";
    div.append(h2);

    const p = document.createElement('p');
    p.classList.add('rating-text');
    p.innerText = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
    div.append(p);

    const btncontainer = document.createElement('div');
    btncontainer.classList.add('rating-btncontainer');

    /*
     * Creation et gestion des boutons de notation
     */

    for (let i = 1; i < 6; i++) {
        const btndiv = document.createElement("div");
        btndiv.classList.add('rating-level')
        btndiv.innerText = i.toString();
        btncontainer.append(btndiv);

        btndiv.addEventListener('mouseenter', () => {
            if (selectedLevel === 0) {
                btndiv.classList.add('rating-hover-level');
            }
        });

        btndiv.addEventListener('mouseleave', () => {
            if (selectedLevel === 0) {
                btndiv.classList.remove('rating-hover-level');
            }
        });

        btndiv.addEventListener('click', () => {
            if (selectedLevel === 0) {
                btndiv.classList.remove('rating-hover-level');
                btndiv.classList.add("rating-selected-level");
                selectedLevel = i;
            }
        });
    }
    div.append(btncontainer);

    /* Ajout du bouton Submit */

    const submitButton = document.createElement("div");
    submitButton.classList.add('rating-submit')
    submitButton.innerText = "Submit"
    div.append(submitButton);

    /* Ajout d'une zone d'avertissement */

    const error = document.createElement('div');
    error.classList.add('rating-error');

    div.append(error);

    /*
     * Mise a jour du DOM à la fin pour limité
     * Le rafraichissement de la page au maximum
     */

    parent.append(div);

    /*
     * Ici commence la gestion des evenements 
     * Du bouton Submit
     */

    submitButton.addEventListener('mouseenter', () => {
        submitButton.classList.add('rating-hover-submit');
    });

    submitButton.addEventListener('mouseleave', () => {
        submitButton.classList.remove('rating-hover-submit');
    });

    submitButton.addEventListener('click', () => {
        if (selectedLevel === 0) {
            error.innerText = "You must take a decision !!!";

            setTimeout(() => {
                error.innerText = "";
            }, 3000)
        }
        else {
            localStorage.setItem("userRating", selectedLevel.toString());
            div.remove();

            showThankYou(parent, selectedLevel);
        }
    });
}

/* Initialisation du composant Rating */

const initRating = () => {
    console.log('initRating');

    const parent = document.querySelector('.container');

    const localStoredLevel = localStorage.getItem("userRating");
    console.log(localStoredLevel);

    /* item Not previously set */
    if (localStoredLevel === null)
        showRequestForNotation(parent);
    else
        showThankYou(parent, parseInt(localStoredLevel));

    /*
     * Gestion du bouton caché pour reinitialiser le
     * local storage pour facilité le debuggage
     */

    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        localStorage.clear();
    });
};

export { initRating };
