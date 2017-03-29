module.exports = {
    template: "<input id='{{name}}' type='text'/>",
    props: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        value: {
            required: true
        },
        ticks: {
            type: Array,
            required: false

        },
        ticksLabels: {
            type: Array,
            required: false

        },
        name: {
            type: String,
            required: true
        },
        step : {
            type : Number,
            required : false,
            default : 1
        },
        tooltip : {
            type : Boolean,
            required : false,
            default : true
        },
        changeEventName : {
            type : String,
            required : false,
            default : "slide-change"
        }
    },
    ready: function () {
        var self = this;

        Vue.nextTick(function () {
            var sliderElement = document.getElementById(self.name);

            var options = {
                value: self.value,
                ticks: self.ticks,
                ticks_labels: self.ticksLabels,
                min: self.min,
                max: self.max,
                step: self.step,
                tooltip: self.tooltip ? "show" : "hide"
            };

            var slider = new Slider(sliderElement, options);

            slider.on("slide", function (event) {
                self.$dispatch(self.changeEventName, event.value)
            });
        });
    }
};
