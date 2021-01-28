describe(``, () => {
  beforeEach(() => {
    console.log("testing beforaAll");
  });

  it.only(``, () => {
    cy.visit("http://google.com");
    cy.get(".gLFyf")
      .type("Alan Kay")

    cy.get('input').contains('Pesquisa Google')
      .click();
      
    let x = cy.get(".gLFyf");
    console.log("Chained :>> ", x);

    expect(true).be.equal(true);
  });
});
