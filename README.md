# express_server_graphql

Purpose of this project was to create GraphQL API  that allows you to get infotmation (flight_number, name, details, date_local, success, rocket id) from https://api.spacexdata.com/v4/launches about rocket launches. 


to run this poor baby follow this steps:

0) intall yarn or npm // npm install or yarn intstall
1) mongoDB                  // brew tap mongodb/brew 
2) yarn install nodemon               // nodemon
3) curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash      // fix for permission to write
4) yarn i graphql express-graphql express axios   // graphql and axios 
5) pray

adress for GraphQL is localhost:5000/graphQL

// example of the request that gives you full list (root query) of launches
{
  launches {
    flight_number,
    mission_name,
    launch_success,
    details,
    launch_date_local,
    rocket{
      rocket_id,
      rocket_name,
      rocket_type
    }
  }
    }

    // example of request about one launch

    {
  launch(flight_number: 69) {
  }