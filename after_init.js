#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ondeviceOldFolder = path.resolve(__dirname, "_ondevice");
const ondeviceNewFolder = path.resolve(__dirname, ".ondevice");

fs.rename(ondeviceOldFolder, ondeviceNewFolder, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully moved the ondevice folder!");
  }
});

const storybookCurrentPath = path.resolve(__dirname, "_storybook");
const storybookNewfolder = path.resolve(__dirname, ".storybook");

fs.rename(storybookCurrentPath, storybookNewfolder, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully moved the storybook folder!");
  }
});
