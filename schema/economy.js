const mongoose = require('mongoose');
const economy = mongoose.Schema({
    user: {
        type: String,
      },
      username:{
          type: String,
          default: null
      },
      money: {
        type: Number,
        default: 0
      },
      bank: {
        type: Number,
        default: 0
      },
      cc: {
        type: Number,
        default: 0
      },
      deer: {
        type: Number,
        default: 0
      },
      trex: {
        type: Number,
        default: 0
      },
      fish: {
        type: Number,
        default: 0
      },
      wildpig: {
        type: Number,
        default: 0
      },
      search: {
        type: Array,
        default: []
      },
      work: {
        type: Number,
        default: null
      }
})
module.exports = mongoose.model('economy', economy)