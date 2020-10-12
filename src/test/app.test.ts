const app = require('../app.ts');

test('should 5 + 5 = 10', () => {
 expect(app.add(5,5)).toBe(10) 
})
