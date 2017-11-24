# blueberryCharts.js

*A jQuery Plugin to render a simple and good looking chart* - [renewoerz.de](https://www.renewoerz.de)

## Installation

You can download the latest version of blueberryCharts.js from the [GitHub releases](https://github.com/iseries/blueberryCharts.js/releases).

Add css in your head:

```html
<link rel="stylesheet" href="../src/blueberryCharts.css">
```

Add js right before the closing body tag:

```html
<script src="../src/blueberryCharts.js"></script>
```

Note: Don't forget to add jQuery. :)

**Open the index.html file in the example folder for a demo**

## Documentation

Options:

Option  | Description | Default Value
------------- | ------------- | -------------
chartData  | Data Values **0-100**  _(Type: Array)_ | [[0, 20, 33, 10, 54, 90, 70, 84, 95, 100],[0, 30, 23, 20, 44, 60, 10, 50, 10, 40]]
chartLables  | Lable Values _(Type: Array)_ | ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO']
showLines | Show Lines _(Type: Boolean)_ | true
showDots | Show Dots _(Type: Boolean)_ | true
lineColors | Colors for Lines and Dots _(Type: Array)_ | ['#FF5252', '#777777']

## License

Chart.js is available under the [MIT license](http://opensource.org/licenses/MIT).
