import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ DetailComponent ],
      providers: [ 
        { 
          provide: ActivatedRoute, useValue: { 
            params: {
              paramMap: convertToParamMap({id: "tt0133093"})
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
