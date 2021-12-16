const nodePath: string = 'http://localhost:8000/';

export const getQwerty = () =>
    fetch(`/qwerty`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(console.log);
