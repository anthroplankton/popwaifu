const mongoose = require('mongoose')

const modeConfigSchema = new mongoose.Schema({
  modeName: {
    type: String,
    required: true
  },
  imgNormalUrl: {
    type: String,
    default: ''
  },
  imgPopUrl: {
    type: String,
    default: ''
  },
  imgInfo: {
    type: String,
    default: ''
  },
  audioNormalUrl: {
    type: String,
    default: ''
  },
  audioPopUrl: {
    type: String,
    default: ''
  },
  audioInfo: {
    type: String,
    default: ''
  }
}, { _id: false })

const schema = new mongoose.Schema({
  schemaVersion: {
    type: String,
    default: '001.000.000'
  },
  name: {
    type: String,
    default: ''
  },
  popCount: {
    type: Number,
    default: 0
  },
  modeConfigList: {
    type: [modeConfigSchema],
    default: [{
      modeName: 'default',
      imgNormalUrl: '',
      imgPopUrl: '',
      imgInfo: '',
      audioNormalUrl: '',
      audioPopUrl: '',
      audioInfo: ''
    }]
  }
}, { collection: 'waifu', timestamps: true, versionKey: false })

schema.index({ popCount: 1 })

const model = mongoose.model('Waifu', schema)
module.exports = model
