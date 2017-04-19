import jdApiConfig from '../cfg/jdApiConfig';
import $ from 'Zepto';

let getBannerList = function() {
  $.ajax({
    type: 'GET',
    url: jdApiConfig.getBannerList,
    dataType: 'json',
    timeout: jdApiConfig.timeOut,
  })
};

export {
  getBannerList
};
