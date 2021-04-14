/*
    * Usually when you buy something, you're asked whether your credit card number,
    * phone number or answer to your most secret question is still correct. However,
    * since someone could look over your shoulder,
    * you don't want that shown on your screen. Instead, we mask it.

   Your task is to write a function maskify, which c hanges all but the last four characters into '#'.

    Examples
    maskify("4556364607935616") == "############5616"
    maskify(     "64607935616") ==      "#######5616"
    maskify(               "1") ==                "1"
    maskify(                "") ==                 ""

    "What was the name of your first pet?"
    maskify("Skippy")                                   == "##ippy"
    maskify("Nananananananananananananananana Batman!") == "####################################man!"
* */

function maskify(cc) {
    return cc.length > 4 ? cc.slice( 0, -4).replace(/\d/g, '#') + cc.slice( -4,) : cc
    /*console.log(cc.slice( -4,))
    console.log('************')
    console.log(cc.slice( 0, -4))
    console.log(cc.slice( 0, -4).replace(/\d/g, '#'))*/
}

const str = "96555"
console.log(maskify(str))