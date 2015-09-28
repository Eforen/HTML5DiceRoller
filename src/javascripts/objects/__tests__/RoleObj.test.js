//import 'chai'
//import expect from 'chai'
//var sinon = require('sinon')
//import sinonChai from 'sinon-chai'
//chai.should();
//chai.use(sinonChai);

import RoleObj from '../RoleObj.js'
import DieFudge from '../dice/DieFudge.js'
import DieSided from '../dice/DieSided.js'
import RoleOperator from '../RoleOperator.js'
import RoleNumber from '../RoleNumber.js'

describe('RoleObj.js', () => {
  it('Eval String', (done) => {
    done()
  })

  it('Eval String', (done) => {
    var test = RoleObj.evalStr("1d6-h2-l3r4e5 + 2df - 6")

    expect(test).to.deep.equal([{
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
      rerole: 4,
      extra: 5
    },{
      type: "Operator",
      op: "+"
    },{
      type: "Fudge",
      count: 2
    },{
      type: "Operator",
      op: "-"
    },{
      type: "Number",
      num: 6
    }])

    test = RoleObj.evalStr("12d10+h9+l8r7e6")

    expect(test).to.deep.equal([{
      type: "Sides",
      count: 12,
      sides: 10,
      highest: {
        enabled: true,
        op: "+",
        count: 9
      },
      lowest: {
        enabled: true,
        op: "+",
        count: 8
      },
      rerole: 7,
      extra: 6
    }])


    test = RoleObj.evalStr("d10r")
    //console.log(test)
    expect(test[0].type).to.equal("Sides")
    expect(test[0].count).to.equal(1)
    expect(test[0].sides).to.equal(10)
    expect(test[0].highest.enabled).to.be.false
    expect(test[0].lowest.enabled).to.be.false
    expect(test[0].rerole).to.equal(1)
    expect(test[0].extra).to.equal(0)

    test = RoleObj.evalStr("d10+h9-l8re")
    //console.log(test)
    expect(test[0]).to.deep.equal({
      type: "Sides",
      count: 1,
      sides: 10,
      highest: {
        enabled: true,
        op: "+",
        count: 9
      },
      lowest: {
        enabled: true,
        op: "-",
        count: 8
      },
      rerole: 1,
      extra: 1
    })

    test = RoleObj.evalStr("d10-h+l")
    //console.log(test)
    expect(test[0].type).to.equal("Sides")
    expect(test[0].count).to.equal(1)
    expect(test[0].sides).to.equal(10)
    expect(test[0].highest.enabled).to.be.true
    expect(test[0].highest.op).to.equal("-")
    expect(test[0].highest.count).to.equal(1)
    expect(test[0].lowest.enabled).to.be.true
    expect(test[0].lowest.op).to.equal("+")
    expect(test[0].lowest.count).to.equal(1)
    expect(test[0].rerole).to.equal(0)
    expect(test[0].extra).to.equal(0)

    done()
  })

  /* Test inner eval

   */
  it('Eval Inner Function', (done) => {

    var arr0 = ["1d6-h2-l3r4e5","1d6-h2-l3r4e5",,,"1","d","6","-h2","-","2","-l3","-","3","r4","4","e5","5",,]
    arr0["index"] = 0
    arr0["input"] = "1d6-h2-l3r4e5 + 2df - 6"
    var test = RoleObj._eval(arr0)
    expect(test).to.deep.equal({
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
      rerole: 4,
      extra: 5
    });

    var arr1 = ["+","+",,,,,,,,,,,,,,,,"+",]
    arr1["index"] = 14
    arr1["input"] = "1d6-h2-l3r4e5 + 2df - 6"
    test = RoleObj._eval(arr1)

    expect(test).to.deep.equal({
      type: "Operator",
      op: "+"
    });

    var arr2 = ["2df","2df","2","df",,,,,,,,,,,,,,,]
    arr2["index"] = 16
    arr2["input"] = "1d6-h2-l3r4e5 + 2df - 6"
    test = RoleObj._eval(arr2)

    expect(test).to.deep.equal({
      type: "Fudge",
      count: 2
    });

    var arr3 = ["-","-",,,,,,,,,,,,,,,,"-",]
    arr3["index"] = 20
    arr3["input"] = "1d6-h2-l3r4e5 + 2df - 6"
    test = RoleObj._eval(arr3)

    expect(test).to.deep.equal({
      type: "Operator",
      op: "-"
    });
    

    var arr4 = ["6","6",,,,,,,,,,,,,,,,,"6"]
    arr4["index"] = 22
    arr4["input"] = "1d6-h2-l3r4e5 + 2df - 6"
    test = RoleObj._eval(arr4)

    expect(test).to.deep.equal({
      type: "Number",
      num: 6
    });
    

    done()
  })

  it('Die Object Selector', (done) => {
  	var test = RoleObj.getDie({
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
      rerole: 4,
      extra: 5
    })
    expect(test).is.an.instanceof(DieSided)

    test = RoleObj.getDie({
      type: "Operator",
      op: "+"
    })
    expect(test).is.an.instanceof(RoleOperator)

    test = RoleObj.getDie({
      type: "Fudge",
      count: 2
    })
    expect(test).is.an.instanceof(DieFudge)

    test = RoleObj.getDie({
      type: "Operator",
      op: "-"
    })
    expect(test).is.an.instanceof(RoleOperator)

    test = RoleObj.getDie({
      type: "Number",
      num: 6
    })
    expect(test).is.an.instanceof(RoleNumber)

  	done()
  })

  /*
  it('Get Pattern', (done) => {
  	done()
  })
  */
})