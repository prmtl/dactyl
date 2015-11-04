var setupModule = function (module) {
    controller = mozmill.getBrowserController();
};

var assertions = {}; Components.utils.import('resource://mozmill/modules/assertions.js', assertions);
var assert = new assertions.Assert();

var testAboutPage_WhenOpened_PageIsLoadedWithExpectedTitle = function () {
    const ABOUT_PAGE_URL = "about:pentadactyl";
    const EXPECTED_TITLE = "About Pentadactyl";
    const BLANK_PAGE_URL = "about:blank";

    controller.open(BLANK_PAGE_URL);
    controller.waitForPageLoad(controller.tabs.activeTab);
    controller.open(ABOUT_PAGE_URL);
    controller.waitForPageLoad(controller.tabs.activeTab);

    assert.equal(controller.tabs.activeTab.title, EXPECTED_TITLE);
};

// vim: sw=4 ts=8 et:
