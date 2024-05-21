import {
    acceptFriendRequest,
  getMyFriends,
  getMyNotifications,
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
  sendFriendRequest,
} from "../controllers/user.js";
import express from "express";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
    acceptRequestValidator,
  loginValidator,
  registerValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validator.js";
const app = express.Router();

app.post("/new", singleAvatar, registerValidator(), validateHandler, newUser);
app.post("/login", loginValidator(), login);

//After here user must be logged in to acces the routes

app.get("/me", isAuthenticated, getMyProfile);

app.get("/logout", isAuthenticated, logout);

app.get("/search", isAuthenticated, searchUser);

app.put("/sendrequest", isAuthenticated ,  sendRequestValidator(),validateHandler, sendFriendRequest);

app.put("/acceptrequest", isAuthenticated , acceptRequestValidator(),validateHandler, acceptFriendRequest);


app.get("/notifications", isAuthenticated ,  getMyNotifications);


app.get("/friends", isAuthenticated ,  getMyFriends);


export default app;
