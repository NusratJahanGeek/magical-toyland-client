import { useState } from "react";
import './Blog.css'

const Blog = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
  return (
    
    <div className="bg-gray-100">
    <div className="py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold">Question & Answer</h2>
        </div>
        <div className="md:mx-5">
          <div className="tabs">
          <a
                className={`tab tab-lifted ${activeTab === 0 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                Access Tokens
              </a>
              <a
                className={`tab tab-lifted ${activeTab === 1 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                SQL vs NoSQL
              </a>
              <a
                className={`tab tab-lifted ${activeTab === 2 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                Express.js & NestJS
              </a>
              <a
                className={`tab tab-lifted ${activeTab === 3 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(3)}
              >
                MongoDB Aggregate
              </a>
          </div>
  
          <div className="tab-content" style={{ display: activeTab === 0 ? "block" : "none" }}>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-2">
                Q: What is an access token and refresh token? How do they work
                and where should we store them on the client-side?
              </h4>
              <p>
                Access tokens and refresh tokens are essential components of
                modern authentication systems. An access token is a credential
                that grants permission to access specific resources or perform
                actions within an application. It serves as a digital key and is
                short-lived for security purposes. On the other hand, a refresh
                token is a long-lived credential used to obtain a new access token
                when the current one expires.
                <br /><br />
                The process typically involves the following steps: during
                authentication, the server generates an access token and a refresh
                token. The client includes the access token in requests to access
                protected resources. If the token is valid, the server processes
                the request; otherwise, it returns an authentication error. When
                the access token expires, the client uses the refresh token to
                obtain a new access token from the server.
                <br /><br />
                Storing these tokens on the client-side requires security measures.
                Access tokens can be stored in memory or browser storage during the
                user session, while refresh tokens should be stored in more
                persistent and secure storage like HTTP-only cookies or local
                storage.
                <br /><br />
                In summary, access tokens and refresh tokens enable secure
                authorization and authentication. Access tokens provide temporary
                access to resources, while refresh tokens allow for obtaining new
                access tokens without reauthentication. Secure storage on the
                client-side ensures the protection of these tokens, enhancing
                overall security and user experience.
              </p>
            </div>
          </div>
  
          <div className="tab-content" style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-2">Q: Compare SQL and NoSQL databases?</h4>
              <p>
                SQL and NoSQL databases are two distinct types of database
                management systems, each with its own strengths and use cases.
                <br /><br />
                SQL databases, also known as relational databases, are based on a
                structured query language (SQL) and have a predefined schema that
                enforces relationships between tables. They excel in handling
                complex transactions and maintaining data integrity. SQL databases
                are suitable for applications that require strict consistency,
                ACID (Atomicity, Consistency, Isolation, Durability) compliance,
                and structured data. They are commonly used for financial systems,
                e-commerce platforms, and applications with complex data
                relationships.
                <br /><br />
                On the other hand, NoSQL databases, also known as non-relational
                databases, offer a more flexible and scalable approach to data
                storage. They do not rely on a fixed schema and allow for storing
                unstructured or semi-structured data. NoSQL databases can handle
                large volumes of data and provide high scalability and
                availability. They are well-suited for applications that require
                high performance, horizontal scalability, and flexible data
                models. NoSQL databases are commonly used in web applications,
                real-time analytics, and large-scale data processing.
                <br /><br />
                While SQL databases provide strong consistency and well-defined
                relationships, NoSQL databases prioritize scalability, flexibility,
                and performance. The choice between them depends on the specific
                requirements of an application, such as data structure, scalability
                needs, and desired consistency guarantees.
                <br /><br />
                In summary, SQL databases excel in structured data and complex
                transactions, offering strong consistency and data integrity.
                NoSQL databases prioritize scalability, flexibility, and
                performance, making them suitable for handling large volumes of
                unstructured data with high availability. The decision between SQL
                and NoSQL depends on the specific needs and characteristics of the
                application at hand.
              </p>
            </div>
          </div>
  
          <div className="tab-content" style={{ display: activeTab === 2 ? "block" : "none" }}>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-2">Q: What is Express.js? What is NestJS?</h4>
              <p>
                Express.js and NestJS are both popular frameworks for building web
                applications in JavaScript/TypeScript.
                <br /><br />
                Express.js is a minimal and flexible web application framework for
                Node.js. It provides a robust set of features for creating web
                servers and APIs. Express.js allows developers to handle HTTP
                requests and responses, define routes, handle middleware, and
                implement various web application functionalities. It has a simple
                and intuitive API that makes it easy to build scalable and
                efficient web applications. Express.js is known for its lightweight
                nature and extensive ecosystem of middleware and plugins, enabling
                developers to add additional functionality as needed.
                <br /><br />
                NestJS, on the other hand, is a progressive Node.js framework for
                building scalable and maintainable server-side applications. It is
                built with TypeScript and heavily inspired by Angular, borrowing
                many concepts and architectural patterns. NestJS focuses on
                modularity and extensibility, promoting the use of decorators,
                modules, and dependency injection to structure applications in a
                clean and organized manner. It provides a powerful CLI (Command Line
                Interface) tool and supports various features like routing,
                middleware, validation, and database integration. NestJS is designed
                to enable developers to build scalable and enterprise-grade
                applications, making it a popular choice for complex projects.
                <br /><br />
                In summary, Express.js is a lightweight and flexible framework that excels in simplicity and ease of use, while NestJS is a feature-rich framework inspired by Angular, emphasizing modularity and scalability. The choice between them depends on the specific requirements of the project, with Express.js being a great fit for small to medium-sized applications and NestJS providing a more structured and scalable approach for larger and enterprise-level applications.
              </p>
            </div>
          </div>
  
          <div className="tab-content" style={{ display: activeTab === 3 ? "block" : "none" }}>
            <div>
              <h4 className="text-xl font-bold mb-2">Q: What is MongoDB aggregate and how does it work?</h4>
              <p>
                In MongoDB, the aggregate function is a powerful tool used to perform advanced data processing and analysis on collections of documents. It allows you to combine multiple operations together and process data in a flexible and efficient manner.
                <br /><br />
                The aggregate function operates on a collection and takes an array of stages as its input. Each stage represents a specific operation or transformation to be applied to the documents in the collection. The stages are executed in order, with the output of each stage becoming the input for the next stage.
                <br /><br />
                Common stages used in the aggregate framework include:
                <li>$match: Filters the documents based on specified criteria.</li>
                <li>
                  $group: Groups documents together based on a specified key and performs
                  aggregations like counting, summing, averaging, etc. on the grouped data.
                </li>
                <li>
                  $project: Reshapes the documents by including or excluding specific fields
                  and creating new computed fields.
                </li>
                <li>$sort: Orders the documents based on specified fields.</li>
                <li>$limit: Limits the number of documents returned.</li>
                <li>$skip: Skips a specified number of documents.</li>
                By chaining and combining these stages, you can perform complex
                operations like grouping, filtering, sorting, and transforming data in a
                single query. This allows you to retrieve specific subsets of data and
                perform calculations or aggregations on them.
                <br />
                The aggregate function is particularly useful when dealing with large
                datasets or when you need to perform complex data manipulations that
                cannot be achieved using simpler query methods. It provides a flexible
                and expressive way to analyze and extract insights from your data.
                <br />
                Overall, the MongoDB aggregate function is a powerful tool that enables
                you to perform advanced data processing and analysis by combining
                multiple stages of operations on your data. It empowers you to manipulate
                and transform your data in a flexible and efficient manner, opening up a
                wide range of possibilities for data analysis and exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="divider"></div> 
      </div>
  );
};

export default Blog;
