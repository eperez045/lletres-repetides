var letras = new Map()
        var nombre = ['E', 'L', 'E', 'N', 'A'];
        nombre.forEach(letter => {
            if (letras.has(letter) === false) letras.set(letter, 1)
            else letras.set(letter, (letras.get(letter)) + 1)
        })
        console.log(letras)