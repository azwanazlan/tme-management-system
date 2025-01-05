import {ResidentEntity} from "@/model/resident";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    try {
      const id = req.query.id as string;
      const resident = await ResidentEntity.findByPk(id);
      if (resident) {
        res.status(200).json(resident);
      } else {
        res.status(404).json({message: 'Resident not found'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
  if (req.method == 'DELETE') {
    try {
      const id = req.query.id as string;
      const resident = await ResidentEntity.findByPk(id);
      if (resident) {
        await ResidentEntity.destroy({where: {id}});
        res.status(200).json({message: 'Resident deleted successfully'});
      } else {
        res.status(404).json({message: 'Resident not found'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
}