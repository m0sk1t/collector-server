import mongoose from "mongoose";

import eventSchema from "./event.schema";

const eventModel = mongoose.model('track', eventSchema);

export default eventModel;
