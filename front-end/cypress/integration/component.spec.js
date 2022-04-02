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

beforeEach(() => {
    
  cy.visit("/", fakeLocation(13.7120371, 100.7887341));

  cy.intercept(
    {
      method: "GET",
      url: `/service_center/location?lat=${13.7120371}&lon=${100.7887341}`,
    },
    [
      {
        "id": "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
        "createAt": "2022-02-10T16:19:25.359Z",
        "updateAt": "2022-02-10T16:19:25.359Z",
        "deleteAt": null,
        "name": "OneManCounselor",
        "description": "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
        "imageUrl": "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
        "type": "BOTH",
        "address": "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
        "province": "กรุงเทพมหานคร",
        "website": "https://www.onemancounselor.com/",
        "facebook": "https://www.facebook.com/onemancounselor",
        "phone": "-",
        "email": "onemancounselor@gmail.com",
        "office_hours": "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
        "cost": "1300฿ - 3000฿",
        "latitude": "13.77396306",
        "longitude": "100.5651552"
    }   
    ]
  ).as("getServiceCenterByLocation");

 cy.intercept(
    {
      method: "GET",
      path: `/service_center/**`,
    },
    [
      {
        "id": "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
        "createAt": "2022-02-10T16:19:25.359Z",
        "updateAt": "2022-02-10T16:19:25.359Z",
        "deleteAt": null,
        "name": "OneManCounselor",
        "description": "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
        "imageUrl": "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
        "type": "BOTH",
        "address": "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
        "province": "กรุงเทพมหานคร",
        "website": "https://www.onemancounselor.com/",
        "facebook": "https://www.facebook.com/onemancounselor",
        "phone": "-",
        "email": "onemancounselor@gmail.com",
        "office_hours": "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
        "cost": "1300฿ - 3000฿",
        "latitude": "13.77396306",
        "longitude": "100.5651552"
    }
    ]
  ).as("getServiceCenterById");

});

afterEach(() => {
  cy.clearLocalStorage()
})

describe("Component Testing", function () {
  // //สถานที่ให้บริการที่แนะนำลำกับที่ 1 และเป็นการตอบแบบสอบถามด้วยผู้ใช้ที่ไม่มีความเสี่ยง
  it("get correct page (Home -> Assessment -> ServiceCenterInfo) and get API getServiceCenterByLocation", function () {

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
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
    )

      .should("have.length", 2)
      .eq(0)
      .click();

    cy.url().should('include', 'ServiceCenterInfo')

    
  });


});
describe("get correct id from assessment to service center", function () {
  
  it("get correct id from assessment to service center", function () {
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
      '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-j0g0od-MuiPaper-root-MuiCard-root"]'
    )

      .should("have.length", 2)
      .eq(0)
      .click();

    cy.url().then((url) => {
      const currentURL = url.split("/");
      const currentID = currentURL[4];
      cy.log(currentID)

      cy.wait('@getServiceCenterById').its('response.body').its('0').its('id').should('eq', `${currentID}`)    
     
    });
  });

});

