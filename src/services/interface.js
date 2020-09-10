import fetch from './../utils/fetch.js';

export default {
    raokouling(){
        return fetch.get('/API/rkl.php');
    }
}
