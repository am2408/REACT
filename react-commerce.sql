-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 12 fév. 2020 à 12:54
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `coca4you`
--

-- --------------------------------------------------------

--
-- Structure de la table `cocas`
--

DROP TABLE IF EXISTS `cocas`;
CREATE TABLE IF NOT EXISTS `cocas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(70) COLLATE utf8_bin NOT NULL,
  `Photo` varchar(90) COLLATE utf8_bin NOT NULL,
  `Description` varchar(250) COLLATE utf8_bin NOT NULL,
  `QuantityInStock` int(5) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `cocas`
--

INSERT INTO `cocas` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Le fabuleux basic', 'coca_basic.jpg', 'Un subtil coca adoré des gilets jaune et des travailleurs dans BTP ! Son goût à la fois frais et fortement sucré ravira les plus addicts d\'entre vous.', 50, 0.8, 1),
(2, 'L\'indémodable light', 'coca_light.png', 'Un subtil mélange sucré nature sans trop l\'être.', 12, 1, 1.5),
(4, 'coca zero origins', 'coca_zero.jpg', 'Le seul, le vrai, l\'unique coca qui vous fera sentir en apesanteur 0', 50, 1.2, 1.7);

-- --------------------------------------------------------

--
-- Structure de la table `orderline`
--

DROP TABLE IF EXISTS `orderline`;
CREATE TABLE IF NOT EXISTS `orderline` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_Id` int(10) NOT NULL,
  `Quantity_Ordered` int(11) NOT NULL,
  `PriceEach` double NOT NULL,
  `Order_Id` int(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `orderline`
--

INSERT INTO `orderline` (`Id`, `Product_Id`, `Quantity_Ordered`, `PriceEach`, `Order_Id`) VALUES
(2, 1, 6, 55, 3),
(3, 2, 50, 15, 3),
(4, 4, 2, 11, 3),
(5, 1, 6, 55, 4),
(6, 2, 50, 15, 4),
(7, 2, 50, 15, 5),
(8, 1, 3, 55, 6),
(9, 1, 2, 55, 7),
(10, 2, 35, 15, 7),
(11, 1, 2, 55, 8),
(12, 2, 35, 15, 8),
(13, 1, 2, 55, 9),
(14, 2, 35, 15, 9),
(15, 1, 2, 55, 10),
(16, 2, 35, 15, 10),
(17, 1, 2, 55, 11),
(18, 2, 35, 15, 11),
(19, 1, 2, 55, 12),
(20, 2, 35, 15, 12),
(21, 1, 2, 55, 13),
(22, 2, 35, 15, 13),
(23, 1, 2, 55, 14),
(24, 2, 35, 15, 14),
(25, 1, 2, 55, 15),
(26, 2, 35, 15, 15),
(27, 1, 2, 55, 16),
(28, 2, 35, 15, 16),
(29, 1, 2, 55, 17),
(30, 2, 35, 15, 17),
(31, 1, 3, 55, 18),
(32, 4, 50, 11, 18),
(33, 2, 35, 15, 18),
(34, 4, 50, 11, 19),
(35, 2, 35, 15, 19),
(36, 1, 3, 55, 19),
(37, 4, 50, 11, 20),
(38, 2, 35, 15, 20),
(39, 1, 3, 55, 20),
(40, 4, 50, 11, 21),
(41, 2, 35, 15, 21),
(42, 1, 3, 55, 21),
(43, 4, 50, 11, 22),
(44, 2, 35, 15, 22),
(45, 1, 3, 55, 22),
(46, 4, 50, 11, 23),
(47, 2, 35, 15, 23),
(48, 1, 3, 55, 23),
(49, 4, 50, 11, 24),
(50, 2, 35, 15, 24),
(51, 1, 3, 55, 24),
(52, 1, 100, 55, 25),
(53, 1, 100, 55, 26),
(54, 4, 35, 11, 27),
(55, 4, 35, 11, 28),
(56, 1, 35, 55, 29),
(57, 1, 35, 55, 30),
(58, 2, 50, 15, 31),
(59, 1, 3, 55, 32),
(60, 1, 3, 55, 33),
(61, 1, 3, 55, 34),
(62, 1, 3, 55, 35),
(63, 1, 3, 55, 36),
(64, 2, 3, 15, 37),
(65, 4, 50, 11, 38),
(66, 4, 35, 11, 39),
(67, 4, 50, 11, 40),
(68, 1, 3, 55, 40),
(69, 1, 100, 55, 41),
(70, 2, 100, 15, 41),
(71, 4, 100, 11, 41),
(72, 1, 35, 55, 42),
(73, 1, 500, 55, 43),
(74, 1, 35, 55, 44),
(75, 1, 2, 1, 45),
(76, 4, 15, 1.7, 46),
(77, 1, 3, 1, 47),
(78, 4, 15, 1.7, 48),
(79, 1, 15, 1, 49),
(80, 2, 3, 1.5, 50),
(81, 1, 2, 1, 51),
(82, 2, 2, 1.5, 51),
(83, 1, 3, 1, 52),
(84, 2, 50, 1.5, 52),
(85, 1, 50, 1, 53),
(86, 1, 35, 1, 54),
(87, 1, 3, 1, 55);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `CompleteTimestamp` datetime DEFAULT NULL,
  `TaxRate` double DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `TotalAmount` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`Id`, `User_Id`, `CreationTimestamp`, `CompleteTimestamp`, `TaxRate`, `TaxAmount`, `TotalAmount`) VALUES
(51, 18, '2019-12-19 15:02:42', '2019-12-21 14:53:38', 20, 100, 5),
(50, 27, '2019-12-19 14:15:56', '2019-12-19 14:15:57', 20, 90, 4.5),
(49, 27, '2019-12-19 14:15:40', '2019-12-19 14:15:41', 20, 300, 15),
(52, 18, '2019-12-20 12:54:37', NULL, 20, 1560, 78),
(55, 18, '2019-12-21 14:53:36', NULL, 20, 60, 3),
(54, 18, '2019-12-21 14:42:43', NULL, 20, 700, 35),
(53, 18, '2019-12-20 14:10:51', NULL, 20, 1000, 50);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(90) COLLATE utf8_bin NOT NULL,
  `Password` varchar(160) COLLATE utf8_bin NOT NULL,
  `Role` varchar(10) COLLATE utf8_bin NOT NULL,
  `FirstName` varchar(15) COLLATE utf8_bin NOT NULL,
  `LastName` varchar(15) COLLATE utf8_bin NOT NULL,
  `CreationTimeStamp` date NOT NULL,
  `Adress` varchar(60) COLLATE utf8_bin NOT NULL,
  `City` varchar(60) COLLATE utf8_bin NOT NULL,
  `Zip` varchar(5) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`Id`, `Email`, `Password`, `Role`, `FirstName`, `LastName`, `CreationTimeStamp`, `Adress`, `City`, `Zip`) VALUES
(24, 'Ouss@gmail.com', '$2y$11$575a8a2f977d129d85bd1uYO0TEBHbixDjY.KgrwYRmh3T8tPd/ty', 'admin', 'Ousmane', 'Diarra', '2019-12-19', '65 rue de chez moi', 'maison', '78541'),
(27, 'rsmane@gmail.com', '$2y$11$3f96119dfedc46ef86330Owa69t7LxRUeHx4RnI0U.G8aMjVVquNq', 'user', 'rsmane', 'lele', '2019-12-19', '43 avenye du basket', 'val d\'oise', '36758'),
(21, 'redriot@gmail.com', '$2y$11$c0859e9e60b67cb07b16cuYlcGLO29MigBcx62NvLqvzlwj8..PDi', 'admin', 'eijiro', 'kirishima', '2019-12-19', '13 rue de l\'Homme', 'mha city', '12657'),
(18, 'Ballislife@gmail.com', '$2y$11$923327b0f69c360d10ec4uZ2GjoxsbhPSIt9FR2fAC.k6q2hMKUfa', 'admin', 'Ouss', 'Diarra', '2019-12-18', 'mont paozu', 'sevran', '93270');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
