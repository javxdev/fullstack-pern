import { Router } from "express"
import { createItem, deleteItem, getItems } from "./handlers/item"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get('/', 
    getItems
)

router.post('/', 
    body('name')
        .notEmpty().withMessage('The menu item must have a name'),
    body('price')
        .isNumeric().withMessage('Please enter a valid menu item price')
        .custom( value => value > 0).withMessage(('Please enter a valid product price')),
    
    handleInputErrors,
    createItem
)

router.delete('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    handleInputErrors,
    deleteItem
)

export default router