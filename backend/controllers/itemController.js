const Item = require('../models/item');
const User = require('../models/user');

var async = require('async');


// Display list of all Items for user.
exports.item_list = function(req, res, next) {

    console.log(req.user)
    item_ids = req.user.items;
    
    Item.find({
        '_id': { $in: item_ids}
    }, function(err, items){
        res.send(items);
    });

  };

// Handle book create on POST.
exports.item_create_post = function(req, res, next) {

    // Create a Book object with escaped and trimmed data.
        let item = new Item(
        { name: req.body.name,
        quantity: req.body.quantity,
        location: req.body.location,
        url: req.body.url,
        notes: req.body.notes,
        });

        console.log("create" + req.user._id)

        User.findOneAndUpdate({_id: req.user._id}, 
                    {$push: {items: 
                    item}},
                    {new: true}, (err, result) => {
                    console.log(result)
                   })

    // Data from form is valid. Save book.
    item.save(function (err) {
        if (err) { return next(err); }
            //successful - redirect to new book record.
            // res.redirect(book.url);
        });


};

// Handle item delete on POST.
exports.item_delete_post = function(req, res, next) {

    Item.findByIdAndRemove(req.body._id, function deleteItem(err) {
                    if (err) { return next(err); }
                })
};

// Handle item update on POST.
exports.item_update_post = function(req, res, next) {


        let item = new Item(
        { name: req.body.name,
        quantity: req.body.quantity,
        location: req.body.location,
        url: req.body.url,
        notes: req.body.notes,
        _id: req.body._id
        });

       

        Item.findByIdAndUpdate(req.body._id, item, {}, function (err,newItem) {
            if (err) { return next(err); }
               // Successful - redirect to book detail page.
               console.log(newItem)
            });


};
