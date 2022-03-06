import { ServiceTypeEnum } from '../src/dal/service-center/service-type.enum';
export const mockServiceCenter = [
  {
    name: 'Center for Psychological Wellness',
    description:
      'ศูนย์สุขภาวะทางจิต เป็นศูนย์ให้บริการทางจิตวิทยาของคณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย ที่มีจุดมุ่งหมายในการบูรณาการองค์ความรู้ทางจิตวิทยากับการให้บริการเพื่อพัฒนาและเสริมสร้างสุขภาวะทางจิตให้กับสังคมไทย',
    imageUrl:
      'https://user-images.githubusercontent.com/56313629/152805064-8554e1d2-4d2a-4138-9214-2a5a9cffbf23.jpg',
    type: ServiceTypeEnum.BOTH,
    address:
      'ชั้น 5 อาคารบรมราชชนนีศรีศตพรรษ จุฬาลงกรณ์มหาวิทยาลัย ซอยจุฬาฯ12 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน',
    province: 'กรุงเทพมหานคร',
    website: '-',
    facebook: 'https://www.facebook.com/WellnessPsyCU/',
    phone: '02-218-1171, 061-736-2859',
    email: 'wellness.chula@gmail.com',
    office_hours:
      'วันจันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. (ยกเว้นวันหยุดนักขัตฤกษ์)',
    cost: '800฿',
    latitude: 1.0568,
    longitude: 0.8517,
  },
  {
    name: 'คลินิกจิตเวช โรงพยาบาลกลาง',
    description:
      'โรงพยาบาลกลางเป็นสถานที่ให้บริการบำบัดรักษาผู้ป่วย สร้างเสริมสุขภาพอนามัย และป้องกันโรค โดยเน้นบริการที่ดีเลิศ ตลอดจนปรับปรุงฟื้นฟูสภาพแวดล้อมและบรรยากาศทั้งภายในอาคารและรอบโรงพยาบาลให้ดีขึ้นเพื่อคุณภาพชีวิตที่ดีแก่ผู้รับบริการ',
    imageUrl: 'https://hivthai.org/wp-content/uploads/home-04.jpg',
    type: ServiceTypeEnum.OFFLINE,
    address: '514 ถนนหลวง ป้อมปราบศัตรูพ่าย',
    province: 'กรุงเทพมหานคร',
    website: 'http://www.klanghospital.go.th/',
    facebook: 'https://www.facebook.com/PRK514/',
    phone: '0-2220-8000',
    email: '-',
    office_hours: 'ทุกวันพฤหัสบดีที่ 1 และ 3 ของเดือน เวลา 10.00 – 12.00 น.',
    cost: '200฿ - 1000฿',
    latitude: 1.35,
    longitude: 0.5096,
  },
  {
    name: 'โรงพยาบาลตำรวจ',
    description: 'คลินิกเฉพาะทางด้านจิตเวชและยาเสพติด',
    imageUrl:
      'https://user-images.githubusercontent.com/56313629/152824148-91e0d3ad-0cef-4c9c-98b7-5b5d82c32c8b.jpg',
    type: ServiceTypeEnum.OFFLINE,
    address: 'สำนักงานตำรวจแห่งชาติ 492/1 ถนนพระราม 1 ปทุมวัน',
    province: 'กรุงเทพมหานคร',
    website:
      'https://www.policehospital.org/content/opd.php?opdID=0005&opddata_id=0027',
    facebook: 'https://www.facebook.com/policehosp/',
    phone: '0-2207-6000',
    email: 'pgh4.0pr@gmail.com',
    office_hours:
      'วันจันทร์ - วันศุกร์ เวลา 08.00 – 12.00 น. ยกเว้น วันหยุดราชการ',
    cost: '400฿ - 500฿',
    latitude: 0.8648,
    longitude: 0.3942,
  },
];