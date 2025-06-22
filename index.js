function distanceFromHqInBlocks(InputpickupLocation){
    let actualPickupLocation = Number.parseInt(InputpickupLocation);
    let distanceInBlocks = (Math.abs(42 - actualPickupLocation));
    return distanceInBlocks;
}

function distanceFromHqInFeet(distanceInBlock){
    let dis = distanceFromHqInBlocks(distanceInBlock);
    let distanceInFeet = dis * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start,destination){
    let startInt = Number.parseInt(start);
    let destinationInt = Number.parseInt(destination);
    let numberOfBlocks = Math.abs(destinationInt - startInt);
    let feetNumber = 264 * numberOfBlocks;
    return feetNumber;
}

function calculatesFarePrice(start,destination){
    let feetCharged = distanceTravelledInFeet(start,destination) - 400;
    let flatFare = 0;
    let pricePerFoot = 0;
    if(feetCharged < 0){
        return 0;
    }else if(feetCharged < 1600){
        let pricePerFoot = 0.02;
        let farePrice = feetCharged * pricePerFoot;
        return farePrice;
    } else if(feetCharged < 2100){
        let pricePerFoot = 0;
        let flatFare = 25;
        let farePrice = flatFare + (feetCharged * pricePerFoot);
        return farePrice;
    }else if(feetCharged > 2100){
        return "cannot travel that far";
    }

}

distanceFromHqInBlocks(43);
distanceFromHqInFeet(43);
distanceTravelledInFeet(43,48);
calculatesFarePrice(43,48);
console.log(calculatesFarePrice());
