// After logging in this view provides users with a list of options to begin play

define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "dispatcher",
    "variantLookup",
    "dataIO/send-generic",
    "views/view-activation-helpers"
], function ($, _, Backbone, config, dispatcher, variantLookup, send, activate) {
    
    var PlayView = Backbone.View.extend({
        el: "#play",
        headingTemplate: _.template($('#main-menu-template').html()),
        
        events: {
            "click #play-brogue-list" : "playBrogueListClick",
            "click #show-current-games" : "showCurrentGames",
            "click #show-stats" : "showStats",
            "click #show-high-scores" : "showHighScores"
        },

        initialize: function() {
            this.render();
        },

        render: function() {

            var variantData = _.values(variantLookup.variants);

            this.$el.html(this.headingTemplate(
                { variants: variantData }));

            return this;
        },

        playBrogueListClick: function(event) {
            
            event.preventDefault();

            if(!event.target.id) {
                return;
            }

            var codeAfterHyphenIndex = event.target.id.lastIndexOf("-")
            
            if(codeAfterHyphenIndex == -1) {
                return;
            }

            var code = event.target.id.substring(codeAfterHyphenIndex + 1);

            if(code in variantLookup.variants) {

                if(event.target.id.includes("seed")) {
                    dispatcher.trigger("showSeedPopup", code);
                }
                else {    
                    send("brogue", "start", {variant: code});
                    dispatcher.trigger("startGame", { variant: code });
                    this.goToConsole();
                }
            }
        },
        showCurrentGames : function(event){
            event.preventDefault();
            activate.currentGames();
        },
        showStats : function(event){
            event.preventDefault();
            activate.statistics();
        },
        showHighScores: function(event) {
            event.preventDefault();
            activate.highScores();
            dispatcher.trigger("all-scores");
        },
        goToConsole : function(){
            activate.console();
            dispatcher.trigger("showConsole");
        }
        
    });
    
    return PlayView;
    
});