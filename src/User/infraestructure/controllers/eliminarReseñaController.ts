import { Request, Response } from "express";
import { EliminarResenaUseCase } from "../../application/deleteResenaUseCase";

export class EliminarResenaController {
    constructor(private readonly eliminarResenaUseCase: EliminarResenaUseCase) {}

    async eliminarResena(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.userId, 10); // Convertimos a número
            const reviewId = req.params.reviewId;
    
            const reviewDeleted = await this.eliminarResenaUseCase.run(userId, reviewId);
    
            if (reviewDeleted) {
                return res.status(200).json({
                    status: "success",
                    message: "Reseña eliminada"
                });
            }
    
            return res.status(404).json({
                status: "error",
                message: "Reseña no encontrada o no se puede eliminar"
            });
        }catch (error) {   
            if (error instanceof Error) {

                if (error.message.startsWith('[')) {
                  
                  return res.status(400).send({
                    status: "error",
                    message: "Validation failed",
                    errors: JSON.parse(error.message)
                  });
                }
              }
              return res.status(500).send({
                status: "error",
                message: "An error occurred while adding the book."
              });
        }
    }
    
}
