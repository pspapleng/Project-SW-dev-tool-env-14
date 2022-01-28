## Commit Message

>คือ ข้อความที่เกิดจากข้อตกลงอย่างง่ายที่สร้างขึ้นเพื่อที่ใช้อธิบายถึงสิ่งที่เปลี่ยนแปลงใน git commit เพื่อให้ผู้ที่อ่านสามารถเข้าใจในสิ่งที่เรา commit 

## **Template**

```
<type>: <description>
```

มีส่วนประกอบทั้งหมด 2 ส่วนคือ
* **`type`** หรือชนิดของ commit มี type ที่ใช้งานบ่อย คือ feat และ fix 

  **เงื่อนไขดังนี้**
  
  * ใช้ภาษาอังกฤษ
  * เลือก type ให้เหมาะสมกับสิ่งที่ commit

* **`description`** หรือคำอธิบาย commit คือ ข้อความ commit แบบสรุปสั้น ๆ ว่า commit นี้เกี่ยวกับอะไร ทำอะไรไป ทำที่ไหน

  **เงื่อนไขดังนี้**
  * ใช้ภาษาอังกฤษ
  * เขียนอธิบายรายละเอียดอย่างชัดเจน 

## **Types of commit messages**

```
build:    ใช้เมื่อมีการทำงานที่เกี่ยวกับการ Build (เช่น คำสั่ง npm หรือ การเพิ่ม External Dependencies เป็นต้น)
docs:     ใช้เมื่อมีการทำงานที่เกี่ยวกับการปรับหรือแก้ไขเอกสาร
feat:     ใช้เมื่อมีการเพิ่ม Feature
fix:      ใช้เมื่อมีการแก้ไข Bug
perf:     ใช้เมื่อมีการทำงานที่เกี่ยวกับการปรับปรุงประสิทธิภาพ (เช่น ตัวระบบ หรือ Application)
refactor: ใช้เมื่อมีการปรับปรุง Code เก่าที่เคยเขียนไว้แล้ว ให้ดีขึ้น สั้น กระชับ และมีประสิทธิภาพมากขึ้น
style:    ใช้เมื่อมีการแก้หรือปรับ Format ต่าง ๆ ของ Code ที่ไม่กระทบกับการใช้งานของผู้ใช้ (เช่น semi-colons, quotes, trailing commas)
test:     ใช้เมื่อมีการทำงานที่เกี่ยวกับการทดสอบ (เช่น การทำ Test Case เพิ่ม หรือปรับปรุง Test Case)
```

## Example 

![commit_message_type](https://imgur.com/SDCw5ys.png)

**ตัวอย่างการ commit message**
```
build: npm update dsevents to 1.0.14
```

```
docs: correct spelling of changelog
```

```
feat: add authen for users resource 
```

```
fix: correct image loading behaviour in view
```

```
perf: remove check for function type in render stringify
```

```
refactor: simplify & cleanup reflection
```

```
style: use single quote consistently 
```

```
test: add test for missing translation parameter
```
