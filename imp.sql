-- MySQL dump 10.14  Distrib 5.5.52-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: imp
-- ------------------------------------------------------
-- Server version	5.5.52-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `infoTypes`
--

DROP TABLE IF EXISTS `infoTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `infoTypes` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `guid` varchar(55) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text,
  `location` varchar(125) DEFAULT NULL,
  `link` text,
  `createDescription` text,
  `access` varchar(2) DEFAULT NULL,
  `accessDescription` text,
  `changeControl` varchar(2) DEFAULT NULL,
  `changeDescription` text,
  `uniqueID` varchar(2) DEFAULT NULL,
  `uniqueidDescription` text,
  `audits` varchar(2) DEFAULT NULL,
  `auditDescription` text,
  `_timestamp` varchar(75) NOT NULL,
  `locationInfo` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guid` (`guid`),
  UNIQUE KEY `guid_2` (`guid`),
  UNIQUE KEY `guid_3` (`guid`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tools` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `guid` varchar(55) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text,
  `manager` text,
  `contentManager` text,
  `existingTutorials` text,
  `existingProcesses` text,
  `existingPolicy` text,
  `location` text,
  `_timestamp` varchar(75) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guid` (`guid`),
  UNIQUE KEY `guid_2` (`guid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `versioningInfoTypes`
--

DROP TABLE IF EXISTS `versioningInfoTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `versioningInfoTypes` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `guid` varchar(55) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text,
  `location` varchar(125) DEFAULT NULL,
  `link` text,
  `createDescription` text,
  `access` varchar(2) DEFAULT NULL,
  `accessDescription` text,
  `changeControl` varchar(2) DEFAULT NULL,
  `changeDescription` text,
  `uniqueID` varchar(2) DEFAULT NULL,
  `uniqueidDescription` text,
  `audits` varchar(2) DEFAULT NULL,
  `auditDescription` text,
  `_timestamp` varchar(75) NOT NULL,
  `locationInfo` text,
  `versionID` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `versionID` (`versionID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `versioningTools`
--

DROP TABLE IF EXISTS `versioningTools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `versioningTools` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `guid` varchar(55) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text,
  `manager` text,
  `contentManager` text,
  `existingTutorials` text,
  `existingProcesses` text,
  `existingPolicy` text,
  `location` text,
  `_timestamp` varchar(75) NOT NULL,
  `versionID` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `versionID` (`versionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-17 14:06:15
