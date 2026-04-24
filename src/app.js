import express from "express";
import employeerouter from "./module/employee/employee.router.js";
import coursesrouter from "./module/courses/courses.routes.js";
import batchesrouter from "./module/batches/batch.router.js";
import leadrouter from "./module/lead/lead.router.js";
import followuprouter from "./module/followup/folloup.router.js";
import addmissionrouter from "./module/addmission/admission.router.js";
import subjectrouter from "./module/lms/subject/subject.routr.js";
import lesssonrouter from "./module/lms/lesson/lesson.router.js";
import testrouter from "./module/lms/test/test.router.js";
import paymentrouter from "./module/feepaymant/payment/payment.router.js";
import installmentrouter from "./module/feepaymant/installmant/installmant.router.js";

const app = express()

app.use(express.json())

//routes

app.use("/employees" , employeerouter)
app.use("/courses" , coursesrouter)
app.use("/batches" , batchesrouter)
app.use("/leads", leadrouter) 
app.use("/followup" , followuprouter)
app.use("/addmission" ,addmissionrouter)
app.use("/subject" ,subjectrouter)
app.use("/lesson" ,lesssonrouter )
app.use("/test" , testrouter)
app.use("/payment" , paymentrouter)
app.use("/installment",installmentrouter )


export default app