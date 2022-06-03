class CustomError extends Error{
  constructor(message) {
    super(message)
    this.customError = "Custom Error";
  }
}

function throwGenericError() {
  throw new CustomError("Generic error");
}

function throwCustomError() {
throw new CustomError("Custom error");
}
console.log("Force generic error")
try {console.log("Generic error try block")
  throwGenericError();
} catch (error) {console.log("Generic error catch block")
console.log("Error:", error.message)
} finally {console.log("Generic error finally block")}


console.log("Force custom error")
try { console.log("Custom error try block")
    throwCustomError();
  } catch (error) { console.log("Custom error catch block")
      console.log("CustomError:", error.message)
  } finally {console.log("Custom error finally block")
  }
  

