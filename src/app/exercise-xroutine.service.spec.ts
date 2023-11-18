import { TestBed } from '@angular/core/testing';

import { ExerciseXroutineService } from './exercise-xroutine.service';

describe('ExerciseXroutineService', () => {
  let service: ExerciseXroutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseXroutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
