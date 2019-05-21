function Me() {
    this.name = 'bog';
  }
  
  Me.prototype.firstName = function() {
    return this.name;
  }
  
  Me.prototype.fullName = function() {
    return 'budak ' + this.firstName()
  }
  
  Me.prototype.age = function() {
    return 27;
  }
  
  Me.prototype.description = function() {
    return this.firstName() + this.fullName() + this.age()
  }
  
  function firstName() {
    return this
  }
  
  let eu = new Me();
  console.log(eu.firstName())
  console.log(eu.fullName())
  console.log(eu.fullName() + eu.age())
  console.log(eu.description())
  
  // 'Renegade' function - window scope
  console.log(firstName())
  
  
  