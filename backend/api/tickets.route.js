import express from "express";
import TicketsCtrl from "./ctrl/tickets.controller.js";
import UserCtrl from "./ctrl/users.controller.js";

const router = express.Router();

//sign up
router.route("/sign_up").post(UserCtrl.apiPostCreateAccount);

//simple way : router.route("/").get((req, res) => res.send("hello world"));
//restaurants.controller
router.route("/").get(TicketsCtrl.apiGetBasicInfoOfTickets);
router.route("/").post(TicketsCtrl.apiPostTickets);
router.route("/").delete(TicketsCtrl.apiDeleteTicket);

// router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);
// router.route("/cusines").get(RestaurantsCtrl.apiGetRestaurantCuisines);

//del
// //reviews.controller
// router
//   .route("/review")
//   //insertOne in db --> Post
//   .post(ReviewsCtrl.apiPostReview) //post: send data to a server to update resource
//   //update in db --> Put
//   .put(ReviewsCtrl.apiUpdateReview) //put is similar to post
//   .delete(ReviewsCtrl.apiDeleteReview);

export default router;
