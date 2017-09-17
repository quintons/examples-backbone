let MyModel = Backbone.Model.extend({
    defaults: {

    },
    validate: function(attrs){
    }
});

let MyCollection = Backbone.Collection.extend({
    model: MyModel
});

let MySuperView = Backbone.View.extend((function(){

    function _showMessage(msg) {
        alert(msg)
    }

    function _checkBarCodeEntry(val) {
        let regExp = /[0-9]/;
        return regExp.exec(val)
    }

    return {
        tagName: "div",

        events: {
            'click .myButton': 'onButtonClick'
        },

        render: function () {
            let condition = true;

            let html = '<input value="" type="text" />';

            if (condition) {
                html = '<button class="myButton">click me</button>' + html;
            }

            this.$el.html(html);

            return this;
        },

        initialize: function (options) {

        },

        onButtonClick: function () {
            // initialize bar code
            let inputValue = this.$el.find('input').val();
            if (inputValue.length > 0) {
                _checkBarCodeEntry(inputValue) ? _showMessage('match') : _showMessage('no match')
            } else {
                _showMessage('NO VALUE');
            }
        }
    }
})());

let MyView = MySuperView.extend({

});
