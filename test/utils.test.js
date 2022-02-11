import { renderGoblin } from '../game-utils.js';
const test = QUnit.test;


test('time to test renderGoblin', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><p>Blake</p><p id="goblin-face-1">😈</p><p id="goblin-hp-1">3</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        id: '1',
        name: 'Blake',
        hp: '3',

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
