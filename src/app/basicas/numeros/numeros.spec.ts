import { incrementar } from "./numeros";

describe('Prueba de numeros', () => {

    it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {

        const numero = 105;

        const resp = incrementar(numero);
        expect(resp).toBe(100)
    });

    it('Debe de retornar el numero mas 1, si no es mayor a 100', () => {

        const numero = 5;

        const resp = incrementar(numero);
        expect(resp).toBe(numero + 1)
    });
});