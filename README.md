🚀 Project Overview

This is a full-stack Institute Management System that combines:

CRM (Lead Management)
LMS (Learning Management System)
ERP (Fees & Administration)

It manages the complete flow:
Lead → Follow-up → Admission → Learning → Payment



⚙️ Technologies Used


Node.js    →   Fast and scalable backend runtime environment
Express.js →   Lightweight framework for building REST APIs
MySQL      →   Structured database to store relational data
JWT Auth   →   Secure login and authorization system
bcrypt.js  →   Password hashing for security
dotenv     →   Manage environment variables securely
REST API   →   Standard architecture for client-server communication


1. Auth APIs

Handles login & access control.


POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me


👨‍💼 2. Employee APIs


POST   /api/employees              → Create employee
GET    /api/employees              → Get all employees
GET    /api/employees/:id          → Get single employee
PUT    /api/employees/:id          → Update employee
DELETE /api/employees/:id          → Delete employee



📊 3. Lead APIs (CRM Core)


POST   /api/leads                  → Create lead
GET    /api/leads                  → List leads (filters: status, source)
GET    /api/leads/:id              → Lead details
PUT    /api/leads/:id              → Update lead
DELETE /api/leads/:id              → Delete lead
PUT /api/leads/:id/status          → Update status
PUT /api/leads/:id/assign          → Assign to employee



📞 4. Follow-up APIs


POST   /api/followups              → Create follow-up
GET    /api/followups              → List follow-ups
GET    /api/followups/:id          → Details
PUT    /api/followups/:id          → Update
DELETE /api/followups/:id          → Delete


📝 Follow-up Logs


POST   /api/followups/:id/logs     → Add conversation
GET    /api/followups/:id/logs     → Get logs



🎓 5. Admission APIs



POST   /api/admissions             → Convert lead to admission
GET    /api/admissions             → List admissions
GET    /api/admissions/:id         → Details
PUT    /api/admissions/:id         → Update
POST /api/admissions/from-lead/:leadId


📚 6. Course APIs


POST /api/courses                    → Used to create a new course
GET /api/courses                     → Used to fetch all courses
GET /api/courses/:id                 → Used to get course details
PUT /api/courses/:id                 → Used to update course information
DELETE /api/courses/:id              → Used to delete a course

🏫 7. Batch APIs


POST /api/batches                    → Used to create a new batch
GET /api/batches                     → Used to fetch all batches
GET /api/batches/:id                 → Used to get batch details
PUT /api/batches/:id                 → Used to update batch information
DELETE /api/batches/:id              → Used to delete a batch



📖 8. Subject APIs (LMS)


POST /api/subjects                  → Used to create a new subject
GET /api/subjects                   → Used to fetch all subjects
GET /api/subjects/:id               → Used to get subject details
PUT /api/subjects/:id               → Used to update a subject
DELETE /api/subjects/:id            → Used to delete a subject


📘 9. Lesson APIs


POST /api/lessons                   → Used to add a new lesson
GET /api/lessons                    → Used to fetch all lessons
GET /api/lessons/:id                → Used to get lesson details
PUT /api/lessons/:id                → Used to update a lesson
DELETE /api/lessons/:id             → Used to delete a lesson

📝 10. Test APIs

POST /api/tests                     → Used to create a test
GET /api/tests                      → Used to fetch all tests
GET /api/tests/:id                  → Used to get test details
PUT /api/tests/:id                  → Used to update a test
DELETE /api/tests/:id               → Used to delete a test


 11. Fee Installment APIs (EMI)


POST /api/installments               → Used to create an EMI plan
GET /api/installments                → Used to fetch all installments
GET /api/installments/:id            → Used to get installment details
PUT /api/installments/:id            → Used to update installment details
DELETE /api/installments/:id         → Used to delete an installment



 12. Payment APIs

POST    /api/payments               → Record payment
GET     /api/payments               → List payments
GET     /api/payments/:id           → Payment details
GET     /api/payments/admission/:admission_id → Student payments
PUT     /api/payments/:id           → Update payment
DELETE  /api/payments/:id           → Delete payment


📁 Project Structure


project-root/
│  ├── db.js
│   │   └── db.env
│
│   ├── middleware/
│   │
├── backend/
│
│   ├── config/
│   │    ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   └── error.middleware.js
│
│   ├── utils/
│   │   ├── response.helper.js
│   │   ├── logger.js
│   │   └── validation.helper.js
│
│   ├── modules/
│   │
│   │   ├── leads/
│   │   │   ├── lead.controller.js
│   │   │   ├── lead.routes.js
│   │   │   └── lead.queries.js
│   │
│   │   ├── employees/
│   │   │   ├── employee.controller.js
│   │   │   ├── employee.routes.js
│   │   │   └── employee.queries.js
│   │
│   │   ├── admissions/
│   │   │   ├── admission.controller.js
│   │   │   ├── admission.routes.js
│   │   │   └── admission.queries.js
│   │
│   │   ├── courses/
│   │   │   ├── course.controller.js
│   │   │   ├── course.routes.js
│   │   │   └── course.queries.js
│   │
│   │   ├── batches/
│   │   │   ├── batch.controller.js
│   │   │   ├── batch.routes.js
│   │   │   └── batch.queries.js
│   │
│   │   ├── subjects/
│   │   │   ├── subject.controller.js
│   │   │   ├── subject.routes.js
│   │   │   └── subject.queries.js
│   │
│   │   ├── tests/
│   │   │   ├── test.controller.js
│   │   │   ├── test.routes.js
│   │   │   └── test.queries.js
│   │
│   │   ├── payments/
│   │   │   ├── payment.controller.js
│   │   │   ├── payment.routes.js
│   │   │   └── payment.queries.js
│   │
│   │   ├── installments/
│   │   │   ├── installment.controller.js
│   │   │   ├── installment.routes.js
│   │   │   └── installment.queries.js
│   │
│   │   └── auth/
│   │       ├── auth.controller.js
│   │       ├── auth.routes.js
│   │       └── auth.queries.js
│
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

