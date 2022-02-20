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

describe('Service Center Info Page Integration Testing', function () {
    it('get correct service center', function () {
        cy.visit('https://moodment.ourweus.space/ServiceCenterInfo/25fe8586-3c25-43cd-ac45-dbec99a75208')
        cy.request('https://moodment.ourweus.space/ServiceCenterInfo/25fe8586-3c25-43cd-ac45-dbec99a75208').then((res) => {
            expect(res.status).to.eq(200)
        })
    })
})