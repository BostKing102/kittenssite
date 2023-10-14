-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 12 2023 г., 16:29
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kittens`
--

-- --------------------------------------------------------

--
-- Структура таблицы `leader`
--

CREATE TABLE `leader` (
  `id` int NOT NULL,
  `rank` text NOT NULL,
  `fraction` text NOT NULL,
  `reason` text NOT NULL,
  `ustwarn` int NOT NULL,
  `strwarn` int NOT NULL,
  `dateSet` int NOT NULL,
  `forum` text NOT NULL,
  `vk` text NOT NULL,
  `history` json NOT NULL,
  `active` tinyint(1) NOT NULL,
  `theme` int NOT NULL,
  `discord` bigint NOT NULL,
  `online` json NOT NULL,
  `server` int NOT NULL,
  `score` int NOT NULL,
  `dopdays` int NOT NULL,
  `immunities` int NOT NULL,
  `nick` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `leader`
--

INSERT INTO `leader` (`id`, `rank`, `fraction`, `reason`, `ustwarn`, `strwarn`, `dateSet`, `forum`, `vk`, `history`, `active`, `theme`, `discord`, `online`, `server`, `score`, `dopdays`, `immunities`, `nick`) VALUES
(1, 'Лидер', 'Админ', 'Заслужил', 0, 0, 1688515200, 'https://forum.arizona-rp.com/members/988180/', 'https://vk.com/id464254903', '{}', 1, 1, 1106956344231206932, '{}', 25, 100, 5, 2, 'Faceless_Solitude');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `leader`
--
ALTER TABLE `leader`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `leader`
--
ALTER TABLE `leader`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
