# Restaurant Review

## Project Overview

A Restaurant Review app with a Service Worker for Offline Mode.

## Instructions for Running

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 5500` (or some other port, if port 5500 is already in use.) For Python 3.x, you can use `python3 -m http.server 5500`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 5500`.
2. With your server running, visit the site: `http://localhost:5500`, and look around for a bit to see what the current experience looks like.

### Leaflet.js and Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Built with

* HTML CSS & JS.
* Leaflet.js and Mapbox.