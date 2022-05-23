import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center bg-primary text-light py-2 '>Blog</h2>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>Difference Between Javascript and Node.Js</h3>
                <p className='text-start px-5 py-2'>
                    JS is a scripting language, but JS is basically the ECMA script’s updated version. . It is a high-level language, and it makes use of the Oops concept.
                    Javascript can run in any browerser with a javascript enginge.It is run only client site only. Javascript only used for frontent web development.
                    But Nodejs is an interpreter or running environment for Javascript programming language. This allow the js to be run on server. Nodejs comes with lots of library and module that enable nodejs to run on server, and mostly used for server site development. There are various modules in NodeJS, and it is mainly utilized in the process of web development.
                </p>
            </div>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>When Should you use nodejs and when should you use mongodb</h3>
                <p>
                    We know that MongoDB represents the data as a collection of documents rather than tables related by foreign keys.IT  makes  possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.MongoDB is an always used NoSQL database. The ability to store data in several formats makes MongoDB a beneficial tool for managing large amounts of data. On the other hand, Nodejs is a well-known runtime environment that assists in executing JavaScript code outside the browser
                </p>
            </div>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>Difference between sql and nosql databses</h3>
                <p className='text-start px-5 py-2'>
                    Sql database are relational, it use structured query language. SQL databases are vertically scalable and table based. SQL good for multi-row  data.
                    Where NoSQL like mongoDB are non-relational, unstructured and dynamic. Nosql databases are horizontally scalable. No-SQL databases are document, key value, graph, id based stores data. As the No-SQL databases are unstructured it's good for JSON type data
                </p>
            </div>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>JWT stands for JSON Web TOeken. JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.  This information can be verified and trusted because it is digitally signed. JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
            </div>
        </div>
    );
};

export default Blog;