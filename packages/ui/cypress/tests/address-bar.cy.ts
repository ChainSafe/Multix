import { knownMultisigs } from '../fixtures/knownMultisigs';
import { landingPageAddressUrl, landingPageUrl } from '../fixtures/landingData';
import { testAccounts } from '../fixtures/testAccounts';
import { accountDisplay } from '../support/page-objects/components/accountDisplay';
import { landingPage } from '../support/page-objects/landingPage';
import { multisigPage } from '../support/page-objects/multisigPage';
import { topMenuItems } from '../support/page-objects/topMenuItems';

describe('Account address in the address bar', () => {

  // Helper function to verify URL contains the specified address
  const verifyUrlIncludesAddress = (address) => {
    cy.url({ timeout: 10000 }).should('include', address);
    topMenuItems.multiproxySelectorInputDesktop().should('have.value', address);
  };

  // Helper function to verify the address displayed in the account header
  const verifyAddressInHeader = (address) => {
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', address.slice(0, 6));
    });
  };

  // Setup and visit function to avoid code duplication
  const setupVisitAndVerify = (config, address) => {
    cy.setupAndVisit(config);
    verifyUrlIncludesAddress(address);
    verifyAddressInHeader(address);
  };

  it('shows multisig with 1 watched account, no connected account, and no linked address', () => {
    const { address, publicKey } = knownMultisigs['test-simple-multisig-1'];
    setupVisitAndVerify({
      url: landingPageUrl,
      watchedAccounts: [publicKey]
    }, address);
  });

  it('shows multisig with 0 watched accounts, 1 connected account, and no linked address', () => {
    const { address } = knownMultisigs['multisigs-unique-users'];
    setupVisitAndVerify({
      url: landingPageUrl,
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [testAccounts['Multisig Member Account 4']]
    }, address);
  });

  it('displays an error for unknown linked address', () => {
    const unknownAddress = testAccounts['Non Multisig Member 1'].address;
    cy.visit(landingPageAddressUrl(unknownAddress));
    landingPage.linkedAddressNotFound().should(
      'contain.text',
      "The linked address can't be found in your accounts or watched accounts on paseo"
    );
    topMenuItems.multiproxySelectorDesktop().should('not.exist');
  });

  it('resets to multisig on error with 1 watched account and unknown linked address', () => {
    const { publicKey, address } = knownMultisigs['test-simple-multisig-1'];
    cy.setupAndVisit({
      url: landingPageAddressUrl(testAccounts['Non Multisig Member 1'].address),
      watchedAccounts: [publicKey]
    });
    landingPage.resetLinkedAddressButton().click();
    verifyUrlIncludesAddress(address);
  });

  // Test cases for pure addresses and switching accounts
  it('switches account and changes the address in the bar', () => {
    const { pureAddress } = knownMultisigs['multisig-with-pure'];
    const multiAddress = knownMultisigs['test-simple-multisig-1'].address;
    cy.setupAndVisit({
      url: landingPageAddressUrl(pureAddress),
      watchedAccounts: [testAccounts['Multisig Member Account 1'].publicKey!]
    });

    topMenuItems.desktopMenu().within(() =>
      topMenuItems.multiproxySelectorDesktop()
        .click()
        .type(`${multiAddress.slice(0, 6)}{downArrow}{enter}`)
    );
    verifyUrlIncludesAddress(multiAddress);
  });

  it('switches network and resets the address', () => {
    const { address, publicKey } = knownMultisigs['test-simple-multisig-1'];
    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [publicKey]
    });
    topMenuItems.networkSelector().click();
    topMenuItems.networkSelectorOption('kusama').click();
    landingPage.noMultisigFoundError().should(
      'contain.text',
      'No multisig found for your accounts or watched accounts on kusama.'
    );
    cy.url().should('not.include', 'address=');
  });

  it('navigating to home, settings, about, and overview does not change the address bar', () => {
    const { address, publicKey } = knownMultisigs['test-simple-multisig-1'];
    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [publicKey]
    });
    ['homeButton', 'settingsButton', 'overviewButton', 'aboutButton'].forEach(button => {
      topMenuItems[button]().click();
      cy.url().should('include', address);
    });
  });
});
