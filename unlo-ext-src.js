/**
 * Created by danielxiao on 15/6/24.
 */

/**
 *
 * propertyOf extension
 *
 * example:
 *  .get
 *      _.extPropertyOf({a:{b:1}}, 'a.b') => 1
 *      _.extPropertyOf({a:{b:1}}, 'a.c') => null
 *  .set
 *      _.extPropertyOf({a:{b:1}}, 'a.b', 2) => {a:{b:2}}
 *      _.extPropertyOf({a:{b:1}}, 'a.c', 2) => {a:{b:2, c:2}}
 *
 * @param obj
 * @param property
 * @param value
 * @returns {*}
 */
_.extPropertyOf = function(obj, property, value) {

    var properties = property.split('.'),
        target = obj;

    if (value) { // set
        _.each(properties, function(propItem, idx) {
            if (idx === properties.length - 1) { // last item
                target[propItem] = value;
            } else {
                target = target[propItem] || (target[propItem] = {});
            }
        });
        return obj;
    } else { // get
        _.some(properties, function(propItem) {
            target = target[propItem] || null;
            if (!target) return true; // if null, break
        });
        return target;
    }
};