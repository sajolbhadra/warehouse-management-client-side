import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center bg-primary text-light py-2 '>Blog</h2>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>Difference Between Javascript and Node.Js</h3>
                <p className='text-start px-5 py-2'>
                    Sql database are relational, it use structured query language. SQL databases are vertically scalable and table based. SQL good for multi-row  data.
                    Where NoSQL like mongoDB are non-relational, unstructured and dynamic. Nosql databases are horizontally scalable. No-SQL databases are document, key value, graph, id based stores data. As the No-SQL databases are unstructured it's good for JSON type data

                </p>
            </div>
            <div className='m-5 py-5 rounded border border-primary'>
                <h3>When Should you use nodejs and when should you use mongodb</h3>
                <p></p>
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
                <p></p>
            </div>
        </div>
    );
};

export default Blog;