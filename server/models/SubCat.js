const mongoose = require('mongoose')

const SubCatSchema = mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    subCategory:{
        type:String,
        required:true,
        
    },
   
})


SubCatSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

SubCatSchema.set('toJSON',{
    virtuals: true,
});

exports.SubCat = mongoose.model('SubCat', SubCatSchema);
exports.SubCatSchema = SubCatSchema;