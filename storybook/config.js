import { configure } from '@storybook/react';

function loadStories() {
    const req = require.context('./', true, /\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);