import { MedicoComponent } from "src/app/intermedio2/medico/medico.component";
import { RUTAS } from "./app.routes";

describe('Rutas principales', () => {

    it('Debe de existir una ruta /medico/:id', () => {
        expect(RUTAS).toContain({
            path: 'medico/:id',
            component: MedicoComponent
        });
    });

});