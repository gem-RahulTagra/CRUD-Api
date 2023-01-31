import express from 'express';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    automationName : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    Steps : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default :Date.now
    }

});

const stepSchema = mongoose.model('Steps',postSchema);

export default stepSchema;
