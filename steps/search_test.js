Feature('search');

Scenario('test search with google', ({ I }) => {
    I.amOnPage('/');
    I.waitForElement({ xpath: '//input[@type="text"][contains(@name, "q")]' });
    I.fillField({ xpath: '//input[@type="text"][contains(@name, "q")]' }, 'Unicamp');
    I.waitForVisible({ xpath: '//input[@type="submit"][contains(@name, "btnK")]' });
    I.click({ xpath: '//input[@type="submit"][contains(@name, "btnK")]' });
    I.waitForText('| Unicamp')
});

