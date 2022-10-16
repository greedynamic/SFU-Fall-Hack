import UsersDAO from "../../dao/usersDAO.js";

export default class UsersContoller {
  static async apiPostCreateAccount(req, res, next) {
    try {
      // console.log("request is " + req); //log
      if (req.body.user_name == null) {
        throw new Error("sign_up error: user_name is null");
      }
      if (req.body.password == null) {
        throw new Error("sign_up error: password is null");
      }
      if (req.body.user_id == null) {
        throw new Error("sign_up error: password is null");
      }
      const userInfo = {
        userName: req.body.user_name,
        password: req.body.password,
        userId: req.body.user_id,
      };

      console.log(
        "log: " +
          "userInfo: " +
          "userInfo.userName: " +
          userInfo.userName +
          "userInfo.password: " +
          userInfo.password +
          "userInfo.userId: " +
          userInfo.userId
      ); //log

      // //UsersResponse
      const usersResponse = await UsersDAO.addUser(userInfo);
      // console.log(usersResponse);
      // res.json({ status: "success", user_id: usersResponse });
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // static async apiUpdateReview(req, res, next) {
  //   try {
  //     const reviewId = req.body.review_id;
  //     const text = req.body.text;
  //     const date = new Date();

  //     const reviewResponse = await UsersDAO.updateReview(
  //       reviewId,
  //       req.body.user_id,
  //       text,
  //       date
  //     );

  //     var { error } = reviewResponse;
  //     if (error) {
  //       res.status(400).json({ error });
  //     }

  //     if (reviewResponse.modifiedCount === 0) {
  //       throw new Error(
  //         "unable to update review - user may not be original poster"
  //       );
  //     }

  //     res.json({ status: "success" });
  //   } catch (e) {
  //     res.status(500).json({ error: e.message });
  //   }
  // }

  //   static async apiDeleteReview(req, res, next) {
  //     try {
  //       const reviewId = req.query.id;
  //       const userId = req.body.user_id;
  //       console.log(reviewId);
  //       const reviewResponse = await UsersDAO.deleteReview(reviewId, userId);
  //       res.json({ status: "success" });
  //     } catch (e) {
  //       res.status(500).json({ error: e.message });
  //     }
  //   }
}
