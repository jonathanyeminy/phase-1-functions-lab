// Code your solution in this file!

function distanceFromHqInBlocks(destStreet){
    return Math.abs(42-destStreet)
}

function distanceFromHqInFeet(destStreet) {
    return distanceFromHqInBlocks(destStreet) * 264
}

function distanceTravelledInFeet(start,destination){
    return (Math.abs(destination-start)*264)
}

function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination) > 2500) {
        return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(start,destination) > 2000){
        return 25
    }
    else if (distanceTravelledInFeet(start,destination) > 400) {
        return (distanceTravelledInFeet(start,destination)-400) * .02
    }
    else if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0
    }
}