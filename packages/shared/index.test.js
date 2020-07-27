const x = require('./index')

test('simple test', function() {
    expect(x.generate().length).toBeGreaterThan(1)
})