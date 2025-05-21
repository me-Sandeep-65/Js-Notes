//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

//______________________________________________________________________________________________________________________________________________________

/*
1. Closure with Timer (setTimeout)
    function startTimer() {
      let counter = 0;
      
      // Create a closure inside setTimeout
      setInterval(function() {
        counter++;
        console.log("Timer:", counter);
      }, 1000);
    }

    startTimer();  // This will keep printing Timer: 1, 2, 3, ...

2. Private Variables with Closures
    function createBankAccount(balance) {
      // Private variable 'balance'
      return {
        deposit: function(amount) {
          balance += amount;
          console.log("Deposited: " + amount);
        },
        withdraw: function(amount) {
          if (balance >= amount) {
            balance -= amount;
            console.log("Withdrew: " + amount);
          } else {
            console.log("Insufficient funds");
          }
        },
        getBalance: function() {
          return balance;
        }
      };
    }
    
    const account = createBankAccount(1000);  // Start with a balance of 1000
    
    account.deposit(500);     // Deposits 500
    account.withdraw(200);    // Withdraws 200
    console.log(account.getBalance());  // Logs the current balance: 1300

3. Closure with Event Handlers (DOM events)
    <button id="clickMe">Click me</button>
    <script>
      function createClickCounter() {
        let count = 0;
        document.getElementById("clickMe").addEventListener("click", function() {
          count++;
          console.log("Button clicked", count, "times.");
        });
      }
    
      createClickCounter();  // Start the counter
    </script>


4. Function Factory with Closures
    function createMultiplier(factor) {
      return function(num) {
        return num * factor;
      };
    }
    
    const multiplyBy2 = createMultiplier(2);
    console.log(multiplyBy2(5));  // 10
    
    const multiplyBy10 = createMultiplier(10);
    console.log(multiplyBy10(5));  // 50


5. Closure in Loops
    for (var i = 0; i < 3; i++) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    }

        Expected Output:
        0, 1, 2 after 1 second each.
        
        Actual Output:
        3, 3, 3 after 1 second each.
        
        Why?
        The variable i is shared among all iterations because var is function-scoped.
        
        By the time setTimeout is executed, the loop has already finished, and i is 3 for all setTimeout calls.

*/

/*

1. Hoisting in Loops
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }

2. Hoisting in Classes
    const obj = new Rectangle(); // ❌ ReferenceError

    class Rectangle {
      constructor() {
        console.log("Rectangle created");
      }
    }


3. 
    | Feature        | Hoisted? | Usable Before Declaration?    | Notes                                |
    | -------------- | -------- | ----------------------------- | ------------------------------------ |
    | `function`     | ✅ Yes    | ✅ Yes                         | Fully hoisted                        |
    | `var`          | ✅ Yes    | ⚠️ Yes (value is `undefined`) | Declared, but not safely usable      |
    | `let`, `const` | ✅ Yes    | ❌ No                          | In temporal dead zone until declared |
    | `class`        | ✅ Yes    | ❌ No                          | Also has temporal dead zone          |


*/
