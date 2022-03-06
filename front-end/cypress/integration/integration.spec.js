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

describe('Home Page Integration Testing', function () {
    it('get correct assessment path', function () {
        cy.visit('http://localhost:3000/', fakeLocation(13.7120371, 100.7887341))
        cy.get('button').contains('Start an assessment').click()
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })
    })
})

describe('Assessment Path Integration Testing', function () {
    it('click not accept', function () {
        cy.visit('http://localhost:3000/', fakeLocation(13.7120371, 100.7887341))
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
    it('select to radio and submit to go result modal', function () {
        cy.visit('http://localhost:3000/', fakeLocation(13.7120371, 100.7887341))

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
        cy.contains('การแปลผลประเมิน')
    })

    it('click back to home', function () {
        cy.visit('http://localhost:3000/', fakeLocation(13.7120371, 100.7887341))

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
        cy.get('button').contains('Back to Home').click()
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/'
            )
        })
    })
})

describe('Service Center Info Integration Testing', function () {
    it('click back to home', function () {
        cy.visit('http://localhost:3000/', fakeLocation(13.7120371, 100.7887341))

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