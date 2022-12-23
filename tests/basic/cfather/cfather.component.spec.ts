import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfatherComponent } from '../../../src/app/basic/cfather/cfather.component';
import { CfatherSonComponent } from '../../../src/app/basic/cfather-son/cfather-son.component';
import { By } from '@angular/platform-browser';

describe('CfatherComponent', () => {
  let component: CfatherComponent;
  let fixture: ComponentFixture<CfatherComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfatherComponent, CfatherSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match con snapchot', () => {
    expect(compiled).toMatchSnapshot();
  });


  it('debe de establecer el cliente con el nombre inidicado', () => {
    
    component.onSetClient('Pepe');
    fixture.autoDetectChanges()

    const codeDiv = compiled.querySelector('.mt-2')
    //console.log(codeDiv?.textContent);
    expect(codeDiv?.textContent).toContain('"name"')
    

  });


  
  it('debe borrar cliente si se emite onDeleteClient', () => {
    
    component.client = {id:1, name: 'Eduardo'};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query( By.directive(CfatherSonComponent) )

    const sonComponent: CfatherSonComponent = sonDebugElement.componentInstance
    
    //console.log(sonComponent.client);
    sonComponent.onDeleteClient.emit();
    expect( component.client).toBe(undefined)    

    //expect(codeDiv?.textContent).toContain('"name"')
    

  });


  it('debe actualizar cliente si se emite onUpdatedClient', () => {
    
    component.client = {id:1, name: 'Jose'};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query( By.directive(CfatherSonComponent) )
    const sonComponent: CfatherSonComponent = sonDebugElement.componentInstance
    
    //console.log(sonComponent.client);
    sonComponent.onUpdatedClient.emit({id: 10, name: 'Jose'});
    expect( component.client).toEqual({id: 10, name: 'Jose'})    

    //expect(codeDiv?.textContent).toContain('"name"')
    

  });


});

