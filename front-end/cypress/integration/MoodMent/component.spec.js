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

describe('Do Assessment with Suggest Service Center ไม่มีความเสี่ยง', function () {
    it('Ask for allow location', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

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
    })
})