import { obtenerRobots } from "./arreglos";


describe('Pruebas de arreglos', () => {

    it('Debe retornar retornar al menos 3 robots ', () => {

        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe existir MegaMan y Ultron', () => {
        const resp = obtenerRobots();
        expect(resp).toContain('MegaMan'); 
        expect(resp).toContain('Ultron'); 
    });

});