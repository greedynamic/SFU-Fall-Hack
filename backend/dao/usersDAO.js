import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.RESTREVIEWS_NS).collection("User");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
      return; // not from source code
    }
    console.log("UsersDAO is injected."); //not from source code, it is for logging
  }

  static async addUser(user) {
    try {
      const userDoc = {
        user_name: user.userId,
        password: user.password,
      };

      return await users.insertOne(userDoc); //db command

      // let result;
      // // console.log("log: " + users.find(userDoc.user_name)._id);// log
      // // result.ObjectId = users.find(userDoc.user_name)._id;
      // result = await users.findOne(userDoc.user_name).exec();

      // return result;
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  // static async updateReview(reviewId, userId, text, date) {
  //   try {
  //     const updateResponse = await reviews.updateOne(
  //       { user_id: userId, _id: ObjectId(reviewId) },
  //       { $set: { text: text, date: date } }
  //     );

  //     return updateResponse;
  //   } catch (e) {
  //     console.error(`Unable to update review: ${e}`);
  //     return { error: e };
  //   }
  // }

  // static async deleteReview(reviewId, userId) {
  //   try {
  //     const deleteResponse = await reviews.deleteOne({
  //       _id: ObjectId(reviewId),
  //       user_id: userId,
  //     });

  //     return deleteResponse;
  //   } catch (e) {
  //     console.error(`Unable to delete review: ${e}`);
  //     return { error: e };
  //   }
  // }
}
