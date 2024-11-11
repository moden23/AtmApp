// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.querySelector(".login-form");
//   const registerForm = document.querySelector("registerForm");
//   const checkBalanceBtn = document.querySelector(".checkBalance-btn");
//   const withdrawBtn = document.querySelector(".withdraw-btn");
//   const depositBtn = document.querySelector(".deposit-btn");
//   const transferBtn = document.querySelector(".transfer-btn");
//   let acId = 0;

//   if (registerForm) {
//     registerForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const username = document.querySelector("#username").value;
//       const password = document.querySelector("#password").value;

//       const response = await fetch("http://localhost:3000/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       console.log(username);

//       const result = await response.json();
//       console.log(result);
//       console.log(result.msg);

//       if (result.sts === "success") {
//         window.location.href = "index.html";
//       }
//     });
//   }
//   if (loginForm) {
//     loginForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const username = document.querySelector("#username-register").value;
//       const password = document.querySelector("#password-register").value;

//       const response = await fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       const result = await response.json();

//       if (result.status === "success") {
//         acId = result.acId;
//         console.log("Stored Account ID:", result.acId);
//         window.location.href = "main.html";
//       } else {
//         console.log(result.msg);
//       }
//     });
//   }
//   if (withdrawBtn) {
//     withdrawBtn.addEventListener("click", async () => {
//       const amount = prompt("Enter amount to withdraw:");
//       try {
//         const response = await fetch("http://localhost:3000/withdraw", {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ acId, amount: parseFloat(amount) }),
//         });
//         const result = await response.json();
//         alert(result.msg);
//       } catch (error) {
//         console.error("Error during withdrawal:", error);
//       }
//     });
//   }
//   if (depositBtn) {
//     depositBtn.addEventListener("click", async () => {
//       const amount = prompt("Enter amount to deposit:");
//       try {
//         const response = await fetch("http://localhost:3000/deposit", {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ acId, amount: parseFloat(amount) }),
//         });
//         const result = await response.json();
//         console.log(result.msg);
//       } catch (error) {
//         console.error("Error during deposit:", error);
//       }
//     });
//   }

//   if (transferBtn) {
//     transferBtn.addEventListener("click", async () => {
//       const srcId = prompt("Enter your account ID:");
//       const destId = prompt("Enter recipient's account ID:");
//       const amount = prompt("Enter amount to transfer:");
//       try {
//         const response = await fetch("http://localhost:3000/transfer", {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ srcId, destId, amount: parseFloat(amount) }),
//         });
//         const result = await response.json();
//         console.log(result.msg);
//       } catch (error) {
//         console.error("Error during transfer:", error);
//       }
//     });
//   }

//   if (checkBalanceBtn) {
//     checkBalanceBtn.addEventListener("click", async () => {
//       if (!acId) {
//         console.log("Account ID not found. Please log in again.");
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:3000/balance/${acId}`);

//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }

//         const result = await response.json();

//         if (result.bal !== undefined) {
//           document.getElementById(
//             "result"
//           ).innerText = `Balance: ${result.bal}`;
//         } else {
//           console.log("Failed to retrieve balance.Please try again.");
//         }
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     });
//   }
// });
