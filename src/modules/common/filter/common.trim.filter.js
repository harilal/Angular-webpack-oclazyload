class Trim {
  constructor(input) {
    this.input = input;

  }

  myMethod() {


    return function (value, char) {
      console.log("sssdc" + value);
      if (!value) return '';

      var val = value.replace(/(^\s)|(\s$)/g, ''),
        re = new RegExp("(^" + char + ")|(" + char + "$)", 'g');

      return val.replace(re, '');
    };
  }
  static TrimFilterFactory(input) {

    let filter = new Trim(input);
    return filter.myMethod();


  }
}





export default angular
  .module('common.filter', [])
  .filter('trim', () => Trim.TrimFilterFactory);


