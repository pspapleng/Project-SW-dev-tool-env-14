// import { getDistance } from "geolib";
function fakeLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 });
      });
    },
  };
}

// function distance(latitude, longitude) {
//   let distance = 0;
//   distance = getDistance(
//     { latitude, longitude },
//     {
//       latitude: 13.7120371,
//       longitude: 100.7887341,
//     }
//   );
//   return distance;
// }
describe("Component Testing (Home -> Assessment -> ServiceCenterInfo) สถานที่ให้บริการที่แนะนำลำดับที่ 1", function () {
  it("get correct page ไม่มีความเสี่ยง", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(1).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(0)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ใช่/ใช่)", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(2).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(0)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ใช่/ไม่ใช่)", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(0)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ไม่ใช่/ใช่)", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(1).check();

    cy.get('[type="radio"]').eq(2).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(0)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

});

describe("Component Testing (Home -> Assessment -> ServiceCenterInfo) สถานที่ให้บริการที่แนะนำลำดับที่ 2", function () {
  it("get correct page ไม่มีความเสี่ยง", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(1).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(1)
      .click();

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ใช่/ใช่)", function () {
    cy.visit("/" ,
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(2).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(1)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ใช่/ไม่ใช่)", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(1)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

  it("get correct page มีความเสี่ยง (ไม่ใช่/ใช่)", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(1).check();

    cy.get('[type="radio"]').eq(2).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(1)
      .click();

    //   check /ServiceCenterInfo
    // cy.url().should('contain', '/ServiceCenterInfo')

    // cy.location('pathname').should('contain', '/ServiceCenterInfo')

    cy.location().should((loc) => {
        expect(loc.pathname).to.contains(
            '/ServiceCenterInfo'
        )
    })

  });

});

describe("component Testing send id to ServiceCenterInfo", function () {
  it("get correct id from assessment to service center", function () {
    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    )
      .eq(0)
      .click();

    cy.url().then((url) => {
      const currentURL = url.split("/");
      const currentID = currentURL[4];

      cy.request({
        method: "GET",
        url: `${Cypress.config('baseUrl')}/service_center/${currentID}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(
          currentID
        );
      });
    });
  });
});

describe("component Testing API getServiceCenterByLocation", function () {
  beforeEach(() => {
    // cy.intercept("GET", "**/location*", {
    //   fixture: "getServiceCenterByLocation.json",
    // }).as("getServiceCenterByLocation");

    cy.visit(
      "/",
      fakeLocation(13.7120371, 100.7887341)
    );
  });

  it("get correct API getServiceCenterByLocation", function () {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });

    cy.get("button").contains("Start an assessment").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/Assessment");
    });

    cy.get("button").contains("ยอมรับ").click();

    cy.get('[type="radio"]').eq(0).check();

    cy.get('[type="radio"]').eq(3).check();

    cy.get("button").contains("Submit").click();

    cy.contains("การแปลผลประเมิน");

    cy.get(
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1xxk16n"]'
    ).should("have.length", 2);

    cy.request({
      method: "GET",
      url: `${Cypress.config('baseUrl')}/service_center/location?lat=${13.7120371}&lon=${100.7887341}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body)

    });

    // cy.get('[class="MuiBox-root css-13brihr"] p').invoke('text')
    //  .and("contain", "On Site")
    // .should("", distance(13.7246709, 100.7705002) / 1000 <= 30);
    // .and('contain', 'Relationflip')
    // .and('contain', 'กายใจคลินิก')

    // cy.log((distance(13.7246709, 100.7705002)/ 1000) <= 30);
  });
});
