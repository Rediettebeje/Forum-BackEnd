const mySqul = require("mysql2");

// const pool = mySqul.createPool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 10
// });

const  pool= mySqul.createConnection(process.env.DATABASE_URL)

  // Create tables
  const registration = `CREATE TABLE IF NOT EXISTS registration (
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
  )`;

  const profile = `CREATE TABLE IF NOT EXISTS profile (
    user_profile_id int auto_increment,
    user_id int(11) not null,
    first_name TEXT not null,
    last_name TEXT not null,
    PRIMARY KEY (user_profile_id)
   
  )`;
   let questions = `CREATE TABLE if not exists questions(
    question_id int auto_increment,
    question_text varchar(255) not null,
    question_description varchar(255) ,
    question_code_block varchar(255) ,
    tags varchar(255),
    post_id varchar(255) not null,
    user_id int not null,
    PRIMARY KEY (question_id),
    UNIQUE KEY (post_id)
    )`;
let answers = `CREATE TABLE if not exists answers(
    answer_id int auto_increment,
    answer varchar(255) not null,
    answer_code_block varchar(255) ,
    user_id int not null,
    question_id int not null,
    PRIMARY KEY (answer_id)
    )`;

  pool.query(registration, (err, results) => {
    if (err) console.log(err);
    console.log("Registration table created");
  });

  pool.query(profile, (err, results) => {
    if (err) console.log(err);
    console.log("Profile table created");
  });


    pool.query(questions, (err, results) => {
    if (err) console.log(err);
    console.log("questions table created");
  });

  pool.query(answers, (err, results) => {
    if (err) console.log(err);
    console.log("Answers table created");
  });

// After creating tables, let's delete rows from "answers" table first
// const deleteAnswers = `DELETE FROM answers WHERE question_id IN (1, 2, 3)`;

// pool.query(deleteAnswers, (err, results) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`${results.affectedRows} rows deleted from answers table`);

//   // Now, let's delete rows from "questions" table
//   const deleteQuestions = `DELETE FROM questions WHERE question_id IN (1, 2, 3)`;

//   pool.query(deleteQuestions, (err, results) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(`${results.affectedRows} rows deleted from questions table`);
//   });
// });


  // Execute the ALTER TABLE statement to change the column name
  // const alterQuery = `ALTER TABLE question CHANGE COLUMN question question_text VARCHAR(255) NOT NULL`;
  // connection.query(alterQuery, (error, results) => {
  //   if (error) {
  //     console.error('Error altering table:', error);
  //   } else {
  //     console.log('Table altered successfully');
  //   }

  //   // Close the database connection
  //   connection.release();
  // });


module.exports = pool;


// pscale_pw_RKgKGreTGqJWIE9ae1Qr5xZ7ldyZUh9HeSAsutcBT44
// y7pqfe5xggvo9r01feor