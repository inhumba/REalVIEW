import {$ as e} from "./jquery.js";
e(document).ready((function () {
    e("input[type=checkbox]").on('change', function () {
        if ( e(this).is(":checked") ) {
            e(this).attr("checked","checked");
        } else {
            e(this).removeAttr("checked","checked");
        }
    })
}));