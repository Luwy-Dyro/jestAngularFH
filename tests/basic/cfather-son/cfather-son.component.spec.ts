import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfatherSonComponent } from '../../../src/app/basic/cfather-son/cfather-son.component';

describe('CfatherSonComponent', () => {
  let component: CfatherSonComponent;
  let fixture: ComponentFixture<CfatherSonComponent>;

  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfatherSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('debe hacer match con snapshot', () => {
   
    expect(compiled).toMatchSnapshot();

  });

  it('no debe mostrar btn si no hay client', () => {
    
    const button = compiled.querySelectorAll('button')
    expect(button.length).toBe(2);

  });


  it('debe mostrar 2 btn si hay client', () => {
    component.client = { id: 1, name: 'Luis' }
    fixture.detectChanges()

    // expect(compiled).toMatchSnapshot();
    const button = compiled.querySelectorAll('button')
    expect(button.length).toBe(2);

  });

  it('debe emitir onDeleteClient con el btn elim', () => {
    component.client = { id: 1, name: 'Luis' }
    fixture.detectChanges()

    //Pasa a ser una funcion de JEST - saber con que argumento se llamo, las veces q se llamo...
    jest.spyOn( component.onDeleteClient, 'emit' );

    const btnDelete = compiled.querySelector('[data-test=btn-delete]')
    //console.log(btnDelete?.textContent );

    btnDelete?.dispatchEvent(new Event('click'));

    // expect(component.onDeleteClient.emit).toHaveBeenCalledWith('hola mundo')
    expect(component.onDeleteClient.emit).toHaveBeenCalled()
    // expect(button.length).toBe(0);

  });


  it('debe emitir onUpdatedClient con el btn Cambiar ID', () => {
    component.client = { id: 1, name: 'Luis' }
    fixture.detectChanges()
    
    jest.spyOn( component.onUpdatedClient, 'emit' );

    const btnChangeId = compiled.querySelector('[data-test=btn-changeId]')

    //Solo esta probando el click con todo sus valores
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onUpdatedClient.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Luis'
    })
    // expect(button.length).toBe(0);

  });



  it('debe emitir onChangeClient con el ID especificado SI hay un cliente', () => {
    
    
    jest.spyOn( component.onUpdatedClient, 'emit' )

    component.onChange(10)

    expect(component.onUpdatedClient.emit).not.toHaveBeenCalled()

    component.client = { id: 1, name: 'Luis' }
    fixture.detectChanges()
    component.onChange(10)

    expect(component.onUpdatedClient.emit).toHaveBeenLastCalledWith({

      id: 10,
      name: 'Luis'

    })


  });


});
