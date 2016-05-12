/**
 * Created by nabrajk on 5/11/16.
 */

var services = (function (){


    // The public API
    return {
        validateLogin: validateLogin,
        getStudentIdentity: getStudentIdentity,
        getStudentDetails: getStudentDetails,
        getSchoolGroup: getSchoolGroup
    }
}());