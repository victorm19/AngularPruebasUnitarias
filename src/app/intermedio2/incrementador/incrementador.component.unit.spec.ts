import { IncrementadorComponent } from "./incrementador.component";

describe('Incrementador component unit', () => {

    let component: IncrementadorComponent;

    beforeEach( () => component = new IncrementadorComponent() );

    it('No debe de pasar de 100 el progreso', () => {

        component.progreso = 100;

        component.cambiarValor( 5 );

        expect(component.progreso).toBe(100);
    });

});