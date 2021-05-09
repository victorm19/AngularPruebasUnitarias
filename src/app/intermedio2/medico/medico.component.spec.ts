import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component";
import { MedicoService } from "./medico.service";

describe('Medico component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            imports: [HttpClientModule],
           // providers: [ MedicoService ]
        });

        fixture = TestBed.createComponent(MedicoComponent);

        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {

        const nombre = 'juan';

        const resp = component.saludarMedico(nombre);

        expect(resp).toContain(nombre);
    });

});