const express = require("express");
const {
  handleSignUp,
  handleLogin,
  handleGetUserProfile,
} = require("../controllers/userController");
const {
  validateSignUp,
  validateLogin,
} = require("../middleware/validationMiddleware");
const { authToken } = require("../middleware/authMiddleware");

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication and profile
 */

/**
 * @swagger
 *  /api/v1/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     security: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: Strong@123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       409:
 *         description: User already exists
 */
userRouter.post("/register", validateSignUp, handleSignUp);

/**
 * @swagger
 *  /api/v1/login:
 *   post:
 *     summary: Login a user and return a JWT
 *     tags: [Auth]
 *     security: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: Strong@123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Login failed
 *       409:
 *         description: User does not exist
 */
userRouter.post("/login", validateLogin, handleLogin);

/**
 * @swagger
 * /api/v1/profile:
 *   get:
 *     summary: Get the currently logged in user's profile
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       404:
 *         description: User not found
 */
userRouter.get("/profile", authToken, handleGetUserProfile);

module.exports = userRouter;
