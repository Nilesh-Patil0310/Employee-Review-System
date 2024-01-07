import { Schema, model } from 'mongoose';
// This is Schema for review, it will contain the content of review, and the reviwer and reviewed 

const reviewSchema = Schema({
    content : {
        type : 'String',
        require : true
    },
    reviewer : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    reviewed : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},
{
    timestamps: true,
}
);

const Review = model('Review' , reviewSchema);
export default Review;