const express = require("express");
const app = express();
const port = 3000; // You can choose any port you prefer

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current date and time in UTC
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTime = currentDate.toISOString();

  // Replace these with your GitHub URLs
  const githubFileUrl =
    "https://github.com/gaiyadev/HngTaskOne/blob/main/src/app.js";
  const githubRepoUrl = "https://github.com/gaiyadev/HngTaskOne";

  const responseJson = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(responseJson);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
