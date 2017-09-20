    let ParentView = Backbone.View.extend({

        initialize: function(options){},
        render: function(){
            $(window).on('keypress.save', this.executeSave.bind(this));
        },

        save: function(e){
            console.log(this.validate())
        },

        executeSave: function(){
            this.save();
        },
        
        remove: function(){
            $(window).off('keypress.save')
        }

    });

    let ChildView = ParentView.extend({

        initialize: function(options){},
        render: function(){
            ParentView.prototype.render.call(this);
        },

        validate: function(){
            return 'validate';
        }

    });

    let view = new ChildView();
    view.render();
