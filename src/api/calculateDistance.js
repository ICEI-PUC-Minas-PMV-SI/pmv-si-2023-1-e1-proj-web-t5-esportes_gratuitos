function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

module.exports = (from, to) => {
    const earthRadius = 6371;

    const [latFrom, lngFrom] = from;
    const [latTo, lngTo] = to;

    const dLat = toRadians(latTo - latFrom);
    const dLon = toRadians(lngTo - lngFrom);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(latFrom)) * Math.cos(toRadians(latTo)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
}