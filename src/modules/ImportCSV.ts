export default function (files: FileList, callback: Function) {
	if (files.length <= 0) return false

	const fileReader = new FileReader()
	fileReader.readAsText(files.item(0))

	fileReader.onload = (event: any) => {
		const result = event.target.result
		const data = csvJSON(result)
		callback(data)
	}


	
	function csvJSON(csv) {
		var lines = csv.split("\n");
		var result = [];

		var headers = lines[0].split(",").map((item) => item.toLowerCase());
		
		for (var i = 1; i < lines.length; i++) {
			var obj = {};
			var currentline = lines[i].split(",");
			for (var j = 0; j < headers.length; j++) {
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}

		result.forEach(data => {
			data['adj close'] = +data['adj close']
			data['close'] = +data['close']
			data['high'] = +data['high']
			data['low'] = +data['low']
			data['open'] = +data['open']
		});
		return result
	}
}