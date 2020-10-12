import { getValueNames } from '../convert-CSV-to-JSON';

test("should show csv value names", () => {
  const results = getValueNames(`name 1,name 2,name 3,name 4,name 5
    1,1,1,1,1
    2,2,2,2,2
    3,3,3,3,3 
  `);
  const answer = [ 'name 1', 'name 2', 'name 3', 'name 4', 'name 5' ];
  expect(results).toEqual(answer);
});