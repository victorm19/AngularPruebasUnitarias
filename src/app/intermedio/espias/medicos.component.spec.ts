import { empty, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const service = new MedicosService( null )

    beforeEach( () => {
        componente = new MedicosComponent( service );
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medicos1', 'medicos2', 'medicos3'];

        // Es un espiá que nos permite hacer peticiones falsas
        spyOn(service, 'getMedicos').and.callFake( () => { 
            return from( [medicos]);
        })

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);
   
    });

    it('Debe de llamar al servidor para agregar un medico', () => {

        const espia = spyOn(service, 'agregarMedico').and.callFake( medico => {
            return empty();
        } );

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();

    });

    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

        const medico = { id: 1, nombre: 'Juan' };

        spyOn( service, 'agregarMedico' ).and.returnValue(
            from( [medico] )
        );

        componente.agregarMedico();

        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

    });

    it('Si falla la inserción, la propiedad mensajeError, deber igual a error del servicio', () => {

        const miError = 'No se pudo agregar el medico';

        spyOn( service, 'agregarMedico').and.returnValue(
            throwError(miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError ).toBe(miError)

    });

    it('Debe de llamar al servidor para borrar un medico', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn( service, 'borrarMedico').and.returnValue(
            empty()
        );

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe de llamar al servidor para borrar un medico', () => {

        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn( service, 'borrarMedico').and.returnValue(
            empty()
        );

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });


});
