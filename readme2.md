1. What are the advantages of using Mongoose over the native MongoDB driver?
    Schema-based structure
    Built-in validation
    Middleware support
    Easy data relationships (populate)
    Cleaner and structured code


2. Explain the difference between findOneAndUpdate() and updateOne().
    findOneAndUpdate() → returns updated document
    updateOne() → returns update status only
    First is used when updated data is needed



3. What is the purpose of middleware in Mongoose?
    Executes functions before/after operations
    Used for validation, logging, hashing, etc.



4. How do you implement pagination in Mongoose?
    Use skip() and limit()
    Helps fetch data page by page



5. When should you use embedding vs referencing in MongoDB schema design?
    Embedding → for small, related data (faster reads)
    Referencing → for large or reusable data (better scalability)