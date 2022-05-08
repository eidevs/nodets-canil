import { Request, Response } from "express";
import {createMenuObjetc} from '../helpers/createMenuObject';
import { Pet } from "../models/pets";

export const search = (req:Request, res:Response)=>{
    let query = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query)

    res.render('pages/home', {
        menu:createMenuObjetc(''),
        list,
        query
    });
}