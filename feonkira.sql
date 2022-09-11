-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.33 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage de la structure de la table mozika. acheter
CREATE TABLE IF NOT EXISTS `acheter` (
  `idUser` int(11) NOT NULL,
  `idInstru` int(11) NOT NULL,
  `dateAchat` date NOT NULL,
  `heureAchat` time NOT NULL,
  PRIMARY KEY (`idUser`,`idInstru`),
  KEY `idInstru` (`idInstru`),
  CONSTRAINT `acheter_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilisateur` (`idUser`),
  CONSTRAINT `acheter_ibfk_2` FOREIGN KEY (`idInstru`) REFERENCES `instru` (`idInstru`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. categoriemusic
CREATE TABLE IF NOT EXISTS `categoriemusic` (
  `idCategorieMusic` int(11) NOT NULL AUTO_INCREMENT,
  `nomCategorieMusic` varchar(50) NOT NULL,
  PRIMARY KEY (`idCategorieMusic`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. categorienotification
CREATE TABLE IF NOT EXISTS `categorienotification` (
  `idCategorieNotif` int(11) NOT NULL AUTO_INCREMENT,
  `nomCategorieNotif` varchar(50) NOT NULL,
  PRIMARY KEY (`idCategorieNotif`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. dedier
CREATE TABLE IF NOT EXISTS `dedier` (
  `idInstru` int(11) NOT NULL,
  `idCategorieMusic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. formatinstru
CREATE TABLE IF NOT EXISTS `formatinstru` (
  `idFormat` int(11) NOT NULL AUTO_INCREMENT,
  `nomFormat` varchar(50) NOT NULL,
  PRIMARY KEY (`idFormat`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. instru
CREATE TABLE IF NOT EXISTS `instru` (
  `idInstru` int(11) NOT NULL AUTO_INCREMENT,
  `dateUpload` date NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idInstru`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. notification
CREATE TABLE IF NOT EXISTS `notification` (
  `idNotif` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(50) NOT NULL,
  `idUserAction` int(11) NOT NULL,
  `idUserCible` int(11) NOT NULL,
  `idInstru` int(11) DEFAULT NULL,
  `dateNotification` date NOT NULL,
  `heureNotif` time NOT NULL,
  `idCategorieNotif` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idNotif`),
  KEY `idCategorieNotif` (`idCategorieNotif`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`idCategorieNotif`) REFERENCES `categorienotification` (`idCategorieNotif`),
  CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `utilisateur` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. prix
CREATE TABLE IF NOT EXISTS `prix` (
  `idPrix` int(11) NOT NULL AUTO_INCREMENT,
  `prix` int(11) NOT NULL DEFAULT '0',
  `idInstru` int(11) NOT NULL,
  `idFormat` int(11) NOT NULL,
  PRIMARY KEY (`idPrix`),
  KEY `prix_ibfk_1` (`idInstru`),
  KEY `prix_ibfk_2` (`idFormat`),
  CONSTRAINT `prix_ibfk_1` FOREIGN KEY (`idInstru`) REFERENCES `instru` (`idInstru`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `prix_ibfk_2` FOREIGN KEY (`idFormat`) REFERENCES `formatinstru` (`idFormat`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. reagir
CREATE TABLE IF NOT EXISTS `reagir` (
  `idUser` int(11) NOT NULL,
  `idInstru` int(11) NOT NULL,
  `dateReaction` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. s_abonner
CREATE TABLE IF NOT EXISTS `s_abonner` (
  `idUser` int(11) NOT NULL,
  `idUser_1` int(11) NOT NULL,
  PRIMARY KEY (`idUser`,`idUser_1`),
  KEY `s_abonner_ibfk_2` (`idUser_1`),
  CONSTRAINT `s_abonner_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilisateur` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `s_abonner_ibfk_2` FOREIGN KEY (`idUser_1`) REFERENCES `utilisateur` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. typeuser
CREATE TABLE IF NOT EXISTS `typeuser` (
  `idTypeUser` int(11) NOT NULL AUTO_INCREMENT,
  `nomTypeUser` varchar(50) NOT NULL,
  PRIMARY KEY (`idTypeUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table mozika. utilisateur
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `nomUser` varchar(50) NOT NULL,
  `prenomUser` varchar(50) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `idTypeUser` int(11) NOT NULL,
  PRIMARY KEY (`idUser`),
  KEY `utilisateur_ibfk_1` (`idTypeUser`),
  CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`idTypeUser`) REFERENCES `typeuser` (`idTypeUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
