### img-thumb
> angular directive, input[file] image local preview

### Installation
`bower install ng-img-thumb --save`

### Usage
```html
<body>
    <input type="file" id="select-file" ng-model='appCtrl.file'>
    <img-thumb file="appCtrl.file"></img-thumb>
    <script src="bower_components/ngImgThumb/img-thumb"></script>
    <script>
    angular.module('app',['ngImgThumb'])
        .controller('AppCtrl',['$scope',function($scope){
            var scope = this;
        }]);
    </script>
    
</body>
```