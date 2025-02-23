// Code your solution here:
function driversWithRevenueOver (drivers, revenueValue){
    const newDriversFilterList = drivers.filter(
      function (driver) { return driver.revenue > revenueValue; }
    );

    return newDriversFilterList;
  }

  function driverNamesWithRevenueOver(drivers, revenueValue){
    const newDriversFilterList = drivers.filter(
      function (driver) { return driver.revenue > revenueValue; }
    ).map(function(driver){
      return driver.name;
    });

    return newDriversFilterList;
  }

  function exactMatch(drivers, driverObj){
    const newDriversFilterList = drivers.filter(
      function (driver) { return driver.name ===  driverObj.name || driver.revenue ===  driverObj.revenue; }
    );

    return newDriversFilterList;
  }

  function exactMatchToList(drivers, driverObj){
    const newDriversFilterList = drivers.filter(
      function (driver) { return driver.name ===  driverObj.name || driver.revenue ===  driverObj.revenue; }
    ).map(function(driver){
      return driver.name;
    });

    return newDriversFilterList;
}