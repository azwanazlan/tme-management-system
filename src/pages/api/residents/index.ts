
import {ResidentEntity} from "@/model/resident";
import {NextApiRequest, NextApiResponse} from "next";
import {testDatabaseConnection} from "@/services/database";
import {authenticate} from "@/pages/api/utilities/tokenUtils";
//
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await authenticate(req, res);
  await testDatabaseConnection();
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
      res.status(500).json({message: 'Internal Server Error'});
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
        data: residents,
        total: residents.length,
        pageNumber: pageNumber,
        sizeLimit: sizeLimit,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
}

//URL: http://localhost:3000/api/users
// {
//   "name": "John Doe",
//   "houseNo": "123 Main St",
//   "phoneNo": "123-456-7890",
//   "role": "Resident"
// }
