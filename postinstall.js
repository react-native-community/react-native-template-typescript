#!/usr/bin/env node
var shell = require("shelljs");
shell.mv("_ondevice", ".ondevice");
shell.mv("_storybook", ".storybook");
