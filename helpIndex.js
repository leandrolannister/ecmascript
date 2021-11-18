function nome(n) {
    return new Promise((resolve, reject) => {
        if (n == 'leandro')
            resolve('38');
        reject('Nome incorrento');
    });
}

function cpf(idade) {
    return new Promise((resolve, reject) => {
        if (idade == 38)
            resolve('225609')
        reject('Idade está incorreta');
    });
}

nome('leandro').then((idade) => {
    cpf(idade).then((cpf) => {
        console.log(cpf);
    }).catch((err) => {
        console.log('Error', err);
    });
}).catch((err) => {
    console.log('Error', err);
});