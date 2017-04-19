let isDev = false;
process.env.NODE_ENV === 'production' ? isDev = true : isDev = false;
const jdApiConfig = {
  timeOut: 200000
};

export default jdApiConfig;
