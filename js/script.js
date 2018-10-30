var app = angular.module('myApp', [])

app.controller('myCtrl', function($scope) {
    $scope.vocabList = []
    $scope.current = []
    $scope.index = 0
    $scope.known = []
	$scope.mode = 'jap_eng'
	
	$scope.load = function($fileContent){
		var parsed = Papa.parse($fileContent).data.filter(x => x.length>2)
		if (parsed[0]&& parsed[0].length>3) {
			if ($scope.mode === 'reading') {
				$scope.vocabList = parsed.map(x => [x[2],x[3],x[0]+' / '+x[1]]).filter(x => x[0])
			} else if ($scope.mode === 'eng_jap') {
				$scope.vocabList = parsed.map(x => [x[3],x[2],x[0]+' / '+x[1]])
			} else {
				// jap_eng
				$scope.vocabList = parsed.map(x => [x[2],x[0]+' / '+x[1],x[3]])
			}
		} else {
			// jap_eng
			$scope.vocabList = parsed
		}
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
			$scope.current.length = 3
			$scope.current = $scope.vocabList[$scope.index++]
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
		$scope.focusInput = true
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
		$scope.focusInput = true
	}
	
	$scope.ok = function() {
		$scope.hiragana()
		if (!$scope.answer) {
			return
		}
		if ($scope.possibleAnswers.map(x => x.toLowerCase()).indexOf($scope.answer.toLowerCase())!==-1) {
			// unlock know !
			// show eng
			$scope.current[4] = 'success'
		} else if ($scope.possibleAnswers.map(x => x.toLowerCase()).map(x => x.split(' ')).reduce((a,b) => a.concat(b)).indexOf($scope.answer.toLowerCase())!==-1) {
			// unlock know ? -> check
			// show eng
			$scope.current[4] = 'check'
		} else {
			// TODO: display error
			if ($scope.answer==='?') {
				$scope.english()
			}
			delete $scope.answer
		}
		$scope.focusInput = true
	}
	
	$scope.enter = function() {
		if (!$scope.current[4]) {
			$scope.ok()
		} else if ($scope.current[4]==='success') {
			$scope.know()
		} else if ($scope.current[4] !== 'check') {
			$scope.next()
		}
	}
	
	$scope.keyPress = function($event) {
		if ($event.keyCode===13) {
			$scope.enter()
		} else if ($scope.current[4] === 'check') {
			if ($event.keyCode === 43 || $event.keyCode === 107) {
				// console.log('+')
				$scope.know()
			} else if ($event.keyCode === 45 ||  $event.keyCode === 109) {
				// console.log('-')
				$scope.next()
			}
			$event.preventDefault()
		} else if ($scope.current[4]) {
			$event.preventDefault()
		}
	}
	
	$scope.save = function() {
		$scope.current.length = 3
		var saveTable = $scope.vocabList.filter((x,index) => $scope.known.indexOf(index)==-1)
		var startTable = saveTable.splice($scope.index-1-$scope.known.length)
		var datable = startTable.concat(saveTable)
		var data = Papa.unparse(datable,{delimiter:'\t'})
		download(data, 'progress.csv', 'csv')
	}
	
	function download(data, filename, type) {
		var file = new Blob([data], {type: type})
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename)
		else { // Others
			var a = document.createElement("a"),
					url = URL.createObjectURL(file)
			a.href = url
			a.download = filename
			document.body.appendChild(a)
			a.click()
			setTimeout(function() {
				document.body.removeChild(a)
				window.URL.revokeObjectURL(url)  
			}, 0) 
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
				var reader = new FileReader()
                
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

app.directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) { 
          //console.log('trigger',value)
          //$timeout(function() {
            element[0].focus()
            scope.trigger = false
          //})
        }
      })
    }
  }
})
