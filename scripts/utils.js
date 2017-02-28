module.exports = {
  responseCallback: (error, response) => {
    if (error) {
      setResponse(new HttpResponse(error.httpStatusCode, JSON.stringify(error)));
    } else {
      setResponse(new HttpResponse(response.httpStatusCode, JSON.stringify(response)));
    }
  }
};
