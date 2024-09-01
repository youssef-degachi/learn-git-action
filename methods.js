/* 
  beforeAll(fn,timeout)     => start before all functions
  beforeEach(fn,timeout)    => start before specific functions

  afterAll(fn,timeout)     => start after all functions
  afterEach(fn,timeout)    => start after specific functions

  default timeout = 5 sec
*/


beforeAll(()=>{
  // connect to Database
  // Empty testing table
  // add dummy data for testing
  // prepare Everything before testing})
});

afterAll(()=>{
  // close Database
  // clean database
  // clean cache
});