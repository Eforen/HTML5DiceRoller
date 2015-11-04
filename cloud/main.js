
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.beforeSave("Role", function(request, response) {
  var role = request.object.get("role");
  if (request.object.isNew()) {
  	let arr = request.object.get("struct")
  	for (var i = arr.length - 1; i >= 0; i--) {
  		switch(arr[i].type){
  			case "Sides":
  				/*
				type: "Sides",
				count: 1,
				sides: 6,
				highest: {
					enabled: true,
					op: "-",
					count: 2
				},
				lowest: {
					enabled: true,
					op: "-",
					count: 3
				},
				rerole: 4, //Rerole this many times
				extra: 5 //this many extra dice when Maxed
				*/
				if(arr[i].sides<2) response.error("Not enough sides to role.")

				if(arr[i].highest.enabled &&
					arr[i].highest.op = "-" &&
					arr[i].highest.count >= arr[i].count) response.error("Attempting to remove all or more dice via Highest")

				if(arr[i].lowest.enabled &&
					arr[i].lowest.op = "-" &&
					arr[i].lowest.count >= arr[i].count) response.error("Attempting to remove all or more dice via Lowest.")

				var end = {
					"total":0,
					"roles":[]
				}
				var r = {}
				for (var i = 0; i < arr[i].count; i++) {
					r.finalRole = getRandomInt(1,sides)
					r.roles = []
					r.reroles = 0
					while(
							arr[i].rerole > 0 &&
							r.finalRole === 1 &&
							r.reroles < arr[i].rerole) {
						r.reroles++
						r.roles.push(r.finalRole)
						r.finalRole = getRandomInt(1,sides)
					}
					r.roles.push(r.finalRole)
					end.total += r.finalRole
					end.roles.push(r)
				}

				//Handle Extra Dice
				if(arr[i].extra > 0 && end.total === arr[i].count * arr[i].sides){
					end.extras = []
					for (var i = 0; i < arr[i].extra; i++) {
						end.extras.push(getRandomInt(1,sides))
					}
				}

				var roles = null
				var remove = 0
				
				//Lowest
				if(arr[i].lowest.enabled){
					roles = getRoles(arr[i].result.roles)
					if((arr[i].lowest.op = "-" && arr[i].lowest.count < arr[i].count) || (arr[i].lowest.op = "+" && arr[i].lowest.count < arr[i].count)){

						remove = arr[i].count - arr[i].lowest.count
						var ci = 0 //current index
						var cv = 0 //current value
						while(roles.length > remove){
							ci = 0 //current index
							cv = 0 //current value
							for (var i = 0; i < roles.length; i++) {
								if(i===0) cv = roles[i]
								if(roles[i] < cv){
									cv = roles[i]
									ci = i
								}
							}
							roles.remove(ci)
						}
					}
					arr[i].lowest.result = roles
				}

				//Highest
				if(arr[i].highest.enabled){
					roles = getRoles(arr[i].result.roles)
					if((arr[i].highest.op = "-" && arr[i].highest.count < arr[i].count) || (arr[i].highest.op = "+" && arr[i].highest.count < arr[i].count)){

						remove = arr[i].count - arr[i].highest.count
						var ci = 0 //current index
						var cv = 0 //current value
						while(roles.length > remove){
							ci = 0 //current index
							cv = 0 //current value
							for (var i = 0; i < roles.length; i++) {
								if(i===0) cv = roles[i]
								if(roles[i] < cv){
									cv = roles[i]
									ci = i
								}
							}
							roles.remove(ci)
						}
					}
					arr[i].highest.result = roles
				}

				//Put it all into the 
				arr[i].result = end
  				break
  			case "fudge":
  				//{
			    //  type: "Fudge",
			    //  count: 2
			    //}
				arr[i].result = []
				for (var i = 0; i < arr[i].count; i++) {
					arr[i].result.push(getRandomInt(1,2)===2)
				}
  				break
  			case "Operator":
  				break
  			case "Number":
  				break
  		}
  	};
  }
  response.success();
});

function getRoles(roles){
	var r = []
	for (var i = 0; i < roles.length; i++) {
		r.push(roles[i].finalRole)
	}
	return r
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}