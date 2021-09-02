const lista = ['leandro', 'soares'];
const lista_2 = ['ribeiro'];

( () => {
    lista.push(...lista_2); //ribeiro será add como um novo elemento do array com spred(...)
});

console.log(lista);
