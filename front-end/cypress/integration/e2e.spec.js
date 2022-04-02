// suggest-service.e2e.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
function fakeLocation(latitude, longitude) {
    return {
        onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
                if (latitude && longitude) {
                    return cb({ coords: { latitude, longitude } });
                }
                throw err({ code: 1 });
            });
        }
    };
}

beforeEach(() => {
    
    cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))
})

afterEach(() => {
    cy.clearLocalStorage()
})

describe('Do Assessment with Suggest Service Center result = ไม่มีความเสี่ยง', function () {
    it('the result should show ไม่มีความเสี่ยง and can redirect to ServiceCenterInfo page', function () {
        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(1).check()
        cy.get('[type="radio"]').eq(3).check()

        cy.get('button').contains('Submit').click()

        cy.contains('ไม่มีความเสี่ยง หรือ แนวโน้มที่จะเป็นโรคซึมเศร้า');

        cy.get(
            '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
        ).eq(0).click();

        //check for correct path
        cy.location().should((loc) => {
            expect(loc.pathname).to.contains(
                '/ServiceCenterInfo'
            )
        })

        //check correct service center id
        cy.url().then((url) => {
            const currentURL = url.split("/");
            const currentID = currentURL[4];

            cy.request(`/ServiceCenter/${currentID}`)
            .should(
                (response) => {
                    expect(response.status).to.eq(200)
                },
            )
        });
    })
})

describe('Do Assessment with Suggest Service Center result = มีความเสี่ยง (ใช่/ใช่)', function () {
    it('the result should show มีความเสี่ยง and can redirect to ServiceCenterInfo page', function () {
        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(0).check()
        cy.get('[type="radio"]').eq(2).check()

        cy.get('button').contains('Submit').click()

        cy.contains('เป็นผู้มีความเสี่ยง หรือ มีแนวโน้มที่จะเป็นโรคซึมเศร้า');

        cy.get(
            '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
        ).eq(0).click();

        //check for correct path
        cy.location().should((loc) => {
            expect(loc.pathname).to.contains(
                '/ServiceCenterInfo'
            )
        })
    })
})

describe('Do Assessment with Suggest Service Center result = มีความเสี่ยง (ใช่/ไม่ใช่)', function () {
    it('the result should show ไม่มีความเสี่ยง and can redirect to ServiceCenterInfo page', function () {
        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(0).check()
        cy.get('[type="radio"]').eq(3).check()

        cy.get('button').contains('Submit').click()

        cy.contains('เป็นผู้มีความเสี่ยง หรือ มีแนวโน้มที่จะเป็นโรคซึมเศร้า');

        cy.get(
            '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
        ).eq(0).click();

        //check for correct path
        cy.location().should((loc) => {
            expect(loc.pathname).to.contains(
                '/ServiceCenterInfo'
            )
        })
    })
})

describe('Do Assessment with Suggest Service Center result = มีความเสี่ยง (ไม่ใช่/ใช่)', function () {
    it('the result should show ไม่มีความเสี่ยง and can redirect to ServiceCenterInfo page', function () {
        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(1).check()
        cy.get('[type="radio"]').eq(2).check()

        cy.get('button').contains('Submit').click()

        cy.contains('เป็นผู้มีความเสี่ยง หรือ มีแนวโน้มที่จะเป็นโรคซึมเศร้า');

        cy.get(
            '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
        ).eq(0).click();

        //check for correct path
        cy.location().should((loc) => {
            expect(loc.pathname).to.contains(
                '/ServiceCenterInfo'
            )
        })
    })
})

describe('Do Assessment with Suggest Service Center When Click ไม่ยอมรับ', function () {
    it('should back to Home page', function () {
        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })

        cy.get('button').contains('ไม่ยอมรับ').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Home'
            )
        })
    })
})