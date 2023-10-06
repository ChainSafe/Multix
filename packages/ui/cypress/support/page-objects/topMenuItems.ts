export const topMenuItems = {
  connectButton: () => cy.get('[data-cy="button-menu-connect"]'),
  multiproxySelector: () => cy.get('[data-cy="select-multiproxy"]', { timeout: 20000 }),
  multiproxySelectorOption: () => cy.get('[data-cy="select-multiproxy-option"]')
}
