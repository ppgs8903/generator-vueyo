import jdSuperFetch from './jdSuperFetch';
import jdApiConfig from '../cfg/jdApiConfig';

const getBannerList = function() {
  return jdSuperFetch(
    fetch(jdApiConfig.bannerList, {
      credentials: 'include'
    }),
    jdApiConfig.timeOut
  )
};

export {
  getBannerList
};
