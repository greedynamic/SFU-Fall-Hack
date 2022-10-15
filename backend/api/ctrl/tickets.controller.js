import TicketsDAO from "../../dao/ticketsDAO.js";

export default class TicketsController {
  static async apiGetBasicInfoOfTickets(req, res, next) {
    const ticketsPerPage = req.query.ticketsPerPage
      ? parseInt(req.query.ticketsPerPage, 10)
      : 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    // if (req.query.cuisine) {
    //   filters.cuisine = req.query.cuisine;
    // } else if (req.query.zipcode) {
    //   filters.zipcode = req.query.zipcode;
    // } else if (req.query.name) {
    //   filters.name = req.query.name;
    // }

    const { ticketsList, totalNumTickets } =
      await TicketsDAO.getBasicInfoOfTickets({
        filters,
        page,
        ticketsPerPage,
      });

    let response = {
      tickets: ticketsList,
      page: page,
      filters: filters,
      entries_per_page: ticketsPerPage,
      total_results: totalNumTickets,
    };
    res.json(response);
  }
  // static async apiGetRestaurantById(req, res, next) {
  //   try {
  //     let id = req.params.id || {};
  //     let restaurant = await TicketsDAO.getRestaurantByID(id);
  //     if (!restaurant) {
  //       res.status(404).json({ error: "Not found" });
  //       return;
  //     }
  //     res.json(restaurant);
  //   } catch (e) {
  //     console.log(`api, ${e}`);
  //     res.status(500).json({ error: e });
  //   }
  // }

  // static async apiGetRestaurantCuisines(req, res, next) {
  //   try {
  //     let cuisines = await TicketsDAO.getCusines();
  //     res.json(cuisines);
  //   } catch (e) {
  //     console.log(`api, ${e}`);
  //     res.status(500).json({ error: e });
  //   }
  // }
}
