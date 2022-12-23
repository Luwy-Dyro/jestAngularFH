import { TestBed } from '@angular/core/testing';

import { PokeService } from '../../../src/app/basic/services/poke.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokeService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[
        HttpClientModule
      ]

    });

    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('debe traer info de bulbasaur', (done) => {
    
    service.getPoke(1)
      .subscribe(poke => {
        console.log(poke);
        
        expect(poke.name).toBe('bulbasaur')

        done()
      })


  });


});
