import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {

  //Crea un modulo para las pruebas. 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });




  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'testeo01'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('testeo01');
  });


  // it('should render title of appComponent', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const component = fixture.componentInstance;
  //   const compiled = fixture.nativeElement as HTMLElement;

  //   const h1 = compiled.querySelector('h1');
  //   //expect(compiled.querySelector('.content span')?.textContent).toContain('testeo01 app is running!');

  //   expect(h1?.textContent).toContain(component.title );
  // });

  // it('Debe hacer match con el snapchot', ()=>{

  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.nativeElement as HTMLElement;

  //   fixture.detectChanges();
  //   expect(compiled).toMatchSnapshot()

  // })

});
