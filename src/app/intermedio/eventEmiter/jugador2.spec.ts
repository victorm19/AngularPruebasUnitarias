import { Jugador2 } from "./jugador2";

describe('Jugador 2 Emit', () => {

    let jugador = new Jugador2();

    beforeEach( () => jugador = new Jugador2());
    

    it('Debe emitir un evento cuando recibe daño', () => {

        let nuevoHP = 0;

        const resp = jugador.hpCambia.subscribe(
            hp => {
                nuevoHP = hp;
            }
        )

        jugador.recibeDanio(1000);

        expect(nuevoHP).toBe(0);
    });


    it('Debe emitir un evento cuando recibe daño y sobrevivir si es menor de 100', () => {

        let nuevoHP = 0;

        const resp = jugador.hpCambia.subscribe(hp =>  nuevoHP = hp);

        jugador.recibeDanio(50);

        expect(nuevoHP).toBe(50);
    });

});