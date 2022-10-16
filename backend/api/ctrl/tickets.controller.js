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

  static async apiPostTickets(req, res, next) {
    try {
      if (req.body.name == null) {
        throw new Error("name is null");
      }
      if (req.body.tickets_id == null) {
        throw new Error("tickets_id is null");
      }
      if (req.body.cost == null) {
        throw new Error("cost is null");
      }
      if (req.body.date == null) {
        throw new Error("date is null");
      }
      if (req.body.location == null) {
        throw new Error("location is null");
      }
      if (req.body.user_id == null) {
        throw new Error("user_id is null");
      }
      if (req.body.contact == null) {
        throw new Error("contact is null");
      }

      const ticketInfo = {
        _name: req.body.name, // _name is name of ticket
        _id: req.body.tickets_id,
        cost: req.body.cost,
        date: req.body.date,
        location: req.body.location,
      };
      const userInfo = {
        _id: req.body.user_id,
        contact: req.body.contact,
      };

      const TicketsResponse = await TicketsDAO.addTicket(ticketInfo, userInfo);

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
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
