# syook_task

# TO RUN THIS PROJECT FOLLOW SOME BELOW MENTIONED STEPS


Step1: clone this repo into your system


Step2: run "npm i"


Step3: setup .env file in the root folder and paste the below data into it


  MONGO_URI=mongodb+srv://syook:syook@cluster0.q8d9c.mongodb.net/logistics?retryWrites=true&w=majority
  
  
  PORT=6785
  
  
  TOKEN_SECRET=+URReqfmHK+7+43U0arlud4K2y+AL1uciXFnbQFjDI=roGwE4alzwhkONzXfy8m+ChMRb4=tIASY9TsKODDlECi70a51hcKHVhFF1cfqbzOqu6Xt1WW=QmXWHo0nGKiZ8T5NkXI2txYGyeu2NLYsY4eXDH8GKQ7VkNbw
  
  
Step4: run "npm start" command

# PREREQUISITES


must have installed nodejs, npm in the system

# HOW TO USE API's

1. first you have to create a access token and then send that token to the header of every API with key as "token" and value as the token generated.


# API'S

1. http://localhost:6785/accessToken/new

2. http://localhost:6785/items/add

3. http://localhost:6785/items/getAll

4. http://localhost:6785/items/get/:name

5. http://localhost:6785/items/update

6. http://localhost:6785/customers/add

7. http://localhost:6785/customers/getAll

8. http://localhost:6785/customers/get/:name

9. http://localhost:6785/customers/update

10. http://localhost:6785/vehicles/add

11. http://localhost:6785/vehicles/getAll

12. http://localhost:6785/vehicles/get/:registrationNumber

13. http://localhost:6785/vehicles/update

14. http://localhost:6785/orders/new

15. http://localhost:6785/orders/getAll

16. http://localhost:6785/orders/get/:orderId

17. http://localhost:6785/orders/orderDeliver


