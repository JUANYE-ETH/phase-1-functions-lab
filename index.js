// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation); 
}
console.log(distanceFromHqInBlocks(43))
// Returning blocks traveled from HQ with Math.abs() 

function distanceFromHqInFeet(Blocks) {
    return distanceFromHqInBlocks(Blocks) * 264;
}
console.log(distanceFromHqInFeet(4));
// Knowing 1 block = 264 we used that to convert blocks to feet in the return value

function distanceTravelledInFeet(start, destination) {
    return  Math.abs(start - destination) * 264; 
}
console.log(distanceTravelledInFeet(43,48));
// Used Math.abs() again to calculate the distance traveled in feet

function calculatesFarePrice()