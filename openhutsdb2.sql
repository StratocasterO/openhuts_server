-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2019 a las 14:53:39
-- Versión del servidor: 10.1.33-MariaDB
-- Versión de PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `openhutsdb2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huts`
--

CREATE TABLE `huts` (
  `id` int(11) NOT NULL,
  `name` text COLLATE latin1_bin NOT NULL,
  `description` text COLLATE latin1_bin NOT NULL,
  `lat` double NOT NULL,
  `lon` double NOT NULL,
  `rating` float NOT NULL,
  `user` int(11) NOT NULL,
  `rain` int(11) NOT NULL,
  `wind` int(11) NOT NULL,
  `temp` int(11) NOT NULL,
  `img` text COLLATE latin1_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Volcado de datos para la tabla `huts`
--

INSERT INTO `huts` (`id`, `name`, `description`, `lat`, `lon`, `rating`, `user`, `rain`, `wind`, `temp`, `img`) VALUES
(1, 'Refugio de la Morera de Montserrat\r\n', 'Situat al nucli urbà de la Morera de Montsant, en ple Parc Natural de la Serra de Montsant, la FEEC ha rehabilitat com a refugi de muntanya les antigues instal•lacions de l’ajuntament del municipi', 41.2644, 0.8412, 0, 1, 2, 2, 2, NULL),
(2, 'Refugi Font Ferrera', 'A l’extrem sud-oest del massís dels Ports, la serralada més meridional de Catalunya, ben a prop del Tossal d’en Cervera (1.346 m), s’hi ubica el refugi Font Ferrera, un edifici que des de l’any 1997 funciona com a refugi guardat', 40.7291, 0.2032, 0, 1, 2, 2, 2, NULL),
(3, 'Refugio Agulles Vicenç Barbe', 'Situat al bell mig de la regió montserratina d’Agulles, aquest és un dels dos equipaments guardats que té la Federació al massís de Montserrat', 41.6063, 1.7848, 0, 1, 2, 2, 2, NULL),
(4, 'Refugi Sant Jordi', 'L’any 1951 la delegacio catalana de la llavors Federació Espanyola de Muntanyisme va habilitar com a refugi l’antic Hostal de la Font del Faig, ubicat en un enclavament estratègic al peu del coll de Pendís. Temps després, l’estat precari de l’edifici va propiciar que els propietaris cedissin a la FEEC una parcel•la veïna per erigir-hi un nou refugi', 42.2941, 1.805, 0, 1, 2, 2, 2, NULL),
(5, 'Refugi Serra d\'Ensija', 'Situat en una magnífica raconada envoltada de prats, ben a prop de la seva màxima elevació de la serra d’Ensija, el Cap de la Gallina Pelada (2.321 m), és un equipament ideal tant per passar-hi la nit com per aturar-s’hi a fer un mos. Els camins d’accés pel barranc de Llobateres i per la Font Freda són una delícia. Es tracta també d’un indret magnífic per a la pràctica de l’excursionisme hivernal amb raquetes de neu, amb uns perfils de muntanyes majoritàriament arrodonits, ideals per a la pràctica d’aquesta disciplina de muntanya. També s’hi poden fer diverses excursions amb esquí de muntanya. Ensija és l’únic refugi guardat d’aquesta serralada prepirinenca, que amaga molts tresors amagats. Ara només es tracta de descobrir-los', 42.1872, 1.7486, 0, 1, 2, 2, 2, NULL),
(6, 'Refugi Prat D\'Aguilo \"Cesar August Torras\"\r\n\r\n', 'Situat en una de les raconades més boniques de la serra del Cadí, al vessant nord de l’espectacular Pas dels Gosolans, el refugi Prat d’Aguiló fou inaugurat l’any 1976. Forma part de la popular travessa Cavalls del Vent, que recorre tots els refugi del Parc Natural del Cadí-Moixeró. Es tracta d’una parada obligatòria si es fa aquesta travessa o si es vol assolir el Comabona (2.548 m), el cim més popular d’aquesta part de la serra. Excel•lent camp base si es vol practicar l’alpinisme. També és molt recomanable el seu accés a través del PR-C 124 des del poble d’Olià (Cerdanya)', 42.2972, 1.7141, 0, 1, 2, 2, 2, NULL),
(7, 'Refugi Coma de Vaca', 'Coma de Vaca és un refugi modern i acollidor, situat en una bucòlica vall envoltada de cims, on conflueixen els rius Freser i Coma de Vaca. Punt de pas d’una de les variants del GR 11 (GR 11.7), l’excursió al refugi per les gorges del Freser o pel Camí dels Enginyers des de Núria ja és de per si una experiència inoblidable. El refugi també forma part de la Travessa dels 3 Refugis i de la ruta Muntanyes Màgiques', 42.3854, 2.219, 0, 1, 2, 2, 2, NULL),
(8, 'Refugi Estanys de la Pera', 'Enlairat a 2357 m d’altitud, el refugi Estanys de la Pera es troba al vessant sud del port de Perafita, al costat dels estanys de la Pera. L’equipament, inaugurat l’any 1957, és punt de pas del GR 11.10, una de les variants del sender de gran recorregut transpirinenc per excel•lència, que comunica la Cerdanya amb el Principat d’Andorra', 42.4566, 1.5988, 0, 1, 2, 2, 2, NULL),
(9, 'Refugi Costa Bona', 'Refugi situat al Vessant sud del Costabona, sota la font de Fra Joan ', 42.4107, 2.3398, 0, 1, 2, 2, 2, NULL),
(10, 'Refugi Colomina', 'L’edifici del refugi Colomina fou construït a la ribera de l’estany del mateix nom l’any 1917. Es coneixia com a casa Keller, nom de l’enginyer suís que hi habitava i des d’on dirigia el que va significar la primera gran obra hidroelèctrica de l’Estat. Acabades les obres de la zona lacustre de la vall Fosca, la companyia FECSA -actualment Endesa- va cedir la gestió del refugi a la FEEC, que l’inaugurà com a allotjament muntanyenc l’any 1973. Posteriorment, el 1985, la Federació hi va realitzar una completa reforma per adaptar-lo a les necessitats dels excursionistes que cada cop visitaven amb més assiduïtat el sector meridional del Parc Nacional d’Aigüestortes i Estany de Sant Maurici. L’any 2011 s’hi inaugurà la darrera reforma, que consistí en la construcció d’un annex que a l’estiu funciona com a zona de motxilles i que en absència de guarda es converteix en el refugi lliure. Amb l’ampliació realitzada aquest 2017 el refugi ha augmentat considerablement en comoditat i espai, tant per als usuaris com per als guardes, ja que s’ha ampliat l’espai de la cuina i el menjador. El nombre de dutxes i lavabos també s’ha augmentat, adequant-lo així a les necessitats reals del refugi, que havien quedat desfasades. A la planta superior s’han ampliat els dormitoris, amb l’objectiu de tenir una major amplitud d’espai i també s’ha reformat l’escala interior per tal de millorar les condicions d’ús i de seguretat dels excursionistes', 42.5194, 1.0013, 0, 1, 2, 2, 2, NULL),
(11, 'Refugi Mallafré (Sant Maurici)', 'A prop de la presa de l’estany de Sant Maurici, el bell mig del Parc Nacional d’Aigüestortes i Estany de Sant Maurici, s’aixeca el refugi Mallafré, un edifici cedit per Endesa a la FEEC i que des de l’any 1975 funciona com a refugi guardat', 42.5788, 1.0091, 0, 1, 2, 2, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `lists`
--

INSERT INTO `lists` (`id`, `user`, `name`) VALUES
(1, 2, 'Pirineos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lists-huts`
--

CREATE TABLE `lists-huts` (
  `id` int(11) NOT NULL,
  `list` int(11) NOT NULL,
  `hut` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Volcado de datos para la tabla `lists-huts`
--

INSERT INTO `lists-huts` (`id`, `list`, `hut`) VALUES
(1, 1, 2),
(2, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text COLLATE latin1_bin NOT NULL,
  `email` text COLLATE latin1_bin NOT NULL,
  `pass` text COLLATE latin1_bin NOT NULL,
  `description` text COLLATE latin1_bin NOT NULL,
  `location` text COLLATE latin1_bin,
  `img` text COLLATE latin1_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `description`, `location`, `img`) VALUES
(1, 'Open Huts', 'info_Openhuts@gmail.com', '123456', 'Perfil oficial de Open Huts', 'Barcelona', ''),
(2, 'Omar Olmedo', 'omarolmedoferrer@gmail.com', '123456', 'Especialista y responsable del equipo de Programación y desarrollo de Open Huts', 'Piera', ''),
(3, 'Anna Manent', 'annnamg5@gmail.com', '123456', 'Especialista y responsable del equipo de Diseño de Open Huts', 'Granollers', ''),
(4, 'Scarlet Sanchez', 'em.sanchez.scarlet@gmail.com', '123456', 'Especialista y responsable del equipo de Diseño de Open Huts', 'Barcelona', ''),
(5, 'Mariana Lorena Heredia', '95marianalorena@gmail.com', '123456', 'Especialista y responsable del equipo de Marketing de Open Huts', 'Barcelona', ''),
(6, 'Víctor Matilla', 'vommu1295@gmail.com', '123456', 'Especialista y responsable del equipo de Marketing de Open Huts', 'Barcelona', ''),
(7, 'Bru Mas', 'howna13@gmail.com', '123456', 'Fundador de Open Huts', 'Switzerland', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `huts`
--
ALTER TABLE `huts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `lists-huts`
--
ALTER TABLE `lists-huts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list` (`list`),
  ADD KEY `hut` (`hut`),
  ADD KEY `list_2` (`list`),
  ADD KEY `hut_2` (`hut`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `huts`
--
ALTER TABLE `huts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `lists-huts`
--
ALTER TABLE `lists-huts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `huts`
--
ALTER TABLE `huts`
  ADD CONSTRAINT `CF_Users` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `lists`
--
ALTER TABLE `lists`
  ADD CONSTRAINT `lists_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `lists-huts`
--
ALTER TABLE `lists-huts`
  ADD CONSTRAINT `lists-huts_ibfk_1` FOREIGN KEY (`list`) REFERENCES `lists` (`id`),
  ADD CONSTRAINT `lists-huts_ibfk_2` FOREIGN KEY (`hut`) REFERENCES `huts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
