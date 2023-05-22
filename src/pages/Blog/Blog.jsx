import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as farStar,
  faStar as fasStar,
} from "@fortawesome/free-solid-svg-icons";
import "react-tabs/style/react-tabs.css";
import "./Blog.css";

// Add the imported icons to the FontAwesome library
library.add(farStar, fasStar);

const CustomTab = ({ children, ...otherProps }) => (
  <Tab className="custom-tab" {...otherProps}>
    {children}
  </Tab>
);

CustomTab.tabsRole = "Tab";

const Blog = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex justify-center items-center px-24 pt-24">
      <Tabs className="tabs">
        <TabList className="flex space-x-4 mb-4">
          <CustomTab>Access Tokens</CustomTab>
          <CustomTab>SQL vs NoSQL</CustomTab>
          <CustomTab>Express.js & NestJS</CustomTab>
          <CustomTab>MongoDB Aggregate</CustomTab>
        </TabList>

        <TabPanel className="tab-panel">
          <div className="mb-8 p-10">
            <h4 className="text-2xl mb-6">
              Q: What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h4>
            <p className="text-lg">
              Access tokens and refresh tokens are essential components of
              modern authentication systems. An access token is a credential
              that grants permission to access specific resources or perform
              actions within an application. It serves as a digital key and is
              short-lived for security purposes. On the other hand, a refresh
              token is a long-lived credential used to obtain a new access token
              when the current one expires.
              <br />
              <br />
              The process typically involves the following steps: during
              authentication, the server generates an access token and a refresh
              token. The client includes the access token in requests to access
              protected resources. If the token is valid, the server processes
              the request; otherwise, it returns an authentication error. When
              the access token expires, the client uses the refresh token to
              obtain a new access token from the server.
              <br />
              <br />
              Storing these tokens on the client-side requires security
              measures. Access tokens can be stored in memory or browser storage
              during the user session, while refresh tokens should be stored in
              more persistent and secure storage like HTTP-only cookies or local
              storage.
              <br />
              <br />
              In summary, access tokens and refresh tokens enable secure
              authorization and authentication. Access tokens provide temporary
              access to resources, while refresh tokens allow for obtaining new
              access tokens without reauthentication. Secure storage on the
              client-side ensures the protection of these tokens, enhancing
              overall security and user experience.
            </p>
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="mb-8 p-10">
            <h4 className="text-2xl mb-6">
              Q: Compare SQL and NoSQL databases?
            </h4>
            <p className="text-lg">
              SQL databases are like organized filing cabinets. They have a
              fixed structure and predefined rules for storing data. This makes
              them good for applications that need strict organization and
              relationships between data, like a spreadsheet. They are commonly
              used for things like online stores or banking systems.
              <br />
              <br />
              NoSQL databases, on the other hand, are more like a big storage
              box where you can throw things in without much organization. They
              are flexible and can handle large amounts of data. NoSQL databases
              are great for applications that need to handle lots of data
              quickly, like social media or real-time analytics.
              <br />
              <br />
              The choice between SQL and NoSQL depends on what you need for your
              application. If you need strict organization and structured data,
              SQL is a good choice. If you need to handle lots of data quickly
              and don't need strict organization, NoSQL is a better fit.
              <br />
              <br />
              In summary, SQL is like a well-organized filing cabinet, while
              NoSQL is like a big storage box. The right choice depends on the
              needs of your web application.
            </p>
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="mb-8 p-10">
            <h4 className="text-2xl mb-6">
              Q: What is Express.js? What is NestJS?
            </h4>
            <p className="text-lg">
              Express.js is a minimal and flexible framework that allows
              developers to create web servers and APIs using JavaScript or
              TypeScript. It provides a set of features for handling HTTP
              requests and responses, defining routes, and implementing various
              functionalities. Express.js is lightweight and has a large
              ecosystem of plugins and middleware, which enables developers to
              add additional functionality easily.
              <br />
              <br />
              NestJS, on the other hand, is a progressive framework for building
              server-side applications using TypeScript. It is heavily inspired
              by Angular, borrowing many concepts and patterns. NestJS
              emphasizes modularity and extensibility, promoting the use of
              decorators, modules, and dependency injection. It provides a
              powerful CLI tool and supports features like routing, middleware,
              validation, and database integration. NestJS is designed for
              scalability and maintainability, making it suitable for complex
              projects.
              <br />
              <br />
              In simple terms, Express.js is a flexible and easy-to-use
              framework, while NestJS provides a more structured and scalable
              approach. The choice between them depends on the requirements of
              the project. Express.js is often used for smaller applications,
              while NestJS is preferred for larger and enterprise-level
              projects.
            </p>
          </div>
        </TabPanel>

        <TabPanel className="tab-panel">
          <div className="mb-8 p-10">
            <h4 className="text-2xl mb-6">
              Q: What is MongoDB aggregate and how does it work?
            </h4>
            <p className="text-lg">
              In MongoDB, the aggregate function is a tool that allows you to
              perform advanced data processing and analysis on collections of
              documents. It works by combining multiple operations together in a
              specific order.
              <br />
              <br />
              Think of it like a pipeline where you have a collection of
              documents flowing through different stages. Each stage performs a
              specific task on the documents, such as filtering, grouping,
              sorting, and transforming data. The output of one stage becomes
              the input for the next stage, allowing you to perform complex
              operations on your data.
              <br />
              <br />
              For example, you can start by filtering the documents based on
              certain criteria using the $match stage. Then, you can group the
              filtered documents together based on a key and perform
              aggregations like counting or summing using the $group stage.
              Next, you can reshape the documents by including or excluding
              specific fields and creating new computed fields using the
              $project stage. Finally, you can sort and limit the results using
              the $sort and $limit stages.
              <br />
              <br />
              By chaining and combining these stages, you can perform complex
              data manipulations and extract meaningful insights from your data.
              The aggregate function is especially useful when dealing with
              large datasets or when you need to perform intricate data analysis
              that cannot be achieved using simpler queries.
              <br />
              <br />
              In summary, the MongoDB aggregate function allows you to process
              and analyze your data by applying a series of operations in a
              pipeline-like fashion. It gives you the flexibility to perform
              complex data manipulations and derive valuable insights from your
              collections of documents.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Blog;
