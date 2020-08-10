// toBe is like "equal"
test('two plus two is four', () => {
   expect(2 + 2).toBe(4);
});

// toEqual is used if u want to check the value of an object
test('object assignment', () => {
   const data = { one: 1};
   data['two'] = 2;
   expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

/* Some others matchers
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
*/


// You can check strings against regular expressions with toMatch
test('there is no I in team', () => {
   expect('team').not.toMatch(/I/) ;
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// toContain mean that array or iterable contain an element
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

// to test Errors use toThrow
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
});