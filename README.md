# Digital Bookshelf Lab

## Project Overview: 
Digital Bookshelf API — Manga Edition
A RESTful backend API built with Node.js, Express, and MongoDB (via Mongoose). This project serves as a structured digital catalog system designed to manage, track, and perform full CRUD (Create, Read, Update, Delete) operations on a personal manga library.

## The Intention
The primary technical intention behind this project is to demonstrate clean separation of concerns within a modern Node.js backend architecture. Instead of placing entire operational lifecycles into a single monolithic script, this application establishes clear boundaries between:

Network listening and configuration (server.js)

Data persistence connection lifecycles (db/connection.js)

Object Data Modeling and schema-level validation (models/Manga.js)

Route definitions and request/response orchestration (routes/MangaRoutes.js)

## Architectural Approach
Separation of Concerns: Isolated the database connection, Mongoose model, Express routing, and entry point into their own dedicated directories (db/, models/, routes/).

### RESTful Architecture: 

Implemented standard HTTP verbs (GET, POST, PUT, DELETE) adhering to the I.N.D.U.C.E.S pattern tailored for JSON APIs.

Data Integrity & Validation: Built a strict Mongoose schema requiring core metadata (title, author, isbn), enforcing unique index constraints on standard identifiers (isbn: { unique: true }), and providing sensible defaults (inStock: true).

Resilient Error Handling & Early Exits: Handled network and validation errors cleanly using async/await with try...catch blocks, using guard clauses (if (!manga) return res.status(404)...) to prevent header-collision crashes.

Decoupled API Design: Bypassed traditional templating engines (such as EJS) in favor of raw JSON payloads, making this backend fully compatible with any modern frontend client (React, Vue, mobile apps, or CLI tools).