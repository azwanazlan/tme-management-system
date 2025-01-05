
import {ResidentEntity} from "@/model/resident";
import {NextApiRequest, NextApiResponse} from "next";
import {testDatabaseConnection} from "@/services/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    try {
      const {name, houseNo, phoneNo} = req.body;
      const resident = await ResidentEntity.create({
        name: name,
        houseNo: houseNo,
        phoneNo: phoneNo
      });
      res.status(201).json(resident);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error',
        error: error
      });
    }
  }
  if (req.method == 'GET') {
    try {
      // get pageNumber from query
      await testDatabaseConnection();
      const pageNumber = parseInt(<string>req.query.pageNumber) || 1;
      const sizeLimit = parseInt(<string>req.query.sizeLimit) || 10;
      const residents = await ResidentEntity.findAll(
        {
          limit: sizeLimit,
          offset: (pageNumber - 1) * sizeLimit,
        }
      )
      const response = {
        total: residents.length,
        pageNumber: pageNumber,
        sizeLimit: sizeLimit,
        data: residents,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error',
        error: error,
      });
    }
  }
}
