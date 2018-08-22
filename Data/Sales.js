const mongoose = require('mongoose');
const { Schema } = mongoose;

const salesSchema = new Schema({
    LatestShipDate: String,
    PurchaseDate: String,
    PurchaseTime: String,
    OrderType: String,
    PurchaseDate: String,
    AmazonOrderId: String,
    IsReplacementOrder: String,
    NumberOfItemsShipped: String,
    ShipServiceLevel: String,
    BuyerName: String,
    Amount: String,
    CurrencyCode: String,
    City: String,
    PostalCode: String,
    StateOrRegion: String,
    Name: String,
    AddressLine1: String,
    ShipmentServiceLevelCategory: String,
    isPrime: String
});
mongoose.model('salesData', salesSchema);