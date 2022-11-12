// Login endpoint Documentation start here

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     description: Login
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *           required:
 *             - username
 *             - password
 *     responses:
 *       '200':
 *         description: A successful response
 */
// Login endpoint Documentation end here


/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - Register new user
 *     description: Post to user database
 *     parameters:
 *       - name: reqBody
 *         description: request body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             text:
 *               type: string
 *           required:
 *             - text
 *     responses:
 *       '200':
 *         description: A successful response
 */
// Create Category endpoint documentation start here
