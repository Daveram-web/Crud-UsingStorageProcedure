import express from 'express';
import { FullOuter, getdata, InnerJoin, Leftjoint, RightJoint } from '../controller/controller.user.js';

const Router = express.Router()

Router.get("/get",getdata)

Router.get('/Inner',InnerJoin)

Router.get('/Left',Leftjoint)

Router.get('/Right',RightJoint)
Router.get('/Full',FullOuter)

export default Router;