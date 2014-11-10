define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {

    var ConsoleCellModel = Backbone.Model.extend({
        defaults: {
            char: "0",
            foregroundColor: "#FFFFFF",
            backgroundColor: "#000000",
            x: 0,
            y: 0,
            widthPercent: 1,
            heightPercent: 2,
            leftPositionPercent: 0,
            topPositionPercent: 0,
            scaleFactor: 1
        },
        //TODO: this style information should be handled by the view rather than the model here.  Model should just have x,y, and colors

        initialize: function() {
            this.set({
                leftPositionPercent : this.get("x") * this.get("widthPercent"),
                topPositionPercent : this.get("y") * this.get("heightPercent")
            });
        }

    });

    return ConsoleCellModel;

});
