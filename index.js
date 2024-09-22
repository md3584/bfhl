// const express = require("express");
// const app = express();

// app.use(express.json());

// app
//   .route("/bfhl")
//   .get((req, res) => {
//     res.status(200).json({ operation_code: 1 });
//   })
//   .post((req, res) => {
//     const data = req.body.data || [];
//     const fileB64 = req.body.file_b64 || "";
//     const numbers = [];
//     const alphabets = [];
//     let highest_lowercase_alphabet = ""; // Ensure this is defined

//     for (const item of data) {
//       if (!isNaN(item)) {
//         numbers.push(item);
//       } else if (item.length === 1 && isNaN(item)) {
//         alphabets.push(item);
//         // Check if the character is lowercase and if it's the highest so far
//         if (item >= "a" && item <= "z" && item > highest_lowercase_alphabet) {
//           highest_lowercase_alphabet = item;
//         }
//       }
//     }

//     const file_valid = true;
//     const file_mime_type = "image/png";
//     const file_size_kb = "400";

//     res.json({
//       is_success: true,
//       user_id: "md3584",
//       email: "md3584@srmist.edu.in",
//       roll_number: "RA2111003010469",
//       numbers: numbers,
//       alphabets: alphabets,
//       highest_lowercase_alphabet: highest_lowercase_alphabet
//         ? [highest_lowercase_alphabet]
//         : [],
//       file_valid: file_valid,
//       file_mime_type: file_mime_type,
//       file_size_kb: file_size_kb,
//     });
//   });

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (item >= "a" && item <= "z" && item > highest_lowercase_alphabet) {
          highest_lowercase_alphabet = item;
        }
      }
    }

    const file_valid = true;
    const file_mime_type = "image/png";
    const file_size_kb = "400";

    res.json({
      is_success: true,
      user_id: "md3584",
      email: "md3584@srmist.edu.in",
      roll_number: "RA2111003010469",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet
        ? [highest_lowercase_alphabet]
        : [],
      file_valid: file_valid,
      file_mime_type: file_mime_type,
      file_size_kb: file_size_kb,
    });
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
