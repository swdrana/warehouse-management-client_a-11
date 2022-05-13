import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div className="container">
      <div className="faq">
        <h2>Javascript vs NodeJs</h2>
        <p>
          NodeJS : NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p>
        <p>
          JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </div>
      <div className="faq">
        <h2>When should you use NodeJS and when should you use MongoDB</h2>
        <p>
        When should we use Nodejs: Any project needs a programming environment and a runtime library that offers we basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc... So, if we want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
        </p>
        <p>
        When should we use MongoDB: If our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
        </p>
      </div>
      <div className="faq">
        <h2>Differences between sql and nosql databases</h2>
        <p>
        SQL: RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) These databases have fixed or static or predefined schema These databases are not suited for hierarchical data storage. These databases are best suited for complex queries Vertically Scalable Follows ACID property
        </p>
        <p>
        NO SQL: Non-relational or distributed database system. They have dynamic schema These databases are best suited for hierarchical data storage. These databases are not so good for complex queries Horizontally scalable Follows CAP(consistency, availability, partition tolerance)
        </p>
      </div>
      <div className="faq">
        <h2>How JWT Works</h2>
        <p>
        er from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
        </p>
      </div>
      {/* <div className="faq">
        <h2>Props ও State এর মধ্যে পার্থক্য কি?</h2>
        <p>
          Props ও State কে রিয়াক্ট এর খুবিই গুরুত্বপূর্ণ দুটি উপাদান বলা যাই।
          JSX এর মাধ্যমে তৈরিকৃত কম্পোনেন্টে ডাটা প্রেরণ করা ও User এর কাজের উপর
          নির্ভর করে Data পরিবর্তন করে দেখানো ক্ষেত্রে এ দুটির জুড়ি নাই! বিষয়
          দুটি আপাত দৃষ্টিতে দেখতে একই রকম দেখালেও এদের কাজের মধ্যে আছে অনেক
          তফাৎ। নিন্মে ছকের মাধ্যমে এ দুইয়ের পার্থক্য দেখানো হলঃ{" "}
        </p>
        <table>
          <thead>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Props হল read only অর্থাৎ ডাটা পেলে সেটিকে ব্যবহার করা যাবে
                কিন্তু পরিবর্তন করা যাবে না।{" "}
              </td>
              <td>State এর ডাটা পরিবর্তন যোগ্য।</td>
            </tr>
            <tr>
              <td>Props হয় immutable বা অপরিবর্তনীয়। </td>
              <td>State হল mutable বা পরিবর্তনযোগ্য। </td>
            </tr>
            <tr>
              <td>Props কে তার child component access করতে পারে।</td>
              <td>State কে তার child component access করতে পারে না। </td>
            </tr>
            <tr>
              <td>এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে। </td>
              <td>
                এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে না।
              </td>
            </tr>
            <tr>
              <td>Stateless component এ Props থাকতে পারে। </td>
              <td>Stateless component এ Props থাকতে পারে না। </td>
            </tr>
          </tbody>
        </table>
        <p>
          উপরিক্ত আলোচনার মাধ্যমে আমরা Props ও State সম্পর্কে সাধারণ কিছু তথ্য ও
          এদের মধ্যে পার্থক্য সম্পর্কে জানতে পারলাম, এগুলো নিয়ে কাজ করার সময়
          আমাদের উক্ত বিষয়গুলি খেয়াল রেখেই সঠিকভাবে ব্যবহার করতে হবে নতুবা,
          কাঙ্ক্ষিত ফলাফল না পাওয়া ছাড়াও বিভিন্ন সমস্যার সম্মুখীন হতে হবে।{" "}
        </p>
      </div> */}
    </div>
  );
};

export default FAQ;
