;
'use strict';
/*========
thanks to https://github.com/nervgh/angular-file-upload/blob/master/examples/image-preview/directives.js
================*/
angular.module('ngImgThumb')
    .directive('imgThumb', ['$window',
        function($window) {
            var helper = {
                support: !!$window.FileReader,
                isFile: function(item) {
                    return angular.isObject(item) && item instanceof $window.File;
                },
                isImage: function(file) {
                    var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            };
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    file: '='
                },
                template: '<img class="thumbnail"/>',
                link: function(scope, element, attrs) {
                    var file = scope.file.getNative();
                    if (!helper.support) return;
                    if (!helper.isFile(file)) return;
                    if (!helper.isImage(file)) return;

                    function loadImg(){
                        var reader = new FileReader();
                        reader.onload = function(e){
                            element[0].src = this.result;
                        };
                        reader.readAsDataURL(file);
                    }
                    loadImg();
                }

            };
        }
    ]);