1. Explain the key differences between SQL and NoSQL databases with examples.

Answer:

SQL (Structured Query Language) databases are relational databases that store data in the form of tables consisting of rows and columns. They follow a predefined schema, meaning the structure of the data must be defined before inserting data. SQL databases ensure data reliability through ACID properties (Atomicity, Consistency, Isolation, Durability). Examples include MySQL, PostgreSQL, and Oracle.

On the other hand, NoSQL databases are non-relational databases that store data in flexible formats such as documents, key-value pairs, graphs, or column families. They do not require a fixed schema, making them suitable for handling unstructured or semi-structured data. NoSQL databases follow BASE properties (Basically Available, Soft State, Eventually Consistent) and are designed for horizontal scalability. Examples include MongoDB, Cassandra, and Redis.


2. What does the CAP theorem state, and why can’t a distributed system guarantee all three properties?

Answer:

The CAP theorem states that a distributed database system can guarantee only two out of the following three properties at any given time: Consistency, Availability, and Partition Tolerance.

Consistency means that all nodes in the system see the same data at the same time. Availability ensures that every request receives a response, whether successful or not. Partition Tolerance means the system continues to function even when there are network failures or communication breakdowns between nodes.

In real-world distributed systems, network partitions are unavoidable. When a partition occurs, the system must choose between maintaining consistency or availability. If it chooses consistency, it may reject some requests, reducing availability. If it chooses availability, it may return outdated or inconsistent data. Therefore, it is impossible to guarantee all three properties simultaneously.


3. Describe three scenarios where MongoDB would be preferred over a relational database.

Answer:

MongoDB is preferred over relational databases in scenarios where flexibility, scalability, and performance are more important than strict data consistency.

First, in social media applications, data such as posts, comments, likes, and user profiles are highly dynamic and unstructured. MongoDB allows flexible schema design, making it easy to handle such changing data.

Second, in real-time applications like chat systems, MongoDB provides fast read and write operations, which are essential for handling high user traffic and instant messaging.

Third, in big data and IoT applications, large volumes of data are generated continuously from sensors and devices. MongoDB supports horizontal scaling and distributed architecture, making it suitable for managing massive datasets efficiently.




4. Why does MongoDB use BSON internally instead of storing documents as JSON?

Answer:

MongoDB uses BSON (Binary JSON) instead of JSON for internal storage because BSON is more efficient and supports additional data types. While JSON is text-based and human-readable, BSON is a binary format that is faster for machines to process.

BSON supports richer data types such as Date, ObjectId, Binary data, and Decimal128, which are not natively supported in JSON. This makes it more suitable for database operations.

Additionally, BSON allows faster data traversal and querying because it includes length information, enabling MongoDB to quickly locate fields without parsing the entire document. BSON is also more storage-efficient compared to JSON, reducing the overall size of stored data.

Thus, BSON improves performance, storage efficiency, and functionality in MongoDB systems.







5. Write MongoDB queries to find all students with GPA above 3.5 and enrolled in “CS101”.

Answer:

To find all students whose GPA is greater than 3.5 and who are enrolled in the course “CS101”, the following MongoDB query is used:

db.students.find({
  gpa: { $gt: 3.5 },
  courses: "CS101"
});

In this query, the $gt operator is used to filter students with GPA greater than 3.5. The condition courses: "CS101" checks whether the course exists in the courses array of the student document.