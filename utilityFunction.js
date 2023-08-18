
// // Function to retrieve Daily statistical data
// async function getDailyStatistics() {
//   try {
//     // Get the database instance
//     const db = client.db(dbName);

//     // Get the collection for your data
//     const dataCollection = db.collection('your-data-collection');

//     // Perform aggregation to calculate daily statistics
//     const statistics = await dataCollection.aggregate([
//       // Aggregation pipeline stages to calculate daily statistics
//       {
//         $group: {
//           _id: { $dateToString: { format: '%Y-%m-%d', date: '$dateField' } }, // Replace 'dateField' with your actual date field name
//           total: { $sum: '$amount' }, // Replace 'amount' with the field you want to calculate the sum for
//         },
//       },
//       {
//         $sort: { _id: 1 }, // Sort by date in ascending order
//       },
//     ]).toArray();

//     return statistics;
//   } catch (err) {
//     console.error('Error retrieving daily statistics:', err);
//     throw err;
//   }
// }

// // Function to retrieve Weekly statistical data
// async function getWeeklyStatistics() {
//   try {
//     // Get the database instance
//     const db = client.db(dbName);

//     // Get the collection for your data
//     const dataCollection = db.collection('your-data-collection');

//     // Perform aggregation to calculate weekly statistics
//     const statistics = await dataCollection.aggregate([
//       // Aggregation pipeline stages to calculate weekly statistics
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: '%Y-%m-%W', date: '$dateField' }, // Replace 'dateField' with your actual date field name
//           },
//           total: { $sum: '$amount' }, // Replace 'amount' with the field you want to calculate the sum for
//         },
//       },
//       {
//         $sort: { _id: 1 }, // Sort by week in ascending order
//       },
//     ]).toArray();

//     return statistics;
//   } catch (err) {
//     console.error('Error retrieving weekly statistics:', err);
//     throw err;
//   }
// }

// // Function to retrieve Monthly statistical data
// async function getMonthlyStatistics() {
//   try {
//     // Get the database instance
//     const db = client.db(dbName);

//     // Get the collection for your data
//     const dataCollection = db.collection('your-data-collection');

//     // Perform aggregation to calculate monthly statistics
//     const statistics = await dataCollection.aggregate([
//       // Aggregation pipeline stages to calculate monthly statistics
//       {
//         $group: {
//           _id: { $month: '$dateField' }, // Replace 'dateField' with your actual date field name
//           total: { $sum: '$amount' }, // Replace 'amount' with the field you want to calculate the sum for
//         },
//       },
//       {
//         $sort: { _id: 1 }, // Sort by month in ascending order
//       },
//     ]).toArray();

//     return statistics;
//   } catch (err) {
//     console.error('Error retrieving monthly statistics:', err);
//     throw err;
//   }
// }

// // Function to retrieve Weekly statistical data with Match conditions (applicable for all)
// async function getWeeklyStatisticsWithMatchConditions() {
//   try {
//     // Get the database instance
//     const db = client.db(dbName);

//     // Get the collection for your data
//     const dataCollection = db.collection('your-data-collection');

//     // Match conditions for filtering data
//     const matchConditions = {
//       // Add your match conditions here
//       // Example: { category: 'sales' }
//     };

//     // Perform aggregation to calculate weekly statistics with match conditions
//     const statistics = await dataCollection.aggregate([
//       // Match documents based on conditions
//       { $match: matchConditions },
//       // Group by week and calculate sum
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: '%Y-%m-%W', date: '$dateField' }, // Replace 'dateField' with your actual date field name
//           },
//           total: { $sum: '$amount' }, // Replace 'amount' with the field you want to calculate the sum for
//         },
//       },
//       {
//         $sort: { _id: 1 }, // Sort by week in ascending order
//       },
//     ]).toArray();

//     return statistics;
//   } catch (err) {
//     console.error('Error retrieving weekly statistics with match conditions:', err);
//     throw err;
//   }
// }


// // To calculate the expiration date within two given dates 

// function calculateExpirationDate(startDate, durationInDays) {
//   var expirationDate = new Date(startDate);
//   expirationDate.setDate(startDate.getDate() + durationInDays);
//   return expirationDate;
// }

// // Example usage
// var startDate = new Date('2023-06-01');
// var durationInDays = 10;

// var expirationDate = calculateExpirationDate(startDate, durationInDays);

// // Extract the year, month, and day from the expiration date
// var year = expirationDate.getFullYear();
// var month = expirationDate.getMonth() + 1; // Months are zero-based, so add 1
// var day = expirationDate.getDate();

// // Format the result as a string (YYYY-MM-DD)
// var formattedExpirationDate = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');

// console.log("Expiration date:", formattedExpirationDate);


// // Moment Calculate date between two days




// var a = moment([2007, 0, 29]);
// var b = moment([2007, 0, 28]);
// a.diff(b, 'days')




// // Reamaing dates to exprire related thigs   Remaining days: 23

// function calculateRemainingDays(expirationDate) {
//   // Get the current date
//   var currentDate = new Date();

//   // Calculate the difference in milliseconds between the expiration date and the current date
//   var timeDifference = expirationDate.getTime() - currentDate.getTime();

//   // Calculate the number of days
//   var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

//   return remainingDays;
// }

// // Example usage
// var expirationDate = new Date('2023-06-30');
// var remainingDays = calculateRemainingDays(expirationDate);

// console.log("Remaining days:", remainingDays);

// //calculate distance between two coordinate

// const geolib = require('geolib');

// // Coordinates of the first location
// const location1 = { latitude: 52.5200, longitude: 13.4050 };

// // Coordinates of the second location
// const location2 = { latitude: 48.8566, longitude: 2.3522 };

// // Calculate the distance between the two coordinates
// const distance = geolib.getDistance(location1, location2);

// console.log(distance); // Output: 878709 (in meters)


// //Dsitance between two  co-ordinate latitude and longitude


// function calculateDistance(lat1, lon1, lat2, lon2) {
//   const earthRadius = 6371; // Radius of the Earth in kilometers
//   const lat1Rad = (lat1 * Math.PI) / 180;
//   const lon1Rad = (lon1 * Math.PI) / 180;
//   const lat2Rad = (lat2 * Math.PI) / 180;
//   const lon2Rad = (lon2 * Math.PI) / 180;
//   const latDiff = lat2Rad - lat1Rad;
//   const lonDiff = lon2Rad - lon1Rad;
//   const a =  Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
//     Math.cos(lat1Rad) *
//     Math.cos(lat2Rad) *
//     Math.sin(lonDiff / 2) *
//     Math.sin(lonDiff / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = earthRadius * c;

//   return distance;
// }


// const distance = calculateDistance("20.2602964", "85.8394521", 20.9114198, 86.4377032);
// console.log(distance.toFixed(1)); // Output: 878.7099629302878 (in kilometers)




// const express = require("express")
// const os = require("os")
// const cluster = require("cluster")

// const PORT = process.env.PORT || 5000

// const clusterWorkerSize = os.cpus().length

// if (clusterWorkerSize > 1) {
//   if (cluster.isMaster) {
//     for (let i=0; i < clusterWorkerSize; i++) {
//       cluster.fork()
//     }

//     cluster.on("exit", function(worker) {
//       console.log("Worker", worker.id, " has exitted.")
//     })
//   } else {
//     const app = express()

//     app.listen(PORT, function () {
//       console.log(`Express server listening on port ${PORT} and worker ${process.pid}`)
//     })
//   }
// } else {
//   const app = express()

//   app.listen(PORT, function () {
//     console.log(`Express server listening on port ${PORT} with the single worker ${process.pid}`)
//   })
// }


const AWS = require('aws-sdk');

// Set the AWS configuration with your credentials and region
AWS.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION',
});

// Create an S3 object
const s3 = new AWS.S3();

// Define the bucket name and the file name you want to delete
const bucketName = 'your-s3-bucket-name';
const fileName = 'file-to-delete.jpg'; // Replace this with the actual file name

// Delete the file from the bucket
s3.deleteObject(
  {
    Bucket: bucketName,
    Key: fileName,
  },
  function (err, data) {
    if (err) {
      console.log('Error deleting the file:', err);
    } else {
      console.log('File deleted successfully:', data);
    }
  }
);

--------------------

const express = require('express');
const Order = require('./models/order'); // Adjust the path based on your file structure

const app = express();
const port = 3000;

// API endpoint to get order amounts by month for the current year
app.get('/api/orders-by-month', async (req, res) => {
    const currentYear = new Date().getFullYear();

    try {
        const result = await Order.aggregate([
            {
                $match: {
                    orderDate: {
                        $gte: new Date(`${currentYear}-01-01`),
                        $lt: new Date(`${currentYear + 1}-01-01`)
                    }
                }
            },
            {
                $group: {
                    _id: { $month: '$orderDate' },
                    totalAmount: { $sum: '$amount' }
                }
            }
        ]);

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
-----------------------------------------------------
const express = require('express');
const geolib = require('geolib');

const app = express();
const port = 3000;

app.use(express.json());

// Define the geofenced area (center and radius)
const geofenceCenter = { latitude: 37.7749, longitude: -122.4194 };
const geofenceRadius = 1000; // in meters

// API endpoint to check if a location is within the geofenced area
app.post('/api/check-geofence', (req, res) => {
    const { latitude, longitude } = req.body;

    const isInsideGeofence = geolib.isPointInCircle(
        { latitude, longitude },
        geofenceCenter,
        geofenceRadius
    );

    res.json({ isInsideGeofence });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

--------------------------------------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Replace with your path to the user model

const app = express();
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true }); // Replace with your MongoDB connection details

app.get('/users-last-x-months/:months', async (req, res) => {
  try {
    const months = parseInt(req.params.months);
    if (isNaN(months) || months < 1) {
      return res.status(400).json({ error: 'Invalid input for months' });
    }

    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - months);

    const users = await User.find({ createdAt: { $gte: fromDate } });
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Error retrieving users' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

