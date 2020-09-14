
describe("Testing our form for inputs checkboxs nad submit button ", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("add test to input and submit form", () => {
        cy.get('input[name="name"]')
        .type('Ahmad')
        .should("have.value","Ahmad")


    cy.get("#positions")
      .select("Small")
      .should("have.value","Small")

   cy.get("[type='checkbox']")
      .check()
      .should('be.checked')

 
      cy.get("textarea")
      .type('special instructions')
      .should("have.value","special instructions")
  
   
      cy.get('button').click();
    });
   
   
  });
  