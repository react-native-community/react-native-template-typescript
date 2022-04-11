#!/usr/bin/env node

const fs = require("fs");

fs.rename("_ondevice", ".ondevice", function (err) {
  if (err) {
    throw err;
  } else {
    console.log("\nSuccessfully configured the ondevice folder!");
  }
});

fs.rename("_storybook", ".storybook", function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully configured the storybook folder!");
  }
});
