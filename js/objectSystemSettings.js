'use strict';

const systemSettings = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
};

const numericFontSize = Number(systemSettings.fontSize);

const hasBetaAccess = systemSettings.betaAccess === "true";

const isLargeFont = numericFontSize >= 18;

let settingsText = "";

if (systemSettings.darkMode && isLargeFont) {
    settingsText = "Dark mode + large font";
} else if (systemSettings.darkMode) {
    settingsText = "Dark mode";
} else if (isLargeFont) {
    settingsText = "Large font";
} else {
    settingsText = "Default settings";
};

if (hasBetaAccess) {
    settingsText += " (Beta tester)";
};