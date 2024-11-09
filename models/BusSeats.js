

const { mongoose } = require("mongoose")

const busSeatSchema = new mongoose.Schema({

    date: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    provider: { type: String },
    seats: { type: String },
    isSleeper: { type: Boolean, required: true },
    driver: { type: String, required: true },
    coDriver: { type: String, required: true },
    image: { type: String, required: true },
})
module.exports = mongoose.model("seats", busSeatSchema)





// const { mongoose } = require("mongoose")

// const authSchema = new mongoose.Schema({

//     date: { type: String, required: true },
//     from: { type: String, required: true },
//     to: { type: String, required: true },
//     provider: { type: String },
//     seats: [{
//         L1: 500, L2: 500, L3: 500, L4: 500, L5: 500,
//         L6: 500, L7: 500, L8: 500, L9: 500, L10: 500,
//         L11: 500, L12: 500, L13: 500, L14: 500, L15: 500,
//         L16: 500, L17: 500, L18: 500, L19: 500, L20: 500,

//         u1: 400, u2: 400, u3: 400, u4: 400, u5: 400, u6: 400,
//         u7: 400, u8: 400, u9: 400, u10: 400, u11: 400, u12: 400,
//         u13: 400, u14: 400, u15: 400, u16: 400, u17: 400, u18: 400,
//         u19: 400, u20: 400,
//     }]
// })
// module.exports = mongoose.model("seats", authSchema)









