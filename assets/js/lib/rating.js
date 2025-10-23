const initRating = () => {
    let selectedLevel = 0;

    console.log('initRating');

    const parent = document.querySelector('.container');

    /* Create full control frame */

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

    const submitButton = document.createElement("div");
    submitButton.classList.add('rating-submit')
    submitButton.innerText = "Submit"
    div.append(submitButton);

    const error = document.createElement('div');
    error.classList.add('rating-error');

    div.append(error);

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
            div.remove();
        }
    });

};

export { initRating };
