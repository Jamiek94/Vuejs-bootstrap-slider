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
            required: false,
            default: () => ([])
        },
        ticksLabels: {
            type: Array,
            required: false,
            default: () => ([])
        },
        name: {
            type: String,
            required: true
        },
        step: {
            type: Number,
            required: false,
            default: 1
        },
        tooltip: {
            type: Boolean,
            required: false,
            default: true
        },
        changeEventName: {
            type: String,
            required: false,
            default: "slide-change"
        }
    },
    data: () => ({
        slider: null
    }),
    ready: function () {
        this.slider = $("#" + this.name);

        let options = {
            value: this.value,
            ticks: this.ticks,
            ticks_labels: this.ticksLabels,
            min: this.min,
            max: this.max,
            step: this.step,
            tooltip: this.tooltip ? "show" : 'hide'
        };

        this.slider.slider(options);

        this.slider.on("change", (event) => {
            this.$dispatch(this.changeEventName, event.value.newValue)
        });
    },
    watch: {
        value: function (newValue) {
            let newSliderValue;

            if (newValue instanceof Array) {
                newSliderValue = [];
                newValue.forEach((val) => {
                    let number = parseInt(val);
                    if(isNaN(number)){
                        newSliderValue.push(val);
                    } else{
                        newSliderValue.push(number);
                    }
                })
            }
            else {
                newSliderValue = newValue;
            }

            if (this.slider) {
                this.slider.slider('setValue', newSliderValue);
            }
        }
    }
};
