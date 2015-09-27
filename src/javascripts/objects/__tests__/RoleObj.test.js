import 'chai'
import expect from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should();
chai.use(sinonChai);

import RoleObj from '../RoleObj.js'

describe('RoleObj.js', () => {

  it('Eval String', (done) => {
  	var mock = sinon.mock(RoleObj);
  	var arr0 = {"1d6-h2-l3r4e5","1d6-h2-l3r4e5",,,"1","d","6","-h2","-","2","-l3","-","3","r4","4","e5","5",,}
  	arr0["index"] = 0
  	arr0["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs(arr0)
  	var arr1 = {"+","+",,,,,,,,,,,,,,,,"+",}
  	arr1["index"] = 14
  	arr1["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs(arr1)
  	var arr2 = {"2df","2df","2","df",,,,,,,,,,,,,,,}
  	arr2["index"] = 16
  	arr2["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs(arr2)
  	var arr3 = {"-","-",,,,,,,,,,,,,,,,"-",}
  	arr3["index"] = 20
  	arr3["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs(arr3)
  	var arr4 = {"6","6",,,,,,,,,,,,,,,,,"6"}
  	arr4["index"] = 22
  	arr4["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs(arr4)

  	RoleObj.evalStr("1d6-h2-l3r4e5 + 2df - 6")

  	mock.verify()

  	//reset
  	mock.restore()

  	mock = sinon.mock(RoleObj);
  	arr0 = {"1d6-h2-l3r4e5","1d6-h2-l3r4e5",,,"12","d","11","+h9","+","9","+l8","+","8","r7","7","e6","6",,}
  	arr0["index"] = 0
  	arr0["input"] = "1d6-h2-l3r4e5 + 2df - 6"
  	mock.expects("_eval").once().withExactArgs({arr0})

  	RoleObj.evalStr("12d10+h9+l8r7e6")

  	mock.verify()

  	done()
  })
  it('Eval Inner Function', (done) => {
  	done()
  })
  it('Get Pattern', (done) => {
  	done()
  })
})