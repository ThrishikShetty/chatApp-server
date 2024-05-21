class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); //parent class paramter that is for error
    this.statusCode = statusCode;   // newly created
  }
}

export { ErrorHandler };
