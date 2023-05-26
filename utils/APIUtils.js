//Creating class called APIUtils
class APIUtils
{
    
    constructor(apiContext, loginPayload)
    {
      //Assigning api context from test case to local class api context
      this.apiContext = apiContext;
      this.loginPayload = loginPayload;
    }

    //Method for obtaining the token; async is used because the method includes await
    async getToken()
    {
      //Calling the API and telling it POST method is being used
      //Saving the API response to variable called loginResponse
      //Inside () we specify the URL and the data we are sending {data:loginPayload}
      const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
      {
        data: this.loginPayload
      })
      //Making assertion to check the call to API did not fail; we should recieve a code 2** (200 - OK)
      //Since this is only pre-condition data setup, assertion is not needed
      //expect(loginResponse.ok()).toBeTruthy();
      //Getting the JSON response body and saving it to variable
      const loginResponseJson = await loginResponse.json();
      //Parsing JSON response body and extracting token from it
      const token = await loginResponseJson.token;
      console.log(token);
      //Method returns the token
      return token;
    }


    //Method for creating order
    async createOrder(orderPayload)
    {
      let response = {};
      //Assigning the token to response variable (JS object)
      response.token = await this.getToken();
      //Accessing API endpoint Create Order
      const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayload,
        headers:{ 
          'Authorization': response.token,
          'Content-Type': 'application/json'
          },
      });
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    const orderId = orderResponseJson.orders[0];
    console.log(orderId);
    //Assigning property to JS object response
    response.orderId = orderId;

    return response;
    }

}

module.exports = {APIUtils};
