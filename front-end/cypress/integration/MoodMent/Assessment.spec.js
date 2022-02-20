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

describe('Assessment Page Integration Testing', function () {
    it('get correct assessment path', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

        cy.get('button').contains('Start an assessment').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/Assessment'
            )
        })
    })
})

describe('Assessment Page Integration Testing', function () {
    it('show /home when click ไม่ยอมรับ button', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

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

describe('Assessment Page Integration Testing', function () {
    it('show service center info with correct id', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

        cy.get('button').contains('Start an assessment').click()

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(0).check()
        cy.get('[type="radio"]').eq(2).check()

        cy.get('button').contains('Submit').click()

    })
})

describe('Assessment Page Integration Testing', function () {
    it('show /home when click back to home button', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

        cy.get('button').contains('Start an assessment').click()

        cy.get('button').contains('ยอมรับ').click()

        cy.get('[type="radio"]').eq(0).check()
        cy.get('[type="radio"]').eq(2).check()

        cy.get('button').contains('Submit').click()

        cy.get('button').contains('Back to Home').click()

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/'
            )
        })
    })
})