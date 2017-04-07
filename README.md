# Vuejs-bootstrap-slider
A Vue.js wrapper for the bootstrap slider created by seiyria.

### Requirements:

* Vue.js v1.0.26 (may work on older versions)
* Bootstrap slider  (http://seiyria.com/bootstrap-slider/)
* jQuery
* Bootstrap v3

### Install
1. Include component

```js
components: {
        'slider': require('././../../plugins/slider'),
    }
```
2. Set some data values

```js
 data: () => ({
 distance: {
            ticks: [0, 1, 2, 3],
            ticks_labels: ['2 km', '5 km', '10 km', '25 km'],
            value: 1
        }
   });
```
3. Include component in view

```html
  <slider name="distance" :min="0" :max="3" :value="distance.value" :ticks="distance.ticks"
                                :ticks-labels="distance.ticks_labels" :tooltip="false"
                                change-event-name="onDistanceChange"></slider>
```
4. Watch for slide changes

```js
  events: {
  'onDistanceChange': function (value) {
            console.log(value);
        }
  }
  ```
  
  Prop "change-event-name" is not required. It's only needed when you have multiple sliders.
  The default event is "slide-change". This event will be triggered whenever the slider changes.

### Examples:

**Two sliders** 

```html
    <slider name="monthlyPrice" :min="0" :max="200" :value="monthlyPrice.value" :tooltip="false" change-event-name="onPriceChange"></slider>
```

**Pre set values, single slider**

```html
  <slider name="distance" :min="0" :max="3" :value="distance.value" :ticks="distance.ticks"
                                    :ticks-labels="distance.ticks_labels" :tooltip="false"
                                    change-event-name="onDistanceChange"></slider>
```

See the file slider.js for all the available properties. Not all properties that the bootstrap slider offers are coded into the wrapper.

Feel free to send a pull request!
