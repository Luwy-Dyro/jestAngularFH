import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }  from '@angular/common/http/testing'
import { ChariComponent } from '../../../src/app/basic/chari/chari.component';
import { PokeService } from '../../../src/app/basic/services/poke.service';


describe('ChariComponent', () => {
  let component: ChariComponent;
  let fixture: ComponentFixture<ChariComponent>;
  let compiled:HTMLElement;
  let servicePok: PokeService;
  let httpMock: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariComponent ],
      imports: [HttpClientTestingModule],
      providers: [PokeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChariComponent);
    component = fixture.componentInstance;
  
    servicePok = TestBed.inject(PokeService);
    httpMock = TestBed.inject(HttpTestingController)

    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match Snapshot', () => {
    //console.log(compiled.innerHTML);  
    expect(compiled.innerHTML).toMatchSnapshot();
  });


  it('debe de mostrar un loading al inicio', () => {

    const h2 = compiled.querySelector('h2')   
    expect(h2?.textContent).toContain('Loading...');
  });


  it('debe de cargar Chari de inmediato', () => {

    const dummyPoke = {
      name: 'Charizard',
      sprites:{
        front_default: 'https://charizard.com/sprite.png'
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6')
    
    expect(request.request.method).toBe('GET');

    request.flush(dummyPoke);

    //ciclo de vida ang, regenera los omponentes,
    fixture.detectChanges()
    //console.log(compiled.innerHTML);
    
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase() ).toContain(dummyPoke.name.toLocaleLowerCase() )

    expect( img?.src ).toBe(dummyPoke.sprites.front_default)
    //expect( img?.alt ).toBe(dummyPoke.name + '!!!')
    expect( img?.alt ).toBe(dummyPoke.name)

  });


});
