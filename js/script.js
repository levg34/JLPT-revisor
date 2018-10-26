var app = angular.module('myApp', [])

app.controller('myCtrl', function($scope) {
    $scope.vocabList = []
    $scope.current = []
    $scope.index = 0
    $scope.known = []
	
	$scope.load = function($fileContent){
        $scope.vocabList = Papa.parse($fileContent).data
		$scope.index = 0
		$scope.current = []
		$scope.known = []
		$scope.next()
    }
	
	$scope.next = function() {
		if ($scope.known.indexOf($scope.index)!==-1) {
			$scope.index++
			$scope.next()
		} else if ($scope.index<$scope.vocabList.length) {
			$scope.current = $scope.vocabList[$scope.index++]
			$scope.current.length = 3
			delete $scope.answer
			$scope.possibleAnswers = $scope.current[2].split(';').map(x => x.split('/')).reduce((a,b) => a.concat(b)).map(x => x.trim())
		} else {
			if ($scope.known.length!=$scope.vocabList.length) {
				$scope.index = 0
				$scope.next()
			} else {
				// $scope.current = []
			}
		}
	}
	
	$scope.hiragana = function() {
		$scope.current[3] = true
	}
	
	$scope.english = function() {
		$scope.current[4] = true
	}
	
	$scope.know = function() {
		$scope.known.push($scope.index-1)
		$scope.next()
	}
	
	$scope.ok = function() {
		if ($scope.possibleAnswers.indexOf($scope.answer)!==-1) {
			// unlock know !
			// show eng
			$scope.current[4] = 'success'
		} else if ($scope.possibleAnswers.map(x => x.split(' ')).reduce((a,b) => a.concat(b)).indexOf($scope.answer)!==-1) {
			// unlock know ? -> check
			// show eng
			$scope.current[4] = 'check'
		} else {
			// TODO: display error
		}
	}
	
	$scope.save = function() {
		$scope.current.length = 3
		var data = Papa.unparse($scope.vocabList.filter((x,index) => $scope.known.indexOf(index)==-1))
		download(data, 'progress.csv', 'csv')
	}
	
	function download(data, filename, type) {
		var file = new Blob([data], {type: type});
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else { // Others
			var a = document.createElement("a"),
					url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function() {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);  
			}, 0); 
		}
	}
})

app.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile)
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result})
					})
				}

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0])
			})
		}
	}
})