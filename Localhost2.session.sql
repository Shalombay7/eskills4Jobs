-- CREATE TABLE Students (
--     student_id INT PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     dob DATE,
--     email VARCHAR(100)
-- );
-- INSERT INTO Students(student_id,first_name,last_name,dob,email) 
-- VALUES(1,'Kwame','Mensah','1998-06-15','kwame.mensah@example.com');

-- INSERT INTO Students(student_id,first_name,last_name,dob,email) 
-- VALUES(2,'Ama','Owusu','2001-04-22','ama.owusu@example.com
-- ');

-- INSERT INTO Students(student_id,first_name,last_name,dob,email) 
-- VALUES(3,'Kojo','Asante','1999-09-10','kojo.asante@example.com
-- ');

-- INSERT INTO Students(student_id,first_name,last_name,dob,email) 
-- VALUES(4,'Efua','Adjei','2000-12-05','kojo.asante@example.com
-- ');

-- INSERT INTO Students(student_id,first_name,last_name,dob,email) 
-- VALUES(5,'Yaw','Boateng','2002-03-18','yaw.boateng@example.com
-- ');

-- SELECT * FROM students;

-- CREATE TABLE Instructors (
--     instructor_id INT PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     department VARCHAR(50),
--     email VARCHAR(50)
-- );
-- INSERT INTO instructors (instructor_id,first_name,last_name,department,email)
-- VALUES(1,'Kofi','Appiah','Computer Science','kofi.appiah@example.com'),
--     (2,'Akosua','Mensa','Mathematics','akosua.mensa@example.com'),
--     (3,'Kwesi','Antwi','Physics','kwesi.antwi@example.com'),
--     (4,'Adjoa','Baah','Chemistry','adjoa.baah@example.com'),
--     (5,'Nana','Osei','Biology','nana.osei@example.com');

--     SELECT * FROM instructors

-- CREATE TABLE Courses(
--     course_id INT PRIMARY KEY,
--     course_name VARCHAR(50),
--     course_description VARCHAR(200),
--     credit_hours INT
-- );

-- INSERT INTO Courses (course_id,course_name,course_description,credit_hours) 
-- VALUES(1,'Introduction to Programming','Basic concepts in programming using Python.',3),
--     (2,'Calculus I','Fundamentals of calculus including limits,
-- derivatives, and integrals.',4),
--     (3,'Physics I','Introduction to mechanics, heat, and sound.',3),
--     (4,'Organic Chemistry','Study of carbon compounds and their reactions.',4),
--     (5,'Biology I','Introduction to the study of living organisms and life
-- processes.',3);
-- )
-- SELECT * FROM Courses

-- CREATE TABLE Classes (
--     course_id INT PRIMARY KEY,
--     instructor_id VARCHAR(50),
--     semester VARCHAR(50),
--     schedule VARCHAR(40),
--     FOREIGN KEY (course_id) REFERENCES courses(course_id)
-- );

-- DELETE FROM Classes
-- WHERE class_id;

-- INSERT INTO classes(course_id,instructor_id,semester,schedule) 
-- VALUES(1,1,'2024 Fall','Mon/Wed 10:00-11:30 AM'),
-- (2,2,'2024 Fall','Tue/Thu 9:00-10:30 AM'),
-- (3,3,'2024 Fall','Mon/Wed 1:00-2:30 PM'),
-- (4,4,'2024 Fall','Tue/Thu 11:00-12:30 PM'),
-- (5,5,'2024 Fall','Mon/Wed 3:00-4:30 PM');

-- DROP TABLE classes;

-- CREATE TABLE Enrollments(
--     student_id INT,
--     course_id INT,
--     enrollment_date DATE
-- );

-- INSERT INTO Enrollments(student_id,course_id,enrollment_date) 
-- VALUES(1,1,'2024-08-20'),
--     (2,1,'2024-08-21'),
--     (3,2,'2024-08-22'),
--     (4,3,'2024-08-23'),
--     (5,4,'2024-08-24'),
--     (1,5,'2024-08-25'),
--     (2,3,'2024-08-26'),
--     (3,4,'2024-08-27'),
--     (4,5,'2024-08-28'),
--     (5,2,'2024-08-29');

-- CREATE TABLE User (username VARCHAR,
-- user_email VARCHAR,
-- gender BOOLEAN,
-- user_password VARCHAR
-- );
SELECT * FROM classes