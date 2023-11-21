import { TestBed } from '@angular/core/testing';

import { ExerciseDataServiceService } from './exercise-data-service.service';

describe('ExerciseDataServiceService', () => {
  let service: ExerciseDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
