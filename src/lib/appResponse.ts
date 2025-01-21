function formatMessage(objectOrMessage: any) {
    if (typeof objectOrMessage === 'string') return objectOrMessage;
  
    if (typeof objectOrMessage === 'object' && objectOrMessage.message) {
      return objectOrMessage.message;
    }
  
    return '';
  }
  
  function appResponse(objectOrMessage: any, data: any = null, success: any = null) {
    return {
      success: success === null ? true : success,
      message: formatMessage(objectOrMessage),
      data
    };
  }
  
  export default appResponse;