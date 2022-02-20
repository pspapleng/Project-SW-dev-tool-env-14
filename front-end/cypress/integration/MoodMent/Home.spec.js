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
    it('get correct home path', function () {
        cy.visit('https://moodment.ourweus.space/', fakeLocation(13.7120371, 100.7887341))

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(
                '/'
            )
        })
    })
})