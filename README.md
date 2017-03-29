# Vuejs-bootstrap-slider
A Vue.js wrapper for the bootstrap slider created by seiyria.

### Requirements:

* Vue.js v1.0.26 (may work on older versions)
* Bootstrap slider  (http://seiyria.com/bootstrap-slider/)
* Bootstrap v3

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
