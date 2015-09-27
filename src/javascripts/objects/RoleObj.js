// Regex in this example # is used as a comment
// (
// (\d+)?(d|D)(\d+)		#Matches the #d# portion
// ([+-](h|H)\d*)?			#Add/Drop # of Highest roles
// ([+-](l|L)\d*)?			#Add/Drop # of Lowest roles
// ((r|R)\d*)?				#Rerole # defaults to 1
// ((e|E)\d*)?				#Add # extra dice on max role Defaults to 1
// |
// [\*/+-]					#Math used for stuff like Matches mods like +1 or *3
// |
// \d+						#Raw Number
// )

// Final Pattern
// ((\d+)?(d|D)(\d+)([+-]H\d*)?([+-]L\d*)?(R\d*)?(E\d*)?|[\*/+-]|\d+)
// With Option /GI
class RoleObj {
  constructor() {
    var re = /((\d+)(df))|((\d+)?(d|D)(\d+)((\+H|\-H)(\d*))?((\+L|\-L)(\d*))?(R(\d*))?(E(\d*))?|[\*\/+-]|\d+)/gi; 
	var str = '1d4 + 4D6+L3 12Df';
	var m;
	 
	while ((m = re.exec(str)) !== null) {
	    if (m.index === re.lastIndex) {
	        re.lastIndex++;
	    }
	    // View your result using the m-variable.
	    // eg m[0] etc.
	}
  }

  static evalStr(str){
  	var output = []
	while ((m = re.exec(str)) !== null) {
	    if (m.index === re.lastIndex) {
	        re.lastIndex++;
	    }
	    output.push(this._eval(m))
	}
	return output
  }

  static _eval(arr){
  	if(arr[3]){ // Fudge Dice Roll
  		return {
  			type: "Fudge",
  			count: arr[2] ? arr[2] : 1
  		}
  	} else if(arr[5]){ // X Sided Role
  		return {
  			type: "Sides",
  			count: arr[4] ? arr[4] : 1,
  			sides: arr[6],
  			highest: {
  				enabled: arr[7] ? true : false
  				op: arr[8],
  				count: arr[9]
  			},
  			lowest: {
  				enabled: arr[10] ? true : false
  				op: arr[11],
  				count: arr[12]
  			},
  			rerole: arr[13] ? (arr[14] ? arr[14] : 1) : 0,
  			extra: arr[15] ? (arr[16] ? arr[16] : 1) : 0
  		}
  	} else if(arr[17]){ // Operator to run
  		return {
  			type: "Operator",
  			op: arr[17]
  		}
  	} else if(arr[18]){ // Raw Number
  		return {
  			type: "Number",
  			num: arr[18]
  		}
  	}
  }

  static getPattern(){
  	// 1d6-h2-l3r4e5 + 2df - 6
  	/* Reg Output
  	 * 00: Total Matched Chunk
  	 * 01: Tolal Matched Chunk again for some reason
  	 * 02: {Fudge} Fudge dice Count (Number)
  	 * 03: {Fudge} is "DF" if this chunk is a fudged dice notation
  	 * 04: {Sides} Number of dice to role
  	 * 05: {Sides} is "d" or "D" when chunk is a sides role notation
  	 * 06: {Sides} Number of sides on the dice
  	 * 07: {Sides} Full Sub-Chunk for add/drop highest
  	 * 08: {Sides} Operation to preform with highest dice
  	 * 09: {Sides} Number of highest dice to use if set. If not set should use 1
  	 * 10: {Sides} Full Sub-Chunk for add/drop lowest
  	 * 11: {Sides} Operation to preform with lowest dice
  	 * 12: {Sides} Number of lowest dice to use if set. If not set should use 1
  	 * 13: {Sides} Total Sub-Chunk: Rerole ones is applied a number of times and never to extra dice.
  	 * 14: {Sides} Times to Rerole
  	 * 15: {Sides} Total Sub-Chunk: adds a number of extra dice when result is max
  	 * 16: {Sides} Number of extra Dice
  	 * 17: Roll Operator Used to connect roles together to get final number.
  	 * 18: Raw number
  	 */

  	return new RegExp("("+			// (0 
  	"(\\d+)(df)"+			// (1 (2)(3)) Fudge
	"|"+					// (4
	"(\\d+)?(d|D)(\\d+)"+	// (4)(5)(6) Matches the #d# portion
	"((\\+|\\-)H(\\d*))?"+	// (7 (8)(9)) Add/Drop # of Highest roles
	"((\\+|\\-)L(\\d*))?"+	// (10 (11)(12)) Add/Drop # of Lowest roles
	"(R(\\d*))?"+			// (13 (14)) Rerole # defaults to 1
	"(E(\\d*))?"+			// (15 (16)) Add # extra dice on max role Defaults to 1
	"|"+					// 4)
	"([\\*/+-])"+			// (17) Math used for stuff like Matches mods like +1 or *3
	"|"+
	"(\\d+)"+				// (18) Raw Number
	")", "gi")					// 0)
  }
}