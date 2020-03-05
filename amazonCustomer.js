const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3000
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Sydney78",
    database: "bamazon"

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showItem();
  });
  
  function showItem() {
    connection.query("SELECT * FROM products ", function(err, res) {
      if (err) throw err;
      console.table(res);
        prompt()
        // connection.end();


    });
  }
function prompt (res){
    var itemArray = res;
    inquirer.prompt([
        {
        type: "input",
        name: "selectItem",
        message: "Enter ID of item you would like to purchase",
        default: 1
        },
        {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase",
        default: 1
        }, 
    ]).then(function(response){
        var itemID = response.selectItem;
        var numOf = response.quantity;

        for (i=0; i< itemArray[i].length; i++){
            if (item_id === itemArray[i].item_id){

                if (numOf <= itemArray[i].quantity){
                    quantityLeft = itemArray[i].quantity - numOf
                    total = itemArray[i].price * numOf
                    shoppingCartTotal.push(" " + numOf + "-" + itemarray[i].product_name);
                    shoppingCartTotal.push(total);
                } else {
                    console.log("sorry we are currently out of that item");
                    return showItem();
                };
            };
        } //end of loop

        console.log("\n==============================\n");
        console.log("Shopping Cart: ")
        

        update(itemID, quantityLeft , total);
    })
}; //end of inquirer 