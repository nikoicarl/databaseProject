-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 08, 2024 at 07:05 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym_membership_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeID` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employeeID`, `fname`, `lname`) VALUES
(1, 'William', 'Doe'),
(3, 'Sabrina', 'Mandla');

-- --------------------------------------------------------

--
-- Table structure for table `fee`
--

CREATE TABLE `fee` (
  `feeID` int(11) NOT NULL,
  `member_typeID` int(11) NOT NULL,
  `amount` double(10,2) NOT NULL,
  `payment_type` varchar(20) NOT NULL,
  `due_date` varchar(20) NOT NULL,
  `invoice_number` varchar(255) NOT NULL,
  `discount` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fee`
--

INSERT INTO `fee` (`feeID`, `member_typeID`, `amount`, `payment_type`, `due_date`, `invoice_number`, `discount`) VALUES
(1, 1, 20.00, 'cash', '2024-03-21', '662142693', 0.00),
(2, 2, 21.00, 'cash', '2024-04-25', '3397895', 312.00),
(3, 3, 12.00, 'cash', '2024-04-04', '454011268', 12.00);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `locationID` int(11) NOT NULL,
  `street_number` int(20) NOT NULL,
  `street_name` varchar(255) NOT NULL,
  `city` varchar(20) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `employee_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`locationID`, `street_number`, `street_name`, `city`, `postal_code`, `phone_number`, `employee_number`) VALUES
(1, 2375, 'McBain Ave', 'Vancouver', 'V6L 763', 234514241, ''),
(2, 2375, 'Elton John Street', 'Surrey', 'V3M 2V4', 604763655, '');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memberID` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `locationID` int(11) NOT NULL,
  `dob` varchar(10) NOT NULL,
  `age` int(100) NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memberID`, `phone`, `fname`, `lname`, `locationID`, `dob`, `age`, `address`) VALUES
(1, '2365142181', 'Carl', 'Nikoi', 2, '2024-03-08', 21, '5088 Moss St'),
(2, '2365142181', 'Carla', 'Nikoi', 1, '2024-04-13', 3, '5088 Moss St'),
(3, '2365142181', 'Carling', 'Nikoi', 2, '2024-04-05', 21, '5088 Moss St');

-- --------------------------------------------------------

--
-- Table structure for table `membership_type`
--

CREATE TABLE `membership_type` (
  `member_typeID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `date_created` varchar(20) NOT NULL,
  `start_date` varchar(20) NOT NULL,
  `end_date` varchar(20) NOT NULL,
  `type` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `membership_type`
--

INSERT INTO `membership_type` (`member_typeID`, `name`, `employeeID`, `memberID`, `date_created`, `start_date`, `end_date`, `type`, `status`) VALUES
(1, 'Silver', 1, 1, '2024-03-27 11:43:19', '2024-03-23', '2024-03-31', 'cash', 'Active'),
(2, '21', 1, 2, '2024-04-02 10:35:42', '2024-04-04', '2024-04-05', 'cash', 'Active'),
(3, '321', 1, 3, '2024-04-02 10:39:57', '2024-04-06', '2024-04-13', 'cash', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeID`);

--
-- Indexes for table `fee`
--
ALTER TABLE `fee`
  ADD PRIMARY KEY (`feeID`),
  ADD KEY `member_typeID` (`member_typeID`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`locationID`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberID`),
  ADD KEY `locationID` (`locationID`);

--
-- Indexes for table `membership_type`
--
ALTER TABLE `membership_type`
  ADD PRIMARY KEY (`member_typeID`),
  ADD KEY `employeeID` (`employeeID`),
  ADD KEY `memberID` (`memberID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fee`
--
ALTER TABLE `fee`
  MODIFY `feeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `locationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `membership_type`
--
ALTER TABLE `membership_type`
  MODIFY `member_typeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fee`
--
ALTER TABLE `fee`
  ADD CONSTRAINT `fee_ibfk_1` FOREIGN KEY (`member_typeID`) REFERENCES `membership_type` (`member_typeID`);

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`locationID`) REFERENCES `location` (`locationID`);

--
-- Constraints for table `membership_type`
--
ALTER TABLE `membership_type`
  ADD CONSTRAINT `membership_type_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`),
  ADD CONSTRAINT `membership_type_ibfk_2` FOREIGN KEY (`memberID`) REFERENCES `member` (`memberID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
