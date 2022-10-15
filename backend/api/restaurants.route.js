import express from "express";
import RestaurantsCtrl from "./ctrl/restaurants.controller.js";
import ReviewsCtrl from "./ctrl/reviews.controller.js";

const router = express.Router();

//simple way : router.route("/").get((req, res) => res.send("hello world"));
//restaurants.controller
router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);
router.route("/cusines").get(RestaurantsCtrl.apiGetRestaurantCuisines);

//reviews.controller
router
  .route("/review")
  //insertOne in db --> Post
  .post(ReviewsCtrl.apiPostReview) //post: send data to a server to update resource
  //update in db --> Put
  .put(ReviewsCtrl.apiUpdateReview) //put is similar to post
  .delete(ReviewsCtrl.apiDeleteReview);

export default router;
