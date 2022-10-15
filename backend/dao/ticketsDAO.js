import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let tickets;

export default class TicketsDAO {
  static async injectDB(conn) {
    if (tickets) {
      return;
    }
    try {
      tickets = await conn.db(process.env.RESTREVIEWS_NS).collection("Ticket");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in TicketsDAO: ${e}`
      );
      return; //not from source code
    }
    console.log("TicketsDAO is injected."); //not from source code, it is for logging
    // console.log(tickets); //logging
  }

  static async getBasicInfoOfTickets({
    filters = null,
    page = 0,
    ticketsPerPage = 15,
  } = {}) {
    let query;
    // if (filters) {
    //   if ("name" in filters) {
    //     query = { $text: { $search: filters["name"] } }; //db command
    //   } else if ("cuisine" in filters) {
    //     query = { cuisine: { $eq: filters["cuisine"] } };
    //   } else if ("zipcode" in filters) {
    //     query = { "address.zipcode": { $eq: filters["zipcode"] } };
    //   }
    // }

    let cursor;

    try {
      cursor = await tickets.find(query); //db command //TODO
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { ticketsList: [], totalNumTickets: 0 };
    }

    const displayCursor = cursor
      .limit(ticketsPerPage)
      .skip(ticketsPerPage * page);

    try {
      const ticketsList = await displayCursor.toArray();
      const totalNumTickets = await tickets.countDocuments(query);

      return { ticketsList, totalNumTickets };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { ticketsList: [], totalNumTickets: 0 };
    }
  }
  // static async getRestaurantByID(id) {
  //   try {
  //     const pipeline = [
  //       //db command
  //       {
  //         $match: {
  //           _id: new ObjectId(id),
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: "reviews",
  //           let: { id: "$_id" },
  //           pipeline: [
  //             { $match: { $expr: { $eq: ["$restaurant_id", "$$id"] } } },
  //             { $sort: { date: -1 } },
  //           ],
  //           as: "reviews",
  //         },
  //       },
  //       {
  //         $addFields: {
  //           reviews: "$reviews",
  //         },
  //       },
  //     ];
  //     return await tickets.aggregate(pipeline).next(); //db command
  //   } catch (e) {
  //     console.error(`Something went wrong in getRestaurantByID: ${e}`);
  //     throw e;
  //   }
  // }

  // static async getCusines() {
  //   let cusines = [];
  //   try {
  //     cusines = await tickets.distinct("cuisine");
  //     return cusines;
  //   } catch (e) {
  //     console.error(`Unable to get cuisines, ${e}`);
  //     return cusines;
  //   }
  // }
}
