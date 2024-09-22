// document.getElementById("submitBtn").addEventListener("click", async () => {
//   const dataInput = document.getElementById("dataInput").value;

//   try {
//     const jsonData = JSON.parse(dataInput);

//     const response = await fetch("http://localhost:4000/bfhl", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(jsonData),
//     });

//     const result = await response.json();

//     document.getElementById(
//       "responseContainer"
//     ).innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
//   } catch (error) {
//     document.getElementById(
//       "responseContainer"
//     ).innerHTML = `<pre>Error: ${error.message}</pre>`;
//   }
// });
document.getElementById("submitBtn").addEventListener("click", async () => {
  const dataInput = document.getElementById("dataInput").value;

  try {
    const jsonData = JSON.parse(dataInput);

    // Make the POST request to the back end
    const response = await fetch("http://localhost:4000/bfhl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    // Display the response from the server
    document.getElementById(
      "responseContainer"
    ).innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  } catch (error) {
    document.getElementById(
      "responseContainer"
    ).innerHTML = `<pre>Error: ${error.message}</pre>`;
  }
});
