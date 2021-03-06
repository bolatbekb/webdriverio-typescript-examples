import NavigationMenu from '../pages/NavigationMenu';

// Test
describe('Nested Frames test suite', () => {
    let navMenu;
    let nestedFramesPage;
    before('setup', () => {
        navMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        nestedFramesPage = navMenu.loadNestedFramesPage();
    });

    it('Nested frames test', () => {
        nestedFramesPage.switchToTopFrame();
        nestedFramesPage.leftFrame.$('body').getText().trim().should.equal('LEFT');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.middleFrame.$('body').getText().trim().should.equal('MIDDLE');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.rightFrame.$('body').getText().trim().should.equal('RIGHT');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.bottomFrame.$('body').getText().trim().should.equal('BOTTOM');
    });
});
